const Task = require('../models/Task');
const transporter = require('../config/email');

// Create Task
exports.createTask = async (req, res) => {
    const { title, description, status, priority, dueDate } = req.body;
    try {
        const task = new Task({ title, description, status, priority, dueDate, userId: req.user.userId });
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: 'Error creating task' });
    }
};

// Fetch Tasks
exports.getTasks = async (req, res) => {
    const { page = 1, limit = 10, sortField = 'dueDate', sortOrder = 'asc' } = req.query;
    const sort = { [sortField]: sortOrder === 'asc' ? 1 : -1 };

    try {
        const tasks = await Task.find({ userId: req.user.userId })
            .sort(sort)
            .skip((page - 1) * limit)
            .limit(Number(limit));
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};


// Fetch Task by ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update Task
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (err) {
        res.status(400).json({ error: 'Error updating task' });
    }
};

// Delete Task
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.sendReminder = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);
        if (!task) return res.status(404).json({ error: 'Task not found' });

        const user = await User.findById(task.userId);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: `Reminder: ${task.title}`,
            text: `Hello ${user.name},\n\nThis is a reminder for your task: ${task.title}.\n\nDue Date: ${task.dueDate}\n\nDescription: ${task.description}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) return res.status(500).json({ error: 'Error sending email' });
            res.json({ message: 'Reminder sent' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};