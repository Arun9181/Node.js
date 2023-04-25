// const http=require("http")

// //crates sever
// let server=http.createServer((req,res)=>{
//     res.end("hi this is node.js server....")
// })

// //listens to the server on the specified port
// server.listen(3000,(err)=>{
//     console.log("server is running on port 3000");
// })

// const http=require("http")

// //creates server
// //routing in nodejs
// let server=http.createServer((req,res)=>{
//     let url=req.url
//     if(url==="/" || url==="/home")
//     {
//         res.end("this is home")
//     }
//     else{
//         res.end("this is not your home")
//     }
// })

// server.listen((3000),(err)=>{
//     if(err){
//         throw err
//     }else{
//         console.log("server is running on port 3000...");
//     }
// })

//ROUTING

// const http=require("http")
// const fs=require("fs/promises")

// let server=http.createServer(async (req,res)=>{
//     let url=req.url
//     if(url==="/" || url==="/home")
//     {
//         res.statusCode=200
//         res.statusMessage="OK"
//         res.setHeader("content-type","text/css")
//         let html=await fs.readFile("./global.css","utf-8")
//         res.end(html)
//     }
// })

// server.listen(3000,(err)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log("server is running on port 3000 ..........");
//     }
// })

// const http=require("http")
// const fs=require("fs")

// let server=http.createServer(async (req,res)=>{
//     let url=req.url
//     if(url==="/" || url==="/home")
//     {
//         fs.createReadStream("index.html","utf-8").pipe(res)
//     }
// })
// .listen((4000),(err)=>{
//     if(err) throw err
//     console.log("server is running on port 4000.......");
// })

// const http=require("http")
// const fs=require("fs")

// let server=http.createServer(async (req,res)=>{
//     let url=req.url
//     if(url==="/" || url==="/home")
//     {
//         res.writeHead(200,"Okay",{"content-type":"text/html"})
//         fs.createReadStream("index.html","utf-8").pipe(res)
//     }else if(url==="/css"){
//         res.writeHead(200,"Okay",{"content-type":"text/css"})
//         fs.createReadStream("style.css","utf-8").pipe(res)
//     }else if(url==="/video"){
//         res.writeHead(200,"okay",{"content-type":"video/mp4"})
//         fs.createReadStream("RCB.mp4").pipe(res)
//     }
//     else if(url==="/image"){
//         res.writeHead(200,"okay",{"content-type":"image/png"})
//         fs.createReadStream("bike.png").pipe(res)

//     }
//     else if(url==="/audio"){
//         res.writeHead(200,"okay",{"content-type":"audio/mp3"})
//         fs.createReadStream("Belageddu.mp3").pipe(res)
//     }
//     else{
//         res.writeHead(200,"Okay",{"content-type":"text/html"})
//         fs.createReadStream("pagenotfound.html","utf-8").pipe(res)
//     }
// })
// .listen((4000),(err)=>{
//     if(err) throw err
//     console.log("server is running on port 4000...");
// })

//using switch cases

// const http=require("http")
// const fs=require("fs")

// let server=http.createServer(async(req,res)=>{
//     let url=req.url
//     switch (url) {
//         case "/":
//             res.writeHead(200,"ok",{"content-type":"text/html"})
//             fs.createReadStream("index.html").pipe(res)

//             break;
//             case "/css":
//                 res.writeHead(200,"okay",{"content-type":"text/css"})
//                 fs.createReadStream("style.css").pipe(res)
//                 break;
//             case "/image":
//                 res.writeHead(200,"okay",{"content-type":"image/png"})
//                 fs.createReadStream("bike.png").pipe(res)
//                 break;
//                 case "/video":
//                     res.writeHead(200,"okay",{"content-type":"video/mp4"})
//                     fs.createReadStream("RCB.mp4").pipe(res)
//                     break;
//                 case "/audio":
//                     res.writeHead(200,"okay",{"content-type":"audio/mp3"})
//                     fs.createReadStream("Belageddu.mp3").pipe(res)
//         default:
//             break;
//     }

// })
// .listen((5000),(err)=>{
//    if(err) throw err
//    console.log("server is running on port 5000......");
// })

//switch case advance method

// const http = require("http");
// const fs = require("fs");

// http.createServer((req, res) => {
//     let pathToFile = "";
//     switch (req.url) {
//       case "/":
//         pathToFile += "index.html";
//         break;
//       case "/css":
//         pathToFile += "style.css";
//         res.writeHead(200, "okay", { "content-type": "text/css" });
//         break;
//       case "/image":
//         pathToFile += "bike.png";
//         res.writeHead(200, "okay", { "content-type": "image/png" });
//         break;
//       case "/video":
//         pathToFile += "RCB.mp4";
//         res.writeHead(200, "okay", { "content-type": "video/mp4" });
//         break;
//       case "/audio":
//         pathToFile += "Belageddu.mp3";
//         res.writeHead(200, "okay", { "content-type": "audio/mp3" });
//         break;
//       default:
//         pathToFile += "pagenotfound.html";
//         res.writeHead(200, "okay", { "content-type": "text/html" });
//         break;
//     }
//     fs.createReadStream(pathToFile).pipe(res);
//   })
//   .listen(5000, (err) => {
//     if (err) throw err;
//     console.log("server is running on port 5000........");
//   });


//crypto

// const crypto=require("crypto")

// let hashedPassword=crypto.createHash('md5').update("password").digest("hex")
// console.log(hashedPassword);

// let secret="arun"

// let hashedPassword=crypto.createHmac('sha256',secret).update("password").digest("hex")
// console.log(hashedPassword);


//os
// const os=require("os")
// let os1=os.cpus()
// console.log(os1);

//dns

// const dns=require("dns")

// dns.lookup("www.google.com",(err,address,family)=>{
//     console.log(family,address);
// })

//os module

// const { log } = require("console")
// const os=require("os")
// let cpu=os.cpus()
// console.log(cpu);

// let arch=os.arch()
// console.log(arch);

// let hostname=os.hostname()
// console.log(hostname);

// let freemem=os.freemem()
// console.log(freemem);

// let totalmem=os.totalmem()
// console.log(totalmem);

// console.log(os.platform());

// console.log(os.release());

//sending json data

// const http=require("http")

// http.createServer((req,res)=>{
//     let employees=[
//         {
//             "ename":"narasimha",
//             "sal":20000
//         },
//         {
//             "ename":"sunil",
//             "sal":15000
//         }
//     ]
//     let data=JSON.stringify(employees)
//     res.writeHead("200","Okay",{"content-type":"application/json","Access-Control-Allow-Origin":"*"})
//     res.end(data)
// })
// .listen(5000,(err)=>{
//     if(err) throw err
//     console.log("server is running on port 5000 .........");
// })

// const fs=require("fs")
// const {parse}=require("querystring")
// const crypto=require("crypto")

// http.createServer((req,res)=>{
//     if (req.method==='POST') {
//         if (req.headers["content-type"]==='application/x-www-form-urlencoded') {
//             let body=""
//             req.on("data",chunk=>{
//                 body+=chunk;
//             })
//             req.on("end",()=>{
//                 res.writeHead(201,"okay")
//                 res.end("successfully logged in")
//                 let finalBody=parse(body)

//                 console.log(finalBody);
//                 let secret=finalBody.password
//                 let hashPassword=crypto.createHash("sha256",secret).update("password").digest("hex")
//                 console.log(hashPassword);
//             })
//         }
//     }
//     else{

//     if (req.url==='/' || req.url==='/home') {
//         res.writeHead(200,"okay",{"content-type":"text/html"})
//         fs.createReadStream("form.html","utf-8").pipe(res)

//     }
//     else if(req.url==="/css"){
//         res.writeHead(200,"okay",{"content-type":"text/css"})
//         fs.createReadStream("Form.css","utf-8").pipe(res)
//     }
//     else{
//         res.writeHead(200,"okay",{"content-type":"text/html"})
//         fs.createReadStream("pagenotfound.html","utf-8").pipe(res)
//     }
// }
// })
// .listen(5000,(err)=>{
//     if(err) throw err
//     console.log("server is running on port 5000............");
// })

// console module

// let a={
//     name:"Arunkumar",
//     age:26,
//     sal:30000
// }

// console.table(a)

// console.error("hello this is wrong")

// console.warn("this is not a valid value")
// let a=5
// console.assert(a>2)

// console.clear()

// let a=console.time()
// console.log("chgsjkcshvxjkjbnhcuidhcksjncmjsbcj5458412shgg");

// console.timeEnd(a)

//URL

// let url=require('url')

// let myUrl="https://nodejs.org/docs/latest-v19.x/api/url.html"
// let a=url.parse(myUrl)
// console.log(a);


const crypto=require("crypto")
let SECRET="secret"

let hashPassword=crypto.createHmac("sha256",SECRET).update("245444544").digest("hex")

console.log(hashPassword);

