import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import { AppError } from './error.middleware.js';

export const protect = async (req, res, next) => {
    try {
        // 1) Get token from header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return next(new AppError('Not authorized to access this route', 401));
        }

        const token = authHeader.split(' ')[1];

        // 2) Verify token
        const decoded = jwt.verify(token, config.jwtSecret);

        // 3) Add user to request object
        req.user = decoded;

        next();
    } catch (error) {
        next(new AppError('Not authorized to access this route', 401));
    }
};

export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new AppError('Not authorized to access this route', 403));
        }
        next();
    };
}; 