const name="Trinath"
const repcount=4
console.log(`My name is ${name} and my repocount is ${repcount}`);  //String interpolation method
const gamename=new String("Trinathrch")  //Using this method of creating a string is much better as stored in form of key value pair
console.log(gamename[0]);

console.log(gamename.__proto__);

console.log(gamename.length);

console.log(gamename.toUpperCase());  //Now here we are not using __proto__.toupper

console.log(gamename.charAt(0));

console.log(gamename.indexOf('t'));

const newstring=gamename.substring(0,4)    // Creating a substring with start and end index-1  only postive values are given
console.log(newstring)

const newgamestring=gamename.slice(-7,-5)   //-ve value means start from back
console.log(newgamestring);

const newstringone="  Trinath   "
console.log(newstringone);
console.log(newstringone.trim());// Trim start and end are also present 

const url="https..//trinath%20Sharma"
console.log(url.replace('%20','-'));   // first enter what u want  to replace then enter with what it should be replaced 
console.log(url.includes('trinath'));

const newstringtwo="Trinath B Sharma"
console.log(newstringtwo.split(' '));   //here inly using seperator not limit 


