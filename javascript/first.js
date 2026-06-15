
2. Total Revenue

3. Count Words

4. Employee Salary List

5. Available Products

6. Post Likes Analysis
const posts = [
  { postId: 1, likes: 100 },
  { postId: 2, likes: 200 }
];

console.log(posts.reduce((sum, p) => sum + p.likes, 0));
7. Highly Rated Movies
const movies = [
  { title: "Movie A", rating: 8.5 },
  { title: "Movie B", rating: 6.0 }
];

const result = movies
  .filter(m => m.rating > 8)
  .map(m => m.title);

console.log(result);
8. Customer Spending
const customers = [
  { customer: "John", amount: 50000 },
  { customer: "Emma", amount: 20000 }
];

console.log(customers.reduce((sum, c) => sum + c.amount, 0));
9. Bank Transactions
const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 300 },
  { type: "credit", amount: 500 }
];

const totalCredit = transactions
  .filter(t => t.type === "credit")
  .reduce((sum, t) => sum + t.amount, 0);

console.log(totalCredit);
10. User Actions
const actions = [
  { user: "A", action: "login" },
  { user: "B", action: "logout" },
  { user: "C", action: "login" }
];

console.log(actions.filter(a => a.action === "login").length);