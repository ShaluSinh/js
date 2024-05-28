// JS is a programming language. We use it to give instruction to computer.
console.log("shalu sinha");
console.log("in love js");

//variables in js
fullname="tony stark";
age=24;
// x=null;
price=99.99;
y=undefined;
isFollow=false;
console.log(fullname);

//js is dynamically typed language that is we can store anything in variable.
/* variable rules
variable names are case sensitive.
only letters digits underscore and dollar symbols are allowed.
digits can not be the ist character of variable name.
reserved words can  not be variable name.*/


// let const and var keyword
/*var : variable can be redeclared and updated. A global scope variable.
let: variable can not be redeclared but can be updated. A block scope variable.
const: variable cannot be redeclared and updated . a block scope variable.*/

var a= 24;
var a=90;//redeclaration of variable
a=95;//updation of variable
console.log(a);

let XYZ=23;
XYZ=24;//updation of variable

const pi=3.14;

//const declaration must be initialized see;
//const a;
//console.log(a);//error after compilation;

//but;
let p;
console.log(p);//this is right here by default undefined value will be present.

//data types in javascript
//number,string,boolean,undefined,null,bigint,symbol

let year=5;//number data type;

fullName="tony stark"//string data type
isFollow=true;//boolean
let x;
console.log(x);//undefined data type

let z =null;
console.log(z);// null data type

let c= BigInt("1234556678901234567890");//bigint data type
let v= Symbol("hello!"); //symbol data type

//objects:collection of values;
let student = {
  Name: "shalu",
  Age: 21,
  cgpa: 8.77,
  isPass: true,
};
