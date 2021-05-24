import { Request, Response } from 'express';
import  SignInUseCase  from './SignInUseCase';
import jwt from 'jsonwebtoken';


// import endpoint from '../../../../endpoints.config';

export default class LoginUserController {
    constructor(
        private signInUseCase: SignInUseCase
    ){}

   async handle(req: Request, res: Response): Promise<Response>{
       const { email, password } = req.body;

       try {
           await this.signInUseCase.execute({
               email,
               password
           });
           const token = jwt.sign({ email }, process.env.JWT_SECRET!, {
            expiresIn: '1d'
          });


          return res.status(200).json({
            status: 200,
            message: 'Login efetuado com sucesso.',
            data: token
        })
       } catch (error) {
           return res.status(400).json({
                  message: error.message || 'Erro desconhecido.'
            })
       }
   }
}
