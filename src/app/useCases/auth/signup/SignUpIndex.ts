import { UserRepository } from "@repositories/auth/implementations/UserRepository";
import  SignUpController  from "./SignUpController";
import  SignUpUseCase  from "./SignUpUseCase";

const userRepository = new UserRepository();
const signUpUseCase = new SignUpUseCase(userRepository);

const signUpController = new SignUpController(
    signUpUseCase
);


export { signUpController }