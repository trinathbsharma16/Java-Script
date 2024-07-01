function Myname(){
    console.log("T");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("T");
    console.log("H");
}
Myname()

function AddTwoNumbers(Number1,Number2){//Number 1 and 2 are parameter 
    console.log(Number1+Number2);
}
AddTwoNumbers(5,6)// 5 and 6 are arguments 

const result=AddTwoNumbers(6,8)
console.log(result);
//Nothing will be executed after return statement in a function
function AddTwoNumbers2(Number1,Number2){//Number 1 and 2 are parameter 
      //let result2=Number1+Number2
     // return result2
     return Number1+Number2
}
console.log(AddTwoNumbers2(10,20));
//console.log(result2);

function Userloginmessage(username){ //username=Tri this will give a default value as tri
    if(username===undefined){ //or !username
        console.log("Please enter a user name");
        return //This makes sure if the if stament is executed then the below code is not executed 
    }
        return `${username} just logged in`
}
console.log(Userloginmessage("Trinath"));
console.log(Userloginmessage());//Will give undefined 


function calculatecartprice(...num){   //... Here is rest operator not spread 
        return num
}  
console.log(calculatecartprice(200,500,800))

function cartprice(val1,val2,...num1){// 500 to val1 ,100 to val2 and 800,900 and 400 to num1
    return num1
}
console.log(cartprice(500,100,800,900,400));

const user={
    username:"Trinath",
    price:199,
}

function handleobject(anyobject){
    console.log(`The username is${anyobject.username} and the price is ${anyobject.price}`);
}
handleobject(user)
handleobject({
    username:" Sam",
    price:399
})


const mynewarray=[500,600,800,1000]

function secondalue(getarray){
    return getarray[1]
}
console.log(secondalue(mynewarray));