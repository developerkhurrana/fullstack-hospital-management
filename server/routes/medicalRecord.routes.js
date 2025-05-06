import express from 'express';

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({ message: 'Medical Record routes working!' });
});

export default router; 