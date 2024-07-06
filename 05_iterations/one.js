//for 

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        console.log("5 is the best number ");
        break
    }
    console.log(element);
    
}
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        console.log("5 is the best number ");
        continue//ek bar maf kardo condition ko
    }
    console.log(element);
    
}

for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value ${i}`);
    for(let j=0;j<=10;j++){
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i+'*'+j+'='+i*j);

    }
    
}

let myarray=["flash","batman","superman"]
console.log(myarray.length);
for(let i=0;i<myarray.length;i++){
    const elemnt =myarray[i];
    console.log(elemnt);
}