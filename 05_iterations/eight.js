const mynum=[1,2,3,4]

/*const total=mynum.reduce(function(acc,curval){
    console.log(`The accc value is ${acc} and curval is ${curval}`);
    return acc+curval

},4)
console.log(total);*/
const mytotal=mynum.reduce((acc,curlval)=>acc+curlval,0)
console.log(mytotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);