import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import auth_routes from './shared/routes/auth_route';
import App_Error from './shared/helpers/app_error';

const app = express();

//Enable CORS
app.use(cors());

//Using JSON
app.use(express.json());

//Routes
app.use(auth_routes);

//Middleware to handle errors
app.use(
    (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        if (error instanceof App_Error) {
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