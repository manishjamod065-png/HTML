let fruits=["APPLE","BANANA","MANGO","ORANGE","GRAPES"];
//lenth 
//array ka size batana
console.log(fruits.length);
// push
//array ke ander element dall dega
//last me element dalega
fruits.push("watermelon");
//pop
//emelnent remove kardega last se 
fruits.pop();
console.log(fruits);
// UNSHIFT
fruits.unshift("watermelon");
console.log(fruits);
//shift 
//shuru ka index me joh value hai usko remove kardega
 fruits.shift();
 console.log(fruits);
 //includes
 //check karta hai ki element present hai yah nahi
 console.log(fruits.includes("MANGO"));
 console.log(fruits.includes("watermelon"));
 // indexof
//USS ELEMENT KA INDEX KA RETURN KARDGA
 console.log(fruits.indexOf("MANGO"));
 //JOIN
 console.log(fruits.join("_"));
 // slice 
 //element tayaega uss range ka 
 console.log(fruits.slice(1,3));
// splice
// ELEMENT BATAYEGA USS RANDE KE RIGHT BOUND SE JJUST PEHLE 

console.log(fruits.splice(1,4));

// normal for loop
fruits=["APPLE","BANANA","MANGO","ORANGE","GRAPES"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
// for of loop
for(let fruit of fruits){
    console.log(fruit);
}
// for each loop
fruits.forEach(function(fruit){
    console.log(fruit);
});
// adavanced array methods
// map
// saare element ke upar ek function apply karke naya array banata hai
array=[1,2,3,4,5,6,7,8,9,10];
let doubledArray=array.map(function(x){
    return x*2;
});
console.log(doubledArray);
const sum= array.reduce(function(sum, x){
    return sum+x;
},0);
console.log(sum);
// filter
// array ke element ke upar ek condition apply karke naya array banata hai
const evenNumbers=array.filter(function(x){
    return x%2===0;
});
console.log(evenNumbers);
// find
const f = array.find(function(x){
    return x==3;
});
const fdemo = array.find(x=>x>3);
console.log(f);
console.log(fdemo);
// some
// array ke element ke upar ek condition apply karke true ya false return karta hai
const s = array.some(function(x){
    return x>3;
});
const sdemo = array.some(x=>x>10);
console.log(s);
console.log(sdemo);
// every
// array ke element ke upar ek condition apply karke true ya false return karta hai
const e = array.every(function(x){
    return x>5;
});
const edemo = array.every(x=>x>5);
console.log(e);
console.log(edemo);