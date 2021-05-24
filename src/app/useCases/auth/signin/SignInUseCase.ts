import { User } from '../../../entities/User';
import { IUserRepository } from '@repositories/auth/models/IUserRepository';
import ISignInDTO from './SignInDTO';

export default class SignInUseCase {
    constructor(
        private usersRepository: IUserRepository
    ){}

    async execute(data: ISignInDTO){
        console.log('entrou no usecase');
        const userExists = await this.usersRepository.findByEmail(data.email);
        if(!userExists){
            throw new Error("User don't exists.");
        }

        // console.log(`login useruscase  ${userExists}`)
        const usuario = await this.usersRepository.signin(data.email, data.password);
        if(!usuario){
            throw new Error("Credenciais incorretas.");
        }
        return usuario;
        // console.log(`teste da senha   ${usuario}`);
    }
}
