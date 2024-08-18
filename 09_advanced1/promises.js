//Promises is an object  and it taked a callback
const promiseone=new Promise(function(resolve,reject){
    //Can do any async task
    setTimeout(function() {
        console.log("Async task is completed");
        resolve()
    },1000);
    //   .then is direct connection with resolve
})
promiseone.then(function(){
    console.log("Promise consumed ");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed");
        
    },1000)
}).then(function(){
    console.log("Async 2 is consumed ");
    
})

const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Trinath",email:"trinathbsharma@example"})
    },1000)
})
promisethree.then(function(user){
    console.log(user);
    
})


const Promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Trinath ",password:"tri123"})
        } else{
            reject('Error:Something went wrong')
        }
        
    },1000)
})

