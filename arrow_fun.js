let greet = (user) => {
    console.log(`Hello ${user}`);
    return 1
}

let user = 'Sahithi';
console.log(greet('Sahithi'))
//In arrow function, if there is only one statement, no need to use {}
// and If that statement is return  then no need to mention return
let add = (n1, n2) => n1 + n2;
 
console.log(add(5,5))


//methods

let laptop1 = {
    cpu : 'i9',
    brand : 'Acer',
    ram : 16,
}

let laptop = {
    cpu : 'i9',
    brand : 'HP',
    ram : 16,

    greet : function(){
        console.log('Hello')
        console.log(laptop.brand)
        console.log(this.brand)
        console.log(laptop1.brand)
    }
}

laptop.greet()
