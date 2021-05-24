import { Request, Response, Router } from 'express';
import { signUpController } from '@useCases/auth/signup/SignUpIndex'
import { signInController } from '@useCases/auth/signin/SignInIndex';
const authRoutes = Router();

// authRoutes.get('/', (req: Request, res: Response)=>{
//     return res.send('Rota inicial.');
// })

authRoutes.post('/signup', (req: Request, res: Response)=>{
    return signUpController.handle(req,res);
})

authRoutes.post('/signin', (req: Request, res: Response)=>{
    return signInController.handle(req,res);
})


export default authRoutes;