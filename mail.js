// const http=require("http")
// const fs=require("fs")
// const nodemailer=require("nodemailer")

// http.createServer(async(req,res)=>{
//     if (req.url==="/") {
//         async function main()
//         let transporter = nodemailer.createTransport({
//             host: "smtp.ethereal.email",
//             port: 587,
//             auth: {
//               user:"garfield30@ethereal.email", // generated ethereal user
//               pass:"uRAHxw9eQWUnXtCK42", // generated ethereal password
//             },
//     })
//     let info = await transporter.sendMail({
//         from: '"Arun 👻" <garfield30@ethereal.email>', // sender address
//         to: "bar@example.com, baz@example.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", 
//     })

//     res.end("mail sent")
//     console.log("Message sent: %s", info.messageId)
// }
// })



// .listen(5000,(err)=>{
//    if(err) throw err
//    console.log("server is running on port 5000.............");
// })
    

// const http=require("http")
// const fs=require("fs")

// http.createServer((req,res)=>{
//     if(req.url==="/" || req.url==="/home"){
//         res.writeHead(200,"okay",{"content-type":"text/html"})
//         fs.createReadStream("index.html").pipe(res)
//     }
//     else if (req.url==="/css") {
//         res.writeHead(200,"okay",{"content-type":"text/css"})
//         fs.createReadStream("style.css").pipe(res)
//     }
//     else if(req.url==="/image"){
//         res.writeHead(200,"okay",{"content-type":"image/png"})
//         fs.createReadStream("bike.png").pipe(res)
//     }
//     else if(req.url==="/video"){
//         res.writeHead(200,"okay",{"content-type":"video/mp4"})
//         fs.createReadStream("RCB.mp4").pipe(res)
//     }
//     else if(req.url==="/audio"){
//         res.writeHead(200,"okay",{"content-type":"audio/mp3"})
//         fs.createReadStream("Belageddu.mp3").pipe(res)
//     }
//     else{
//         res.writeHead(200,"okay",{"content-type":"text/html"})
//         fs.createReadStream("pagenotfound.html").pipe(res)
//     }
// })
// .listen(4000,(err)=>{
//   if(err) throw err
//   console.log("server is running on port 4000......");
// })