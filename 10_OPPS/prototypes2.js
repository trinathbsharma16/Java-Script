/*let myName="Trinath "
console.log(myName.length);
console.log(myName.trueLength);
*/
let myheros=["thor","spiderman"]

let heropower={
    thor:"hammer",
    spiderman:"sling",
    getspiderpower:function(){
        console.log(`Spider power is ${this.spiderman}`);
        
    }
    
}
Object.prototype.trinath=function(){// This particular statement helps us to declar any sort of power to the objects in JS 
    console.log(`Trinath is Present in all objects`);
    
}
heropower.trinath()
myheros.trinath()

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()