const actions = [
  { user: "A", action: "login" },
  { user: "B", action: "logout" },
  { user: "C", action: "login" },
  { user: "D", action: "login" },
  { user: "E", action: "logout" }
];

console.log(actions.filter(a => a.action === "login").length);