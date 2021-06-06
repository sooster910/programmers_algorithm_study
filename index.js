const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';
const programmers = require('./programmers');
const file = require('./file');

/**
  * DATA is the object that contains all
  * the data to be provided to Mustache
  * Notice the "name" and "date" property.
*/
let DATA = {

  name: 'Hyunsu Joo',
  date: new Date().toLocaleDateString('ko-KR', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'Asia/Seoul',
  }),
};
/**
  * A - We open 'main.mustache'
  * B - We ask Mustache to render our file with the data
  * C - We create a README.md file with the generated output
  */
async function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}

(async () => {
  //search directories 
  let titleFromFiles = await file.getList();
  console.log(titleFromFiles)
  //initialize scraping on programmers 
  await programmers.initialize('learn/challenges', 'all_challenges');
  let results = await programmers.getResult(titleFromFiles);
  DATA["multiple"] = [...results];
  await programmers.close();

  await generateReadMe();
})();

