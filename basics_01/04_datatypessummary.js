// Based upon the way of storing and retriving the data .Data types are divided into 2 types Premitive(Call by value) 
// 7 types Strings ,NUmbers,Null,Undefined,Boolean,Symbol,Big INT 
//and Non Premitive(Refrence Type)
//Array ,Objects ,Functions

//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need
// to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during 
//its lifetime.
const id=Symbol('1234')
const anotherid=Symbol('1234')
console.log(id===anotherid);
const bigint=46451668469484611651113474687n


const herors=["Shaktiman","Superman"]
let myobject={
    name:"Trinath",//Comma compulsary here
    age:20,
}

console.log(myobject);

//function(){}  Way of declaring function
const myfunction=function(){
    console.log("Hello World");
}
//console.log(myfunction);   
// Data Type of function is object function