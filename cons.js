
//constructor function -> write first letter as capital to differentiate from normal fun from constructor func
function Alien(name, tech){
    this.name = name;
    this.tech = tech

    this.work = function(){
        console.log("Solving bugs")
    }
    //return 7
    //it will ignore return if it doesn't return any object
}

let alien1 = new Alien('Sahithi', 'JS')
let alien2 = new Alien('Kiran', 'Java')

alien2.tech = 'ML'
console.log(alien1)
alien1.work()

