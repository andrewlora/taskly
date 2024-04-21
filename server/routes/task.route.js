import express from 'express';

import {
  createTask,
  deleteTask,
  getTask,
  getTasksByUser,
  updatedTask,
} from '../controllers/task.controller.js';

import { verifyToken } from '../libs/middleware.js';

const router = express.Router();

router.get('/:id', verifyToken, getTask);
router.get('/user/:id', verifyToken, getTasksByUser);
router.post('/create', verifyToken, createTask);
router.patch('/:id', verifyToken, updatedTask);
router.delete('/:id', verifyToken, deleteTask);

export default router;
