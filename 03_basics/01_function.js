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
