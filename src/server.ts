import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import authRoutes from './shared/routes/AuthRoutes';
import AppError from './shared/helpers/AppError';

const app = express();

//Enable CORS
app.use(cors());

//Using JSON
app.use(express.json());

//Routes
app.use(authRoutes);

//Middleware to handle errors
app.use(
    (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        if (error instanceof AppError) {
            console.log('error 9989');
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            });
        }

        console.log(error);

        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    },
);

export default app;