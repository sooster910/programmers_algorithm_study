//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const readline = require('readline');


const file = {
    
    //joining path of directory 
    directoryPath: path.join(__dirname, 'src'),
    //passsing directoryPath and callback function
    async getList() {
        let res = []; 

        try {
          
           const files = await fs.readdirSync(this.directoryPath)              
                //listing all files 
               
                for (let file of files) {
                    let filePath = `${this.directoryPath}/${file}/index.js`;
                    let data = await this.readLine(filePath)
                    res.push(data);
                }
                
        } catch (err) {
            console.log(`Unable to scan directory: ${err}`);
        }
       
        return res;
    },

    async readLine(filePath) {
        let res;
        try {
            let data = await fs.readFileSync(filePath, "utf8");            
            data = data.split("\n"); // split the document into lines
            data.length = 1;    // set the total number of lines to 2
            res=data[0]
            if(res.includes("title:")){
                res=res.split(':')[1];
            } 
        } catch (err) {
            console.log(err);
        }
        return res;
    }

}

module.exports = file
