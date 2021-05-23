import { UserRepository } from "@repositories/auth/implementations/UserRepository";
import  PlanController  from "./PlanController";
import  PlanUseCase  from "./PlanUseCase";

const userRepository = new UserRepository();
const planUseCase = new PlanUseCase(userRepository);

const planController = new PlanController(
    planUseCase
);


export { planController }