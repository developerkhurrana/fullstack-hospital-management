import express from 'express';
import { register, login } from '../controllers/auth.controller.js';

const router = express.Router();

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

// Basic health check route
router.get('/test', (req, res) => {
    res.json({ message: 'Auth routes working!' });
});

export default router; 