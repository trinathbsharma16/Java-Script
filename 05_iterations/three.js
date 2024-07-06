// for of loop an array specific loop 
let arr=[1,2,3,4,5,6]
for (const num of arr) {
    console.log(num);
}

const greetings="Hello Wordl"
for (const greet of greetings) {
    console.log(greet);
}

//MAPS

const map=new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('UK',"United Kingdom")
//console.log(map);

//Maps are helpful as it stores only unique values and keeps the values in the same sequecne as entered 
for (const [key,value] of map) {//Array destructured here 
    console.log(key,':-',value);
}
// for of is not iterable for objects 
