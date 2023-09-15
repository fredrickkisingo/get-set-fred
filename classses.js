class Person {

    constructor(name) {
        this.name = name;
    }

    set name(value){
        this._name = value;
    }

    //declaration around this._name
    get name(){
        return this._name.toUpperCase();
    }
}

const dom  = new Person ("Dominic Toretto");
console.log(dom.name)