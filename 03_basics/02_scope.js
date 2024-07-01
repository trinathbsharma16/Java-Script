//          Global Scope is always available 
//Becuase of problem in scope we dont use var 
let a =300//Global Scope
if(true){
   let  a=10
   console.log("Inner",a);//Block Scope
}
console.log(a);//The value a=300 is the output as it is treated as a global variable 

function one(){
    name="Trinath";
    function two(){
        const website="youtube"//Nested scope
        console.log(name);
    }
    two() //console.log(website);//THis will give error just remember a child can ask for food from elder but vice versa is not true 
   
}
one()

if(true){
    const name ="Trinath"
    if(name==="Trinath"){
        const website=" Youtube"
        console.log(name+website);
    }
}


//+++++++++++++++++++++++++++++++++++++++++  Intresting ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num1){
    return num1+1
}

//console.log(addtwo(5));   Will give error  hosting issue
const addtwo=function(num){
    return num+1
}
