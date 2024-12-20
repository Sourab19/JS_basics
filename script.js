// // // // let a=12;
// // // // if (a==12) {
// // // //     console.log("Values are equal");
// // // // }
// // // // else if (condition) {
// // // //     console.log("Values is 30");
// // // // }
// // // // else{
// // // //     console.log("Not equal");
// // // // }

// // // // let day = 8;
// // // // let dayname;
// // // // switch (day) {
// // // //   case 1:
// // // //     dayname = "Sunday";
// // // //     break;
// // // //   case 2:
// // // //     dayname = "Monday";
// // // //     break;
// // // //   case 3:
// // // //     dayname = "Tuesday";
// // // //     break;
// // // //   case 4:
// // // //     dayname = "Wednesday";
// // // //     break;
// // // //   case 5:
// // // //     dayname = "Thursday";
// // // //     break;
// // // //   case 6:
// // // //     dayname = "Friday";
// // // //     break;
// // // //   case 7:
// // // //     dayname = "Satday";
// // // //     break;

// // // //   default:
// // // //     dayname = "Invalid day";
// // // // }
// // // // console.log(dayname);


// // // // loop

// // // // for(let i=1;i<=5;i++){
// // // //     console.log(i);
// // // // }

// // // // const person={
// // // //     name:"John",age:25,place:"Trivandrum"
// // // // }

// // let txt="";

// // // // //for(key in object) objects
// // // // for (let x in person) {
// // // //     txt+=person[x] + " ";
    
// // // // }
// // // // console.log(txt);

// // // // in array
// // // const num=[56,89,87,45,88]
// // // for (let x in num){
// // //     txt+=num[x]+" "
// // // }
// // // console.log(txt);

// // //for in

// // var person1={
// //     firstname:'John',
// //     lastname:'Doe'
// // };

// // for(var prop in person1){
// //     console.log(person1[prop]);
// // }

// // //for of
// // let lang="JavaScript"
// // const cars=["BMW","Volvo",]
// // for(let x of lang){
// //     txt+=x+ '\n'
// // }
// // console.log(txt);


// //while
// let count=1;
// while (count<10) {
//     console.log(count);
//     count+=2
// }
// let fruits=["Apple","Banana","Plum"]
// let a=0
// while (a<fruits.length) {
//     console.log(`${a+1}.${fruits[a]}`)
//     a++;
// }

//do while
let txt=""
let i=0;
do {
    txt+=i+'\n';
    i++
} while (i<10);
console.log(txt);