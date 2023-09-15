const person = {
    name : 'Mosh',
    job : "Software Engineer",
    interests:['Tennis','Gardening'],

    get headline(){
        return `${this.name} is a  ${this.job} and is mainly interested in ${this.interests[0]}`
    },

    set primaryInterest(val){
        console.log("Setting primary interest...")
        this.interests.unshift(val);
    },

    get fullName (){
        return `${person.firstName} ${person.lastName}`
    },

    set fullName(value){
        //value is  a  valid string
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    },

}

//getters to access properties
//setters to mutate them

// person.fullName = 'John Wick';
person.primaryInterest = "Home Automation";
console.log(person.headline);