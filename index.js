const express = require('express');

const app = express();
app.use(express.json());

app.get('/add', (req, res)=>{
  const numbers = req.body.numbers;
  const sum = numbers.reduce((a, b)=> a+b, 0);
  res.send(`The sum is ${sum}`);
})

app.get('/multiply', (req, res)=>{
  const numbers = req.body.numbers;
  const product = numbers.reduce((a, b)=> a*b, 1);
  res.send(`The product is ${product}`);
})

app.listen(5000, ()=>{
  console.log('Server is running on port 5000');
})