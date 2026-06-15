const employees = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 60000 }
];

const salaries = employees.map(e => e.salary);
const total = salaries.reduce((a, b) => a + b, 0);

console.log(salaries);
console.log(total);