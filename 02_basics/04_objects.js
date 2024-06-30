const Whatsapp_User={}
Whatsapp_User.id="TBS1622004"
Whatsapp_User.name="Trinath B Sharma"
Whatsapp_User.ISLogggedIN=true
console.log(Whatsapp_User);

const regular_user={
    email:"trinath@gmail.com",
    fullname:{
        user_full_name:{
            first_name:"Trinath",
            middle_name:"B",
            last_name:"Sharma",
        }
    }
}
console.log(regular_user.fullname.user_full_name.first_name);//We can access usign .

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3=Object.assign({},obj1,obj2)//The curly bracker is acting as a target here and obj1,2 as source 
console.log(obj3);
console.log(obj1===obj3);
const obj4=Object.assign(obj1,obj2)//Here object 1 is acting as target so obj1===obj3
console.log(obj4);
console.log(obj1===obj4);

const obj5={...obj1,...obj2}//Spread method mostly used 
console.log(obj5);

const user=[
    {
        id:"15",
        email:"trinath@google.com"
    },
    {
        id:"15",
        email:"trinath@google.com"
    },
    {
        id:"15",
        email:"trinath@google.com"
    }
]
console.log(user[1].email)

console.log(Object.keys(Whatsapp_User));
console.log(Object.values(Whatsapp_User));
console.log(Object.entries(Whatsapp_User));
console.log(Whatsapp_User.hasOwnProperty('name'));
//                            Destructure
const course={
    name:"JS",
    fees:"999",
    Instructor_name:"Trinath",
}
const {Instructor_name}=course
console.log(Instructor_name);

const {Instructor_name:Instructor}=course
console.log(Instructor);

///++++++++++++++++++++++++++++++++++++  JSON API+++++++++++++++++++++++++++++++++++++++++++++++

/* 
{
"name":"Trinath",
"fees":"Free",
}

[
{}
{}
]                   Random USer API ,  JASON formatter
*/