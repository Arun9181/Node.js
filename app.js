// import {a,b} from './index1.js'    //based onES6

// console.log(a);                   //export explicitly
// console.log(b);

// import {a} from './index1.js'
// import add from './index1.js'

// console.log(add());
// console.log(a);

//based on common.js 

// const variables=require("./index1.js")
// console.log(variables.a);
// console.log(variables.b);

// const {a,b,add}=require("./index1.js")

// console.log(a);
// console.log(b);
// add()

//default import

// const add=require("./index1.js")

// add()

// import {a,b} from "./index1.js"
// import add from './index1.js'
// import {x} from './index1.js'
// import sub from './index1.js'
// // console.log(a);
// // console.log(b);

// add();
// console.log(x);
// console.log(sub());

// ****************
// import {CountChar,StringChar} from "./index1.js"
// import countChar from './index1.js'

// countChar()

//***************** *
//common js

//Area of circle

// const area=require('./index1.js')
// console.log(area());

//************************ *
//to count repetitive characters from a given string
const countChar=require('./index1.js')
// const {StringChar,Character,res}=require("./index1.js")
console.log(countChar);


