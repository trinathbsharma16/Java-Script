const mynumber=[1,2,3,4,5,6,7,8,9,10]
const newnum=mynumber.map((num)=>{ // You need to use return if u have opened the scope 
   return num+10
})
console.log(newnum);

//Chaining 
const newnum2=mynumber
            .map((num)=> num*10)
            .map((num)=>num+1)
            .filter((num)=> num>40)
console.log(newnum2);

