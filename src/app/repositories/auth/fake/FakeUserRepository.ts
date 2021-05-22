import { User } from "@entities/User";
import { IUserRepository } from '@repositories/auth/models/IUserRepository';
import {v4 as uuidv4} from 'uuid';
import SignUpDTO from '@useCases/auth/signup/SignUpDTO';

export default class FakeUserRepository implements Omit<IUserRepository, 'signin'> {
    private users: User[] = [];

   
    async findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find(user => user.email === email);
        return user;
    }

    async signUp(data: SignUpDTO): Promise<User> {
        const user = new User(data);
        user.id= uuidv4();
        
        this.users.push(user);

        return user;
    }

    async signin(email: string, password: string): Promise<User | undefined> {
        return undefined;
    }
}
