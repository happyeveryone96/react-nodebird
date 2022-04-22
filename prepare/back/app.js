const express = require('express');
const postRouter = require('./routes/post');

const app = express();

app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/', (req, res) => {
  res.send('hello api');
});

app.get('/posts', (req, res) => {
  res.send([
    { id: 1, content: 'hello'},
    { id: 1, content: 'hello2'},
    { id: 1, content: 'hello3'},
  ]);
});

app.use('/post', postRouter);

app.listen(3065, () => {
  console.log('서버 실행 중');
});