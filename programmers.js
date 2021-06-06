const puppeteer = require('puppeteer');

const challengeURL = (page, tab) => `https://programmers.co.kr/${page}/?tab=${tab}`;

const self = {
    browser: null,
    page: null,
    initialize: async (page, tab) => {
        this.browser = await puppeteer.launch({ headless: true });
        this.page = await this.browser.newPage();
        //go to programmers page 
        await this.page.goto(challengeURL(page, tab), { waitUntil: 'networkidle0' });
    },

    close: async () => {
        await this.browser.close();
    },

    getResult: async (fileTitles) => {
        let challengeInfos = [];
        let challengeInfo={};
        let count = 0;
        try {
            for (let fileTitle of fileTitles) {
                console.log("another file title: ",count)

                //문제 파일을 찾기 위해서
                while (true) {
                    await this.page.waitForTimeout(500);
                    console.log("before await",fileTitle)
                    //find file Info
                    challengeInfo = await self.parseResult(fileTitle);
                    console.log("after await")

                    if (Object.keys(challengeInfo).length !== 0) {
                        challengeInfos.push(challengeInfo);
                        console.log('문제 찾음 !',challengeInfos);
                        //문제 찾은 후 첫번째 페이지로 돌아가기
                        const firstPageBtn = await this.page.$x("//a[contains(text(), '1')]");
                        await firstPageBtn[0].click()
                        console.log("첫번째 페이지로 돌아가기 ")
                        break
                    }
                    //못찾앗다면 다음 페이지로
                    //만약 마지막 페이지라면
                    try {
                        console.log("find disable button")
                        const disabledNextBtn = await this.page.waitForSelector(".next.next_page.disabled");
                        if(disabledNextBtn){
                            console.log("마지막 페이지")
                            if (Object.keys(challengeInfo).length === 0 && challengeInfo.constructor === Object) {
                                        challengeInfo["title"] = fileTitle;
                                        challengeInfo["questionURL"] = "None";
                                        challengeInfos.push(challengeInfo);
                                    }
                            const firstPageBtn = await this.page.$x("//a[contains(text(), '1')]");
                            await firstPageBtn[0].click()
                            break;

                        }//마지막 페이지라면
                        // await this.page.waitForSelector('.next.next_page');
                    } catch (err) {
                        console.log('Could not find the "Next button"');
                        await this.page.click('.next.next_page');
                        await this.page.waitForTimeout(500);
                        console.log("click next btn")

                    }
                }
                count++;
            }
            return challengeInfos
        } catch (err) {
            console.log('something went wrong', err);
            await this.page.close();
        }

    },

    parseResult: async (fileTitle) => {
        let result = {};
        let questionURL = "";
        let level = ""
        await this.page.waitForTimeout(1000);
        await this.page.waitForSelector('.card-algorithm')
        console.log(" in the await ")
        let elements = await this.page.$$('.card-algorithm');
        //loop over each element in the card-algorithm class
        for (let element of elements) {
            //find element 

            let title = await element.$eval(('h4.title'), el => el.innerText.trim());

            if (title.replace(/(\s*)/g, "") === fileTitle.replace(/(\s*)/g, "")) {

                level = await element.evaluate(element => element.getAttribute('class').split(' ')[1]);
                levelUnicode = level === "level-1"? "1️⃣": level==="level-2"?"2️⃣":level==="level-3"? "3️⃣ ":"-";
                questionURL = await element.$eval(('a'), el => el.getAttribute('href'));
                tag = await element.$eval(('a .info .level'), el=>el.innerText.trim());
                result["title"] = title;
                result["level"] = levelUnicode
                result["questionURL"] = questionURL;
                result["tag"] = tag;

            }
        }

        return result;
    }
}

module.exports = self;