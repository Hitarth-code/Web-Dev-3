// const os=require('os');
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);
// console.log(os.homedir());

// console.log(os.totalmem()/(1024*1024*1024)
// +" GB"); // Convert to GB
// console.log(os.freemem()/(1024*1024*1024)+" GB"); // Convert to GB.

const path=require('path');
const fs=require('fs');

const file="lecture5\\core_module.js";

console.log(path.dirname(file)); // file Name
console.log(path.basename(file));// core_module.js
console.log(path.extname(file));// .js

const data =fs.readFileSync("sample.txt","utf-8");
console.log(data);

fs.readFile("sample.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});