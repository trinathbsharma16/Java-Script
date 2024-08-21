// Prototypes gave us class ,new keywords,this keyword as well as inhetitance

/* 
Array is an object in JS 
There is no parent for Object in JS
Function can behave as a function or even as a object in JS 
*/ 

function multiplyby5(num){
    return num*5
}
multiplyby5.power=3
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);


function CreateUSer(USername,Score){
    this.USername=USername
    this.Score=Score;
}

CreateUSer.prototype.increament=function(){
    this.Score++
    console.log(`Price is ${this.Score}`);
}
CreateUSer.prototype.PrintMe=function(){
    console.log(`Price is ${this.Score}`);
    
}

const chai=new CreateUSer("chai",25)
const tea=new CreateUSer("tea",250)

tea.PrintMe()
tea.increament()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
 This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to 
the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this,
 the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive
 value (object, array, function, etc.), the newly created object is returned.

*/