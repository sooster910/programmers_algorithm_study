const puppeteer = require('puppeteer');

const challengeURL = (page, tab) => `https://programmers.co.kr/${page}/?tab=${tab}`;

const self = {
    browser: null,
    page: null,
    initialize: async (page, tab) => {
        this.browser = await puppeteer.launch({ headless: false });
        this.page = await this.browser.newPage();
        //go to programmers page 
        await this.page.goto(challengeURL(page, tab), { waitUntil: 'networkidle0' });
    },

    close: async () => {
        await this.browser.close();
    },

    getResult: async (fileTitles) => {
        let challengeInfos = [];
        let challengeInfo;
        try {
            // let nextPageBtn = await this.page.$('.next.next_page');
            for (let fileTitle of fileTitles) {
                while (true) {

                    await this.page.waitForTimeout(500);
                    if (await this.page.$('.next_page.disabled') !== null) {
             
                        //문제가 리스트에 없을 때 
                        if (Object.keys(challengeInfo).length === 0 && challengeInfo.constructor === Object) {
                            challengeInfo["title"] = fileTitle;
                            challengeInfo["questionURL"] = "None";
                            challengeInfos.push(challengeInfo);
                            break;
                        }
                        break;
                    }

                    challengeInfo = await self.parseResult(fileTitle);
                    console.log(challengeInfo);
                    if (Object.keys(challengeInfo).length !== 0) {
                        challengeInfos.push(challengeInfo);
                        console.log(challengeInfos);
                        const firstPageBtn = await this.page.$x("//a[contains(text(), '1')]");
                    
                        await firstPageBtn[0].click()

                        break
                    }
                    try {
                        await this.page.waitForSelector('.next.next_page');
                    } catch (err) {
                        console.log('Could not find the "Next button"');
                        break;
                    }

                    await this.page.click('.next.next_page');
                    await this.page.waitForTimeout(500);
                    console.log("click next btn")
                }
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

        let elements = await this.page.$$('.card-algorithm');

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