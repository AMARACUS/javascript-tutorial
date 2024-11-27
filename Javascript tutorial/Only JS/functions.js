//Functions & Methods
// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("Keesmat kharab hai");

// function sum(x,y){
//     s = x+y;
//     return s;
// } //can't console anything after return in this block
// let val = sum(3,4);
// console.log(val);

//arrow function (used for small usage only)
// let arrowProd = (a,b)=>{
//     return a*b;
// }

//let arr = ["pune","mumbai","banglore"];
//for each function
// arr.forEach(function printVal(val){ //value at each index
//   console.log(val);  
// })

// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(),idx, arr);
// })

// let numbers = [67,53,39];
// let calcSquare = (num)=>{ 
//     console.log(num*num);
// };
// numbers.forEach(calcSquare);

//map
// let numbers = [67,53,39];
// let newArr = numbers.map((val)=>{
//     return val*2;
// })
// console.log(newArr);

//use for each for normal calculations 
// use map for creating new array

//filter
// let arr = [1,2,3,4,5,6,7,8,9];
// let evenarr = arr.filter((val)=>{
//     return val % 2 == 0;
// });
// console.log(evenarr);

//reduce
// let arr = [1,2,3,4,5,6,7,8,9];
// const output = arr.reduce((prev, curr) =>{
//     return prev > curr? prev:curr; //if else statement
// });
// console.log(output);