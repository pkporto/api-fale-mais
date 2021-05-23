import { Request, Response } from 'express';
import { validateUser } from '@helpers/Validation';
import PlanUseCase from './PlanUseCase';
import { container } from 'tsyringe';

export default class PlanController {
    constructor(
        private planUseCase: PlanUseCase
    ){}

    async handle (req: Request, res: Response): Promise<Response>{
        const { origin, destiny, time } = req.body;
        const useCase = container.resolve(PlanUseCase);

        try {
            const result = await validateUser.validateAsync(req.body);

            await useCase.execute({
                origin, 
                destiny, 
                time
            });

            return res.status(201).json({
                status: 201,
                message: "Usuário cadastrado com sucesso."
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Erro desconhecido.'
            })
        }
    }
}
