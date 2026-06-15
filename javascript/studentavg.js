const students = [
  { name: "John", marks: [80, 90, 85] },
  { name: "Emma", marks: [95, 92, 98] }
];

const result = students.map(s => ({
  name: s.name,
  average: s.marks.reduce((a, b) => a + b) / s.marks.length
}));

console.log(result);