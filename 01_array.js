const myarray=[1,2,3,4,5]   //Arrays in JS can be resized 
myarray.push(8)
console.log(myarray);
myarray.pop()
console.log(myarray);

myarray.unshift(10)//  Adds 10 at the begining and shifts all  the other element 1 place left 
console.log(myarray);

myarray.shift()
console.log(myarray);

console.log(myarray.includes(4));
console.log(myarray.indexOf(4));

const newarrya=myarray.join()//Converts array into string
console.log(myarray);
console.log(newarrya);

const mny1=myarray.slice(1,4)//LAst elelemt is not included but original array remmains as it is 
console.log(mny1);

const mny2=myarray.splice(1,4)//Includes last element but the portion specified is removed from original array
console.log(mny2);