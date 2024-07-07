//for each
const coding=["JS","Cpp","Python","Java","Ruby"]
//coding.forEach( function(val){
   

//})
coding.forEach((val) =>{
    console.log(val);
})

function forme(item,index,arr){
    console.log(item,index,arr);
}
coding.forEach(forme)

const mycoding=[
    {
    languageName:"Java Script",
    languagefileName:"JS"
},
    {
    languageName:"CPP",
    languagefileName:"C++"
},
    {
    languageName:"Python",
    languagefileName:"PY"
}
]

mycoding.forEach((item)=>{
    console.log(item.languagefileName);
})
