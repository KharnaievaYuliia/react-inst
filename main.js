

let student = {name:"Yuliia", surname: "Kharnaieva", age: 36};
let {name, surname, age } = student;
console.log( age);

let [ names, surnames ] = ["Yuliia","Titova"];
console.log(surnames);

let student1 = {name1:"Yuliia", surname1: "Kharnaieva"};
let {name1,...all} = student1;
console.log(all);

let numbers = [1,5,9,31,43];
console.log(Math.max(3,6,8));
console.log(Math.max(...numbers));//spread

let sum2num = (a,b) =>{ //arrow function (стрелочная функция)
    return a+b;
}
console.log(sum2num(5,100));

let myAge=36;
console.log(`Myage= ${myAge}`);//interpolation

let p = new Promise((resolve,reject)=>{
    throw new Error("ERROR NOT FOUND");
});
console.log(p.catch())
p.catch();


