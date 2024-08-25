const discription=Object.getOwnPropertyDescriptor(Math,'PI')
console.log(discription);
 
const chai={
    name:"Ginger",
    price:250,
    isavailable:true,

}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    writable :false ,
    enumerable:false,
    configriable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
