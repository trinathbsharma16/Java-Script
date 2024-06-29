const marvel_heros=["thor","ironman"]
const dc_heros=["spiderman","superman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[2][1]);

const allheros=marvel_heros.concat(dc_heros)  //Concat merges the 2 arrays 
console.log(allheros);

const allnew_heros=[...marvel_heros,...dc_heros]//It will spred the 2 arrays
console.log(allnew_heros);

const another_array=[1,2,4,5,[4,5,68],4,8,9,1,[51,8,9,[4,1,2]]]
const another_new_Array=another_array.flat(Infinity)//Depth infinite 
console.log(another_new_Array);

console.log(Array.isArray("Trinath"));
console.log(Array.from("Trinath"));
console.log(Array.from({name:"Trinath"}));//Intresting case

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));