/**
 * Created by quannguyendinh on 11/24/16.
 */
const fs = require('fs');
fs.readFile('abc.txt',function (err, data) {
    if(!err){
        console.log(data.toString());
    }
});
console.log("End");