// String
// string ka size batata hai length se
let name = "hghghkwhk";
console.log(name.length);

// touppercase
// sab capital me convert kar deta hai
console.log(name.toUpperCase());

// tolowercase
// sab small me convert kar deta hai
let name1 = "MANISH";
console.log(name1.toLowerCase());

// trim
// string ke starting aur ending me jo space hote hai unko remove kar deta hai  
let name2 = "     manish       ";
console.log(name2.trim());
console.log(name2.trim().length);

// includes
// string me koi word ya character hai ya nahi ye check karta hai
let p =  "java script is jhatu language ";
console.log(p.includes("script"));
console.log(p.includes("python"));

// startswith
// string ke starting me koi word ya character hai ya nahi ye check karta hai
let q = "java script is weak language ";
console.log(q.startsWith("java"));
console.log(q.startsWith("script"));
// endswith
// string ke ending me koi word ya character hai ya nahi ye check karta hai
console.log(q.endsWith("language"));
console.log(q.endsWith("script"));

// indexof
// string me koi word ya character ka index return karta hai
let r = "hi how are you im manish ";
console.log(r.indexOf("you"));
console.log(r.indexOf("manish"));

// lastindexof
// string me koi word ya character ka last index return karta hai
console.log(r.lastIndexOf("you"));
console.log(r.lastIndexOf("manish"));

// slice            
// string me se koi part nikalne ke liye use hota hai
let s = "hi how are you im manish ";
console.log(s.slice(0, 2));
console.log(s.slice(3, 6));
console.log(s.slice(7, 10));

// substring
// string me se koi part nikalne ke liye use hota hai
console.log(s.substring(3, 10));
console.log(s.substring(7, 10));
// replace
// string me se koi word ya character ko replace karne ke liye use hota hai
let t = "hi how are you im manish ";
console.log(t.replace("manish", "rahul"));
console.log(t.replace("hi", "hello"));
// replaceall           
// string me se koi word ya character ko replace karne ke liye use hota hai
let u = "hi how are you im manish hi";          
console.log(u.replaceAll("hi", "hello"));   
// split
// string ko array me convert karne ke liye use hota hai
let v = "hi how are you im manish ";
console.log(v.split(" "));  