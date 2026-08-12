const os = require('os');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const dns = require('dns');
// console.log(os.platform()) //platfrom batata h 
// console.log(os.arch()) // architerture batata h
// console.log(os.cpus().length) // cpu ke storage
// console.log(os.homedir())
// console.log(os.totalmem()/(1024*1024*1024) + "GB");
// console.log(os.freemem()/(1024*1024) + "MB");

// const filePath=path.resolve(__dirname,"core_module.js");
// console.log(__dirname);

// const filePath=path.join("BACH-END","Lecture-5","core_module.js");
// console.log(__dirname);
// const filePath=path.join(os.homedir(),"documents");
// console.log(filePath);


// const file="Lecture-5/core_modules.js";
// console.log(path.basename(file));
// console.log(path.extname(file));
// console.log(path.dirname(file));

// @@@ read

// console.log("A")               //synchronous
// const data = fs.readFileSync("./sample.txt", "utf-8");
// console.log(data);
// console.log("B")

// console.log("A")
// const data=fs.readFile("./sample.txt","utf-8",(err,data)=>{     //asynchronous
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });
// console.log("B")

// @@@ write

// fs.writeFileSync("./sample.txt","hello to all !!!!");
// console.log("File updated")       //synchronous

// fs.writeFile("./sample.txt","hello all again to students !!!!",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File updated");
//     }
// })

// @@@ append

// fs.appendFileSync("./sample.txt","\nHello friends!!");

//  @@ delete 

// fs.unlinkSync("./sample.txt");   //synchronous
// console.log("File deleted")

// @@@ crypto module 
//  const password="lokesh@0511"

// //  const hash=crypto.createHash("sha256").update(password).digest("hex")
// //  console.log(hash)

// const salt=crypto.randomBytes(16).toString("hex");
// // console.log(salt)

// const hash=crypto.createHmac("sha256",salt).update(password).digest("hex")
// console.log(hash)

// dns.lookup("www.google.com", (err, address, family) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(address)
//         console.log(family)

//     }

// })

dns.reverse("8.8.8.8", (err, hostnames) => {
    if(err){
        console.log(err);
    }else{
        console.log(hostnames);
    }

})