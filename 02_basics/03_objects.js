// Objects from constructur are singleton
Object.create

//Object Literals
const mysum=Symbol("key1")
const JSuser={
    name:"Trinath",//key is stored as a string
    age:20,
    location:"Munich",
    [mysum]:"mykey1",
    email:"trinath@bmw.com",
    isloggedIN:true,
    lastloggedIN:["Monday","Saturday"],
    "full name":'Trinath B Sharma',
}

console.log(JSuser.email);
console.log(JSuser["email"]);
console.log(JSuser["full name"]);//Only way to print it out
console.log(JSuser[mysum]);

JSuser.email="trinath@google.com"
//Object.freeze(JSuser)//This makes sure that no changes re made to the object specififed below it 

JSuser.greeting=function () {
    console.log("Hello JS user");
}
JSuser.greetingtwo=function () {
    console.log(`Hello JS User,${this.name}`);
}
console.log(JSuser.greeting());
console.log(JSuser.greetingtwo());