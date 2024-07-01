//this is used to refer to current contect
const user={
    username:"Trinath",
    price:199,
    welcomemessage: function(){
        console.log(`${this.username}, welcome to the website `);
        console.log(this);
    }
}

user.welcomemessage()
user.username="Trinath B Sharma"
user.welcomemessage()
console.log(this);//Will return empty since no context in global

function chai(){
    let username="Trinath"
    console.log(this.username);//this wont work inside function will return undefined 
}
chai()

//Arrow Function

const chaiaurcode= () =>{
    let username="Trinath"
    console.log(this.username);  //GIves undefined
}
chaiaurcode()

const addTwo=(num1,num2)=>{
    return num1+num2 //Explicit return 

}
console.log(addTwo(5,6));

//Using implicit return
const addThree=(num1,num2)=> num1+num2
//const addThree=(num1,num2)=> (num1+num2)
//const addThree=(num1,num2)=> ({username:"Trinath"})


console.log(addThree(5,6));