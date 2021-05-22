import { getCustomRepository } from 'typeorm';
import { User } from '@entities/User';
import { UserRepository } from '../../../repositories/auth/implementations/userRepository';
import { IUserRepository } from '@repositories/auth/models/IUserRepository';
import ISignUpDTO from './SignUpDTO';
import AppError from '@shared/helpers/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class SignUpUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute(data: ISignUpDTO): Promise<User> {
    const emailExists = await this.userRepository.findByEmail(data.email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }
    const user = new User();
    user.email = data.email;
    user.name = data.name;
    user.password = data.password;
    
    const customer = await this.userRepository.signUp(user);

    return customer;
  }
}
