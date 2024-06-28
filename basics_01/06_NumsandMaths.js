const score=400
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));// Returns a number 
//console.log(typeof balance);
//console.log(balance.toFixed(2));

const othernumber=134.89
console.log(othernumber.toPrecision(4)); //Returns string type

const hundreds=1000000
console.log(hundreds.toLocaleString('en-In'));

// ++++++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.9));
console.log(Math.min(54,98,110,15128));
console.log(Math.max(54,98,110,15128));

console.log(Math.random());// Will Always give value between 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);


