import { User } from "@entities/user";
import { IUserRepository } from '@repositories/auth/IUserRepository';
import {v4 as uuidv4} from 'uuid';
import SignUpDTO from '@useCases/auth/signup/SignUpDTO';

export class UserRepository implements Omit<IUserRepository, 'signin'> {
    private users: User[] = [];

   
    async findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find(user => user.email === email);
        return user
    }

    async signUp({name , email, password}: SignUpDTO): Promise<User> {
        const user = new User();

        user.id = uuidv4();
        user.name = name;
        user.email = email;
        user.password = password;

        this.users.push(user);

        return user;
    }

    // async signin(email: string, password: string): Promise<User | undefined> {
    // }
}
