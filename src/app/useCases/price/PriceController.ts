import { Request, Response } from 'express';
import { validateUser } from '@helpers/Validation';
import PriceUseCase from './PriceUseCase';
import { container } from 'tsyringe';
import PriceDTO from './PriceDTO';
import AppError from '@shared/helpers/AppError';

export default class PriceController {
    constructor(
        private priceUseCase: PriceUseCase
    ){}

    async handle (req: Request, res: Response): Promise<Response>{
        // const { origin, destiny, time } = req.query;
        // console.log(origin);
        // const request: PriceDTO = req.body;

        let origin,
         destiny,
        time,
        plan;
        if(req.query && req.query.origin && req.query.destiny && req.query.time && req.query.plan){
             origin = (req.query as any).origin;
             destiny = (req.query as any).destiny;
             time = (req.query as any).time;
             plan = (req.query as any).plan;
        }
        
        try {
            // const result = await validateUser.validateAsync(req.body);

           const price = await this.priceUseCase.execute(
               origin, 
               destiny, 
               time,
               plan
            );

            return res.status(201).json({
                cod: 201,
                message: 'Resultado:', 
                data: price
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Erro desconhecido.'
            })
        }
    }
}
