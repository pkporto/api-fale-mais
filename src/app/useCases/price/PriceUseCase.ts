import { getCustomRepository } from 'typeorm';
import { User } from '@entities/User';
import { IUserRepository } from '@repositories/auth/models/IUserRepository';
import ISignUpDTO from './PriceDTO';
import AppError from '@shared/helpers/AppError';
import IPriceDTO from './PriceDTO';
import { PriceRepository } from '@repositories/price/implementations/PriceRepository';
import { PlanRepository } from '@repositories/plan/implementations/PlanRepository';

export default class PriceUseCase {
  constructor(
    private planRepository: PlanRepository,
    private priceRepository: PriceRepository,
  ) {}
  public async execute(origin:string, destiny: string, time: number , plan: string): Promise<String> {
  // public async execute(data: IPriceDTO): Promise<String> {
    // const { origin, destiny, time } = data;
    const minutesPlan =  await this.planRepository.get(plan);
    const price = await this.priceRepository.get(String(origin), String(destiny));

    console.log(minutesPlan.minutes);
    let valueWithoutPlan: number = 0;
    let valeWithPlan: number = 0;

    valueWithoutPlan = price.price * time;



    valeWithPlan = this.calculate(minutesPlan.minutes, time, price.price);

    console.log(valeWithPlan.toFixed(2), valueWithoutPlan);
    return `O valor da ligação sem plano é ${valueWithoutPlan}, usando o plano ${minutesPlan.name} o valor é de ${valeWithPlan} `;
  }

  calculate (planMinutes: number, timeSpeaking: number, planPrice: number){
    let value;
    let finalValue;
    value = timeSpeaking - planMinutes;

    finalValue = (planPrice * 1.1) * value;

    return finalValue;
    
  }
}
