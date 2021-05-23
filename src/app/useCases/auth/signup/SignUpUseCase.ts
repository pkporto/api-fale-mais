import { getCustomRepository } from 'typeorm';
import { User } from '@entities/User';
import { IUserRepository } from '@repositories/auth/models/IUserRepository';
import ISignUpDTO from './SignUpDTO';
import AppError from '@shared/helpers/AppError';
import { inject, injectable } from 'tsyringe';
import { UserRepository } from '@repositories/auth/implementations/UserRepository';

@injectable()
export default class SignUpUseCase {
  constructor(
    private userRepository: UserRepository,
  ) {}

  public async execute(data: ISignUpDTO): Promise<User> {
    const emailExists = await this.userRepository.findByEmail(data.email);
    console.log(emailExists);
    if (emailExists) {
      throw new AppError('Email address already used.');
    }
    const user = new User(data);
    // user.email = data.email;
    // user.name = data.name;
    // user.password = data.password;

    const customer = await this.userRepository.signUp(user);

    return customer;
  }
}
