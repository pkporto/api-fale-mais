import Price  from "@entities/Price";

export default interface IPriceRepository {
    get(origin: string, destiny: string): Promise<Price>;
    
}