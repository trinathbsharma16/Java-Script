// For in loop
const myobject={
    js:"Java Script",
    py:"Python",
    cpp:"C++"

}

for(const key in myobject){
    console.log(key);
    console.log(`${key} shortcut is for ${myobject[key]}`);
}
const programming=["c++","Pythonm","JS"]
for (const key in programming) {
    console.log([programming[key]]);// if u only print key then the index of the array will get printed 
}