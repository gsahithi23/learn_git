let input = 'name'
let alien = {
    name : 'Sahithi',
    technology : 'JS',
    'work exp' : 2,
    laptop : {
        cpu : 'i7',
        ram : 16,
        brand1: 'Apple_Acer'
    }
}

for(let key in alien){
    console.log(key, alien[key])
}


// console.log(alien);
// console.log(alien.name);
// console.log(alien['technology']);
// console.log(alien['work exp']); // cannot use . operator here since 'work exp' have spaces 
// console.log(alien[input]); // cannot use . operator since input is not a key
// //console.log(alien.laptop.brand.length);
// console.log(alien.laptop.brand);//undefined
// console.log(alien.laptop.brand?.length);

// delete alien.laptop;
// console.log(alien);
