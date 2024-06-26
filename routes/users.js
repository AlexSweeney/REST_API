import express from 'express';
import { v4 as uuid } from 'uuid';
import { createUser, getUser, getUsers, deleteUser, updateUser } from '../controllers/users.js';
uuid()

const router = express.Router();

let users = [];

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser)

export default router;