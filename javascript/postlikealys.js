const posts = [
  { postId: 1, likes: 100 },
  { postId: 2, likes: 200 },        
  { postId: 3, likes: 300 },
  { postId: 4, likes:   400 },
  { postId: 5, likes: 600 },
];

console.log(posts.reduce((sum, p) => sum + p.likes, 0));