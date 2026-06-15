const sales = [
  { category: "Electronics", amount: 500 },
  { category: "Books", amount: 100 },
  { category: "Electronics", amount: 300 }
];

console.log(sales.reduce((sum, s) => sum + s.amount, 0));