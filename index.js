//Area of circle ES6
// function area(){
//     let pi=3.14;
//     let r=20;
//     return pi*r*r;
// }
// console.log(area());
// export default area;

//OR
// function area(pi,r){
//     return pi*r*r;

// }
// console.log(area(3.14,10));
// export default area;

// ***********************
//file system
const fs=require("fs")

fs.writeFile("demo.txt","hello world",()=>{
    console.log("file written");
})