import { getCustomRepository } from 'typeorm';
import { User } from '@entities/user';
import { UserRepository } from '../../../repositories/auth/implementations/userRepository';
import { IUserRepository } from '../../../repositories/IUserRepository';
import { ICreateUserRequestDTO} from './SignUpDTO';

export class CreateUserUseCase {
    async execute(data: ICreateUserRequestDTO){
        const usersRepository = getCustomRepository(UserRepository);
        //Checking if it exists
        const userAlreadyExists = await usersRepository.findByEmail(data.email); 
        if(userAlreadyExists){
            throw new Error('User already exists.');
        }

        const user = new User(data);
        await usersRepository.save(user);
    }
}