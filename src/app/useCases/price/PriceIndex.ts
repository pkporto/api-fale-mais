import { PlanRepository } from "@repositories/plan/implementations/PlanRepository";
import { PriceRepository } from "@repositories/price/implementations/PriceRepository";
import  PriceController  from "./PriceController";
import  PriceUseCase  from "./PriceUseCase";

const priceRepository = new PriceRepository();
const planRepository = new PlanRepository()
const priceUseCase = new PriceUseCase(
     planRepository,
     priceRepository);

const priceController = new PriceController(
    priceUseCase
);


export { priceController }