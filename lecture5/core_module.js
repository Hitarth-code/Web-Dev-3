/////////////////////////// os module ///////////////////////////

// const os=require('os');
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);
// console.log(os.homedir());

// console.log(os.totalmem()/(1024*1024*1024)
// +" GB"); // Convert to GB
// console.log(os.freemem()/(1024*1024*1024)+" GB"); // Convert to GB.

const crypto=require('crypto');
const path=require('path');
const fs=require('fs');
const dns= require("dns");
const process =require('process');
const file="lecture5\\core_module.js";

/////////////////////////// path module ///////////////////////////

// console.log(path.dirname(file)); // file Name
// console.log(path.basename(file));// core_module.js
// console.log(path.extname(file));// .js


/////////////////////////// fs module ///////////////////////////

// fs.readFile("sample.txt","utf-8",(err,data)=>{
    //     if(err){
        //         console.log(err);
        //     } else {
            //         console.log(data);
            //     }
            // });
            
 // const data =fs.readFileSync("sample.txt","utf-8"); // to read the file synchronously // utf 8 is the encolding format w
// console.log(data);

// const data = fs.writeFileSync("sample.txt","Hello World"); // to write the file synchronously
// console.log(data);

// const data = fs.writeFile("sample.txt","Hello World again",(err)=>{
//     if (err) console.log(err);});

// const data = fs.appendFileSync("sample.txt","\n Heyy hoe are you?"); // TO append the file synchronously
// console.log(data);

// const data = fs.renameSync("sample.txt","practice.txt"); // to rename the file synchronously
// console.log(data);

// const data = fs.unlinkSync("practical.txt"); // to delete the file synchronously
// console.log(data);

/////////////////////////// crypto module ///////////////////////////

// const secretKey = "mySecretKey";

// const hash = crypto.createHash(('sha256').update(secretKey));   
// hash.update("Hello, world!");
// console.log(hash.digest("hex"));

// const uuid = crypto.randomUUID();
// console.log(uuid);

/////////////////////////// dns module ///////////////////////////

// dns.lookup("youtube.com",function (err, address, family) {
//         if (err) throw err;
//         console.log("IP Address:",address);
//         console.log("IPv" + family);
//     })

// dns.reverse(" 8.8.8.8",(err, hostnames) =>{
//     if (err) throw err;
//     console.log("Hostname:" , hostnames[0]);
// })

const data= process.argv;
console.log(process.version); 
console.log(process.pid); 
console.log(process.platform); 
console.log(process.cwd()); 