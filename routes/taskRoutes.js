// taskRoutes.js
const express = require('express');
const { createTask, getTasks, getTaskById, updateTask, deleteTask, sendReminder } = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createTask);
router.get('/', authMiddleware, getTasks);
router.get('/:id', authMiddleware, getTaskById);
router.put('/:id', authMiddleware, updateTask);
router.delete('/:id', authMiddleware, deleteTask);
router.post('/:id/reminder', authMiddleware, sendReminder);


module.exports = router;
