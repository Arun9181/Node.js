// const fs=require("fs")                              //we are importing it from fs(fileSystem)
// fs.writeFile("demo.txt","hello world",()=>{
//     console.log("file written");
// })
// fs.writeFileSync("demo.txt","Hello Arunkumar")
// console.log("this is last line");

// fs.writeFileSync("demo1.txt","Hi ")
// console.log("this is 2nd");

// fs.readFile("./demo1.txt",(err,data)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
//     console.log(data.toString());     //toString() is used to convert buffer data to human readable format
// })

// fs.readFile("./demo2.txt","utf-8",(err,data)=>{         //where "utf-8" is used for getting data directly in human readable format
//     if (err) {
//         console.log(err);
//     }else{
//         fs.writeFile("write.txt",`${data}`,()=>{
//             console.log("file read and same data is used to write");
//         })
//     }
// })

// fs.readFile("./demo2.txt","utf-8",(err,data)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         fs.writeFile("write.txt",`${data}`,()=>{                            //writeFile used to give data to a file(in this ex:write.txt)
//             console.log("file read and same data is used to write");

//             fs.appendFile("write.txt",`\nim appending data`,()=>{             //appendFile is used to update some data to existing file
//               console.log("im appending some data");

//               fs.unlink("./write.txt",()=>{                                 //unlink is used to delete the file or document
//                 console.log("file deleted");
//               })
//             })
//         })
//     }
// })

// *******************
// create and delete folders

// fs.mkdir("../Node js(ES6)/public",(err)=>{           //mkdir means makeDirectory
//    if (err) {
//     console.log(err);
//    }
//    console.log("folder created");
// })                                                    //here the folder will be crated

// fs.rmdir("./public",()=>{
//     console.log("folder deleted");                    //here the folder will be deleted
// })                                                    //rmdir means removeDirectory

// *****************************
// fs.mkdirSync("../Node js(ES6)/Folder",()=>{
//     console.log("this folder created");
// })
// fs.mkdirSync("../Node js(ES6)/SyncFolder",(err)=>{
//    if (err) {
//     console.log(err);
//    }
//    console.log("new folder crated");
// })

// fs.rmdir("../Node js(ES6)/public",()=>{
//     console.log("folder deleted");
// })
// fs.mkdir("../Node js(ES6)/public",()=>{
//     console.log("folder created");
// })
// fs.rmdirSync("../Node js(ES6)/public",{},(err)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log("yes deleted")})

//********************************** *
// Promises

// const fs=require("fs/promises")

// fs.writeFile("test.txt","we are writing something").then(()=>{
//     console.log("file written");
// }).catch((err)=>{
//     console.log(err);
// })

// fs.readFile("test.txt","utf-8").then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// fs.appendFile("test.txt","\nwe are writing everything").then((data)=>{
//     console.log();
// }).catch((err)=>{
//     console.log(err);
// })

// fs.unlink("./test.txt").then(()=>{
//     console.log("we delete the file");
// }).catch((err)=>{
//     console.log(err);
// })

// fs.mkdir("../Node js(ES6)/NewFolder").then(()=>{
//     console.log("file crated");
// }).catch((err)=>{
//     console.log(err);
// })

//**************************** 
//async await

// async function writeDoc(){
//     await fs.writeFile("file.txt","we are writing something")
//     console.log("file written");
// }
// writeDoc()

// async function readDoc(){
//     await fs.readFile("file.txt","utf-8")
//     console.log("file read");
// }
// readDoc()

// async function appendDoc(){
//     await fs.appendFile("file.txt","\nim updating")
//     console.log("file updated");
// }
// appendDoc()

// async function deleteDoc(){
//     await fs.unlink("file.txt")
//     console.log("file deleted");
// }
// deleteDoc()

// ******************************************
//Streams
//readStream
const { error } = require("console");
const fs=require("fs")

// let readStream=fs.createReadStream("demo2.txt","utf-8")
// //readStream is a instance of event emitter

// readStream.on("data",(chunk)=>{
//     console.log(".............................newChunk...........************************************************************************");
//     console.log(chunk);
// })

//writeStream
// let writeStream=fs.createWriteStream("hello.txt")

// writeStream.write("hello im writing in writeStream",()=>{
//     console.log("file written");
// })

//duplexStream
// let readStream=fs.createReadStream("demo2.txt","utf-8")
// let writeStream=fs.createWriteStream("hello.txt")

// readStream.pipe(writeStream)                            //whatever there in the demo2.txt will be written in hello.txt

// fs.writeFile("data.pdf","hi hello ",(err)=>{
//     if (err) {
//         throw err
//     }
//     console.log("file created");
// })

// fs.readFile("demo.txt","utf8",(err,data)=>{
//     if (err) {
//         throw err
//     }
//     fs.writeFile("data.pdf",`${data}`,()=>{
//         console.log("file read and written");
//     })
//     fs.appendFile("data.pdf",`\nim adding some content`,(err)=>{
//         console.log("added content");
//     })
//     fs.unlink("data.pdf",()=>{
//         console.log("file deleted");
//     })
// })


//example using global console
// console.log("hello world");
// console.log('hello %s','world');
// console.error(new Error('whoops something bad happened'))



// const name="aj kumar"
// console.warn(`danger ${name}! danger!`)

//example using console class
// const {console}=require("console")
// const {console}=console



// console.count()
// console.count('default 454')
// console.clear()

// console.assert(true,"yes done")
// console.assert(false,"it is a error")

// console.table([{a:1,b:2},{a:5,b:10}],['a'])

// console.time('some work')
// console.timeEnd('some work')

// const { versions } = require('node:process');

// console.log(versions);







