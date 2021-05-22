import  SignUpController  from "./SignUpController";
import  SignUpUseCase  from "./SignUpUseCase";

const signUpUseCase = new SignUpUseCase();

const signUpController = new SignUpController(
    signUpUseCase
);


export { signUpController }