const text = "The fox is quick. The fox is smart.";

let count = text.toLowerCase().split("fox").length - 1;

console.log("fox count : ",count);