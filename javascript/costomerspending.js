const customers = [
  { customer: "John", amount: 50000 },
  { customer: "Emma", amount: 20000 },
  { customer: "Alice", amount: 30000 }
];

console.log(customers.reduce((sum, c) => sum + c.amount, 0));