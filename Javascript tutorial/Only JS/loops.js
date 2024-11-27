//Loops And Strings
//for loop
// for(let count=1; count<= ; count++;) {
//     console.log("milan op");
// }

//calculate sum of 1 to n
// let sum = 0;
// let n=5;
// for(let i=1; i<=n;i++){
//     sum = sum + i;
// }
// console.log("sum =", sum);


// for (let i=1; i<=5; i++) {
//     console.log("milan op", i);
// } // i won't be considered outside this loop
// console.log("loop has ended");

//infinite loop (never use this)
// for(let count=1; count++;) {
//     console.log("milan op");
// }

//while loop
// let i = 1;
// while(i<=5) {
//     console.log("milan op");
//     i++;
// }

//do-while loop
// let i = 20;
// do {
//     console.log("milan op");
//     i++;
// } while(i<=10);

//for-of loops
// let str = "Milan";

// let size =0;
// for(let val of str){
//     console.log("value=",val);
//     size++;
// }
// console.log("string size =", size);

//for-in loop
let student ={
    name: "Batman",
    age: 18,
    percentage: 84.1,
    isPass: true,
};

for(let key in student){
    console.log(key, "=", student[key]);
}