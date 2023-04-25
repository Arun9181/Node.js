// const http=require("http")
// const fs=require("fs")
// const {parse}=require("querystring")

// const server=http.createServer((req,res)=>{
//     if(req.method==="POST"){
//         if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
//             let body=""
//             req.on("data",(chunk)=>{
//                 body+=chunk
//             })
//             req.on("end",()=>{

//                 let finalBody=parse(body)
//                 res.end(JSON.stringify(finalBody))
//             })
//         }
//         else{
//             res.end(null)
//         }
        
//     }
//     else{
//         if(req.url==="/"||req.url==="/home"){
//             res.writeHead(200,"okay",{"content-type":"text/html"})
//             let html=fs.createReadStream("PracticeForm.html","utf-8")
//             html.pipe(res)
//         }else{
//             res.writeHead(404,"not found",{"content-type":"text/html"})
//             res.end("<h1>OOPS!! this page is not found</h1>")
//         }
//     }
// })
// server.listen(4000,(err)=>{
//     if(err) throw err
//     console.log("server is running on port 4000.........");
// })

//********************************************** */
//passing data to mongodb


// const http=require("http")
// const fs=require("fs")
// const {parse}=require("querystring")
// const {MongoClient}=require("mongodb")
// let url="mongodb://127.0.0.1:27017"
// const crypto=require("crypto")

// const server=http.createServer((req,res)=>{
//     if(req.method==="POST"){
//         if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
//             let body=""
//             req.on("data",(chunk)=>{
//                 body+=chunk
//             })
//             req.on("end",()=>{

//                 let finalBody=parse(body)
//                 let username=finalBody.username
//                 let password=finalBody.password
//                let hashedPassword= crypto.Hmac("sha256","secret").update(password).digest("hex")
//                console.log(hashedPassword);
//                 console.log(finalBody);
//                 async function dbConnection(){
//                     let client=await MongoClient.connect(url)
//                     let db=await client.db("userdb")
//                     let collection=await db.collection("user")
//                     await collection.insertOne({username:username,password:hashedPassword})
//                 }
//                 dbConnection()
//                 res.end("data successfully")
//             })
//         }
//         else{
//             res.end(null)
//         }
        
//     }
//     else{
//         if(req.url==="/"||req.url==="/home"){
//             res.writeHead(200,"okay",{"content-type":"text/html"})
//             let html=fs.createReadStream("PracticeForm.html","utf-8")
//             html.pipe(res)
//         }else{
//             res.writeHead(404,"not found",{"content-type":"text/html"})
//             res.end("<h1>OOPS!! this page is not found</h1>")
//         }
//     }
// })
// server.listen(4000,(err)=>{
//     if(err) throw err
//     console.log("server is running on port 4000.........");
// })

//*********************************************** */


// const http=require("http")
// const fs =require("fs")
// const { parse } = require("querystring")
// const {MongoClient}=require("mongodb")
// let url="mongodb://127.0.0.1:27017"
// const crypto=require("crypto")

// http.createServer((req,res)=>{
//     if(req.method==="POST"){
//         if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
//             let body=""
//             req.on("data",(chunk)=>{
//                 body+=chunk
//             })
//             req.on("end",()=>{
//                 let finalBody=parse(body)
//                 // res.end(JSON.stringify(finalBody))
//                 res.end("successfully logged in")
//                 console.log(finalBody);
//                 let username=finalBody.username
//                 let password=finalBody.password

//                let hashedPassword= crypto.createHmac("sha256","secret").update(password).digest("hex")

//                 async function db(){
//                    let client=await MongoClient.connect(url)
//                   let name=await client.db("userData")
//                   let collection= await name.collection("users")
//                   let result= await collection.insertOne({username:username,password:hashedPassword})
//                 // let result=await collection.insertOne({finalBody})
//                   console.log(result);
//                 }
//                db()
//             })
            
//         }
//           else {
//             res.end(null)
//         }
//     }
//     else{
//         if(req.url==="/"||req.url==="/home"){
//             res.writeHead(200,"okay",{"content-type":"text/html"})
//             fs.createReadStream("PracticeForm.html","utf-8").pipe(res)
//         }
//         else{
//             res.writeHead(404,"not found",{"content-type":"text/html"})
//             res.end("<h1>OOPS! page not found</h1>")
//         }
//     }
// })
// .listen(4000,(err)=>{
//     if(err) throw err
//     console.log("server is running on port 4000.....");
// })



