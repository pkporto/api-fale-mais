import { UserRepository } from '@repositories/auth/implementations/UserRepository';
import SignInController  from './SignInController';
import SignInUseCase  from './SignInUseCase';

const userRepository = new UserRepository();

const signInUseCase = new SignInUseCase(
    userRepository
);

const signInController = new SignInController(
    signInUseCase
);

export { signInController }