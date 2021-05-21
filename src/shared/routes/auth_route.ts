import { Request, Response, Router } from 'express';

const auth_routes = Router();

auth_routes.get('/', (req: Request, res: Response)=>{
    return res.send('Rota inicial.');
})

export default auth_routes;