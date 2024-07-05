let temparature =47
if(temparature<50){
    console.log(`The temparature is less than 50 and s currently ${temparature}`);
}
else{
    console.log("The temparature is greater than 50");
}
// Var has global scope .It means if Var is decalred inside a scope its value can be acceesed even outside the scope 

let balance=1000
//if(balance>500) console.log("You have a min balance"); //inplict scope  You can write multiple lines by using a comma but at 
// the end use semicolon

if(balance<500){
    console.log("Balance is less than 500");
} else if(balance<750){
    console.log("Balance is less than 750");
} else if(balance<900){
    console.log("Balance is less than 900");
} else{
    console.log("Balance is greater than 1000");
}

const userloggedIN=true 
const debitcard=true
if(userloggedIN && debitcard){
    console.log("Allowed to buy the course");
}
else{
    console.log("Please get a debit card ");
}
