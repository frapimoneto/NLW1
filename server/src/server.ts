import express from 'express';

const app = express();

const users = [
  'Francisco',
  'Diego',
  'Cleiton',
  'Daniel'
]

app.get('/users', (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

  return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post('/users', (request, response) => {
  const user = {
    name: 'Francisco',
    email: 'frapimoneto@gmail.com'
  };

  return response.json(user);
})


app.listen(3333);