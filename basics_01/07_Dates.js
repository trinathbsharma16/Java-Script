let mydate=new Date()
console.log(mydate);
console.log(mydate.toString());//Prints time in 24 hour format 
console.log(mydate.toLocaleString()); //Prints date in US format and time in 12 hour
console.log(mydate.toDateString()); //Prints only date and day
console.log(mydate.toUTCString()); //Prints time in GMT
console.log(typeof mydate);//Data Type Object

let mynewdate=new Date(2023,0,23)//Month starts from 0 in Java Script
console.log(mynewdate.toDateString());

let mydate2=new Date("01-02-2024")
console.log(mydate2.toLocaleDateString());

let mytimestamp=Date.now()
console.log(mytimestamp);
console.log(mydate2.getTime());// Time in mili sec
console.log(Math.floor(mydate2.getTime()/1000));//Time in sec
//console.log(Math.floor(Date.now()/1000));

let anotherdate=new Date()
console.log(anotherdate.getMonth()+1);//Plus 1 becuase month starts from 0 in JS 
newDa.toLocaleString(`default`,{
     weekday:"long",
})