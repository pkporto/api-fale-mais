import { User } from "@entities/User";

export interface IUserRepository {
    findByEmail(email: string): Promise<User | undefined>;
    signin(email: string, password: string): Promise<User | undefined>;
    signUp(user: User): Promise<User>;
}