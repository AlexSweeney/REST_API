import express from 'express';

const router = express.Router();

const users = [
  {
    "name": "John",
    "lastName": "doe",
    "age": 25
  }
]

router.get('/', (req, res) => {
  res.send('Hello')
});

export default router;