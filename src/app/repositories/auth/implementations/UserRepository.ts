import { EntityRepository, getRepository, Repository } from "typeorm";
import { User } from "@entities/User";
import { IUserRepository } from '@repositories/auth/models/IUserRepository';

import bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>;
    constructor(){
        this.ormRepository = getRepository(User);
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
        // console.log(`save ${user.email}`);

        // try {
        //    const userSaved = await getRepository(User).save(user);
        //    return userSaved;
        // } catch (error) {
        //     console.log(error.message);
        //     return undefined;

        // }

           this.ormRepository.save(user);
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
