console.log("Changes made in functions");

function greet(){
    console.log('hello vivek');
}
// greet()

function greet1(){
    return "Hello world"
}
let str = greet1();
// console.log(str);

function greet2(user){
    return `Hello ${user}`
}
let user = 'Sahithi Ganga';
let str1 = greet2(user);
// console.log(str1);

//Function Expression

let add = function(num1,num2){
    return num1 + num2;
}
let sum = add;
let res = sum(2,3);
// console.log(res)
// let result = add(4,5);
// console.log(result);

let u = 'Vivek';
function say(u){
    let str = 'stay';
    console.log(`Hello ${u}`);
    console.log(`${str} ${u}`);
}

// say(u)


function num(n1,n2,n3=1){
    return n1 + n2 + n3;
}

let see = num(1,2);
console.log(see)
