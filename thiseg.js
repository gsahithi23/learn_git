let laptop1 = {
    cpu : 'i9',
    brand : 'Acer',
    ram : 16,

    compare : function(other){
        if(this.cpu>other.cpu){
            console.log(this)
        }
        else{
            console.log(other)
        }
    }
}

let laptop2 = {
    cpu : 'i7',
    brand : 'Apple',
    ram : 8,

}

laptop1.compare(laptop2)
