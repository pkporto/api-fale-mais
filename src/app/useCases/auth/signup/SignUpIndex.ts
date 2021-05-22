import { CreateUserController } from "./SignUpController";
import { CreateUserUseCase } from "./SignUpUseCase";

const createUserUseCase = new CreateUserUseCase();

const createUserController = new CreateUserController(
    createUserUseCase
);


export { createUserController }