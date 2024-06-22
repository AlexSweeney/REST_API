import express from 'express';
import { v4 as uuid } from 'uuid';
uuid()

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
  console.log(users);
  res.send(users)
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

router.post('/', (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() })

  res.send(`user with name: ${user.firstName} added to database!`);
});

export default router;