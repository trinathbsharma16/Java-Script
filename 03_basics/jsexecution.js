/* 
JS is single threaded
JS Execution Context
Global EC
Function EC
Eval EC
JavaScript is a single-threaded language, which means it has only one call stack that is used to execute the program.

COdes => Global EC+> Memory Creation Phase(initially value is undefined) =>Execution Phase 
*/
let val1=10
let val2=5
function addnum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addnum(val1,val2)
let result2=addnum(10,2)

/* 
1 Global EC Runs only once
2MEmory Phase  Runs as many times a function is called  and ater operation is done the function is deleted 
   val1=undefined 
   val2=undefined 
   addnum=function defination
   result1undefined
   result2undefined

1 and 2 will always happen

3 Execution Phase 
 val1=10
 val2=5
*/