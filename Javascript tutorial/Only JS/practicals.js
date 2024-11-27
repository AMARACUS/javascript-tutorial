
// let number = prompt('Enter a Number');
//     if(number%5 === 0){
//         console.log(number,'is a multiple of 5')
//     } else {
//         console.log(number, 'is not a multiple of 5')
//     }

// let grade = prompt('Enter your grade');
// if(grade>=80 && grade <=100){
//     console.log("your grade is A")
// } else if(grade>=70 && grade <=89){
//     console.log("your grade is B")
// } else if(grade>=60 && grade <=59){
//     console.log("your grade is C")
// } else if(grade>=50 && grade <=59){
//     console.log("your grade is D")
// } else if(grade>=0 && grade <=49){
//     console.log("Your grade is F")
// } else{
//     console.log("Invalid Input")
// }

// for(let num=0; num<=100; num++){
//     if(num%2 !==0 )
//     console.log("num=",num)
// } 

// let gameNum = 20;
// let usernum = prompt("guess a number");
// while(usernum != gameNum){
//    usernum = prompt("you entered wrong number, guess a number again:");
// } 
// console.log("You Win");

// let fullname = prompt("Enter your full name");
//  let username = "@" + fullname.concat(fullname.length);
//  console.log(username);

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of marks){
//     sum += val;
// }
// let average = sum/marks.length;
// console.log(`average marks = ${average}`);

// let prices = [250,645,300,900,50];
// for(let i=0; i<prices.length;i++){
//   let offer = prices[i]/10;
//   prices[i] -= offer;
// }

// console.log(prices);

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// //a 
// companies.splice(0,1);
// //b
// companies.splice(1,1,"Ola");
// //c
// companies.splice(5,0,"amazon");
// console.log(companies);

// function myfunction(str){
//     let vowel = 0;
//    for (const char of str){
//      if(char === "a" || char ==="e"|| char === "i" || char ==="o" || char ==="u"){
//         vowel++;
//      }
//    }
//    console.log(vowel);
// }

// let countvowels = (str) =>{
//     let vowel = 0;
//        for (const char of str){
//          if(char === "a" || char ==="e"|| char === "i" || char ==="o" || char ==="u"){
//             vowel++;
//          }
//        }
//        console.log(vowel);
// }

// let arr = [0,1,2,3,4,5,6,7,8,9,10];
// arr.forEach((num)=>{ 
//     console.log(num*num);
// })
    
// let marks = [53,60,69,78,90,92,87,95,96,34,100];
// let distinction = marks.filter((val) => {
//   return val >= 85;
// });
// console.log(distinction);

// let n = prompt('Enter a Number');
// let arr = [];
// for(let i=1;i<=n;i++){
//     arr[i-1]= i;
// }
// console.log(arr);
// const sum = arr.reduce((prev, curr) =>{
//   return prev+curr;
// })
// console.log(sum);
// const product = arr.reduce((prev, curr) =>{
//     return prev*curr;
//   })
//   console.log(product);