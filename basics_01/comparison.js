console.log(null >0);
console.log(null ==0);
console.log(null >=0);
// The result is suprising as comparison converts null to a number treating it as 0 ie 1is false but 3 is ture..
// on the other hand undefined will give false for all the above cases
console.log("2"==2);
console.log("2"===2); //String is not being converted to number since === is being used 