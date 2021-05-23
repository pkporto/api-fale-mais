import { PriceRepository } from "@repositories/price/implementations/PriceRepository";
import  PriceController  from "./PriceController";
import  PriceUseCase  from "./PriceUseCase";

const priceRepository = new PriceRepository();
const priceUseCase = new PriceUseCase(priceRepository);

const priceController = new PriceController(
    priceUseCase
);


export { priceController }