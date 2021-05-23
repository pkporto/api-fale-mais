import { Request, Response } from 'express';
import { validateUser } from '@helpers/Validation';
import SignUpUseCase from './SignUpUseCase';
import { container, delay } from 'tsyringe';
import { IUserRepository } from '@repositories/auth/models/IUserRepository';
import { UserRepository } from '@repositories/auth/implementations/UserRepository';

export default class SignUpController {
    constructor(
        private signUpUseCase: SignUpUseCase
    ){}

    async handle (req: Request, res: Response): Promise<Response>{
        const { name, email, password } = req.body;
        container.register('UserRepository', { useValue: UserRepository });
         const useCase = container.resolve(SignUpUseCase);
        // container.registerSingleton<IUserRepository>(
        //     'IUserRepository',
        //     delay(() => UserRepository),
        //   );

        try {
            const result = await validateUser.validateAsync(req.body);
            console.log(result);
            await useCase.execute({
                name,
                email,
                password
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
