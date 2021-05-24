import { EntityRepository, getRepository, Repository } from "typeorm";
import { User } from "@entities/User";
import { IUserRepository } from '@repositories/auth/models/IUserRepository';

import bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository implements IUserRepository {
    constructor(){
        // this.ormRepository =  getRepository(User);
    }
    async findByEmail(email: string): Promise<User | undefined> {
        try {

            const user = await getRepository(User).findOne(
                {
                    where:
                        { email: email }
                });
            return user;
        } catch (error) {
            return error.message;
        }
    }

    async signUp(user: User): Promise<User> {
        await getRepository(User).save(user);
        //    this.ormRepository.save(user);
           return user;
    }

    async signin(email: string, password: string): Promise<User | undefined> {
        try {
            const userInfo = await getRepository(User).
                findOne(
                    {
                        where: { email },
                    });


            const login = await bcrypt.compare(password, userInfo!.password);

            if (!login) {
                return undefined;
            }

            return userInfo!;


        } catch (error) {
            return error.message;
        }
    }
}
