import { getCustomRepository } from 'typeorm';
import { User } from '@entities/User';
import { IUserRepository } from '@repositories/auth/models/IUserRepository';
import ISignUpDTO from './PriceDTO';
import AppError from '@shared/helpers/AppError';
import IPriceDTO from './PriceDTO';
import { PriceRepository } from '@repositories/price/implementations/PriceRepository';

export default class PriceUseCase {
  constructor(
    private priceRepository: PriceRepository,
  ) {}
  public async execute(origin:string, destiny: string, time: number ): Promise<String> {
  // public async execute(data: IPriceDTO): Promise<String> {
    // const { origin, destiny, time } = data;

    const price = await this.priceRepository.get(String(origin), String(destiny));

    let valueWithoutPrice: number = 0;

    valueWithoutPrice = price.price * time;
    console.log(price);
    return `${valueWithoutPrice}`;
  }
}
