import express from 'express';

const app = express();
const PORT = 8080 || process.env.PORT;

app.get('/', (req, res) => {
  res.json('Hello World');
});

app.listen(PORT, (): void => {
  console.log('Server is up on port: ', PORT);
});
