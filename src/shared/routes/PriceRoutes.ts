import { Request, Response, Router } from 'express';
import { priceController } from '@useCases/price/PriceIndex'
const priceRoutes = Router();


priceRoutes.get('/calculate', (req: Request, res: Response)=>{
    return priceController.handle(req,res);
    // return res.send('Rota iniciddaldadsadsda');
})

priceRoutes.get('/', (req: Request, res: Response)=>{
    return res.send('Rota inicifsdfsfddal.');
})


export default priceRoutes;