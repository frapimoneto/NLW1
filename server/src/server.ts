import express from 'express';

const app = express();

const users = [
  'Francisco',
  'Diego',
  'Cleiton',
  'Daniel'
]

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  return response.json(users);
});

app.get('/users/:id', (request, response) => {
  console.log('Listagem de usuários');

  return response.json(users);
});

app.post('/users', (request, response) => {
  const user = {
    name: 'Francisco',
    email: 'frapimoneto@gmail.com'
  };

  return response.json(user);
})


app.listen(3333);