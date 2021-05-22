import { Request, Response } from 'express';
// import { validateUser } from '@helpers/validation';
import { CreateUserUseCase } from './SignUpUseCase';

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}

    async handle (req: Request, res: Response): Promise<Response>{
        const { name, email, password, cpf } = req.body;

        try {
            const result = await validateUser.validateAsync(req.body);

            await this.createUserUseCase.execute({
                name,
                email,
                password,
                cpf
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
