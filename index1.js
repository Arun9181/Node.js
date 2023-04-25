// export let a=5;  //export explicitly
// export let b=6;

// const a=10;
// const b=20;
// export {a,b}

// const a=20;
// function add(){
//     return 3+4;
// }
// export {a}
// export default add;

// **************************
//based on common js

// module.exports.a=5;
// module.exports.b=10;


// const a=10;
// const b=30;
// const add=()=>{
//     console.log("hello");
// }

// module.exports={
//     a,b,add
// }

//default exports
// const a=10;
// const b=30;
// const add=()=>{
//     console.log("hello");
// }
// module.exports=add;

// export let a=20;
// export let b=25;

// ***********************
//  function add(){
//     return 8+9
// }
// export default add
// const x=65;
// export {x}

// let sub=()=>{
//     let a=255;
//     let b=100;
//     console.log(a-b);
// }
// sub()

// *****************
//ES6
// function countChar(str,char){
//     let count=0;
//     for (let i= 0; i<str.length; i++) {
//         if (str[i]===char) {
//             count++
//         }
//         return count;
        
//     }
// }
// let StringChar="abracadabra"
// let CountChar="a"
// console.log(countChar(StringChar,CountChar));

// export default countChar;
// export {StringChar,CountChar}

//***************** *
//common js

// Area of circle
// function area(){
//     let pi=3.14;
//     let r=10;
//     return pi*r*r;
// }
// area()
// module.exports=area

//************************ *
//to count repetitive characters from a given string

function countChar(str,char){
  let strLength=str.length 
  let count=0;
  for(i=0;i<strLength;i++){
    if (str[i]===char) {
        count++;
    }
  }
  return count;
}
let StringChar="Karnataka"
let Character="a"
let res=console.log(countChar(StringChar,Character));
console.log(res);

// module.exports={StringChar,Character,res,countChar}
module.exports=countChar