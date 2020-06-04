import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json([
    'Francisco',
    'Diego',
    'Cleiton',
    'Daniel'
  ]);
});

app.listen(3333);