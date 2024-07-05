//Falsy Value false ,0,-0,Big INT 0n,"",null ,undefined,NAN
//Truth Value true,"0","false"or'false," ",[],{},function(){}
const useremail=[]
if(useremail.length===0){
    console.log("The array is empty");
}

const objectis={}
if(Object.keys(objectis).length===0){
    console.log("Object is Empty");
}

//NUllish Coalescing Operator ?? works on null and undefined 

val1=5?? null//Gives vale 5
val2=undefined??10 //gives value 10
val3=null??10??15// will return the first vlue not null or undefined
console.log(val1);
console.log(val2);
console.log(val3);

//Terniary operator 
//condition ? true:false
const iceteaprice=100
iceteaprice<=80 ?console.log("less than 80"):console.log("more than 80");