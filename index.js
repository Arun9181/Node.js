// function countChar(str,char){
//     let count=0;
//     let strLength=str.length 
//     for(i=0;i<strLength;i++)
//     {
//        if(str[i]===char)
//        {
//         count++;
//        }
//     }
//     return count;
// }
// let String="abracadabra"
// let Character="a"
// let result=countChar(String,Character)
// console.log(result);


// const EventEmitter=require("events")
// let Student=new EventEmitter()
// //observer1 -parents
// Student.on("result distinction",()=>{
//     console.log("we are happy");
// })
// //observer2-friends
// Student.on("result distinction",()=>{
//     console.log("careless");
// })
// //observer3-relatives
// Student.on("result distinction",()=>{
//     console.log("sad");
// })
// Student.emit("result distinction")

// const EventEmitter= require("events")

// const student=new EventEmitter()

// //observer 1-parents
// student.on("result",(grade)=>{
//     if(grade==="distinction")
//     {
//         console.log("we are happy");
//     }else{
//         console.log("we are sad");
//     }

// })
// // observer 2-friends
// student.on("result",(grade)=>{
//     if(grade==="distinction")
//     {
//         console.log("we are least bothered");
//     }
    

// })
// //observer 3-relatives
// student.on("result",(grade)=>{
//     if(grade==="distinction")
//     {
//         console.log("we are sad");
//     }

// })

// student.on("result",(grade)=>{
//     if (grade==="justPass") {
//         console.log("we are sad");
        
//     }
// })

// student.emit("result","distinction")

function area(){
    let pi=3.14;
    let r=5;
    return pi*r*r;
}
area()
console.log(area());