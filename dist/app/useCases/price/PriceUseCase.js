"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class PriceUseCase {
  constructor(planRepository, priceRepository) {
    this.planRepository = planRepository;
    this.priceRepository = priceRepository;
  }

  async execute(origin, destiny, time, plan) {
    // public async execute(data: IPriceDTO): Promise<String> {
    // const { origin, destiny, time } = data;
    const minutesPlan = await this.planRepository.get(plan);
    const price = await this.priceRepository.get(String(origin), String(destiny));
    console.log(minutesPlan.minutes);
    let valueWithoutPlan = 0;
    let valueWithPlan = 0;
    valueWithoutPlan = price.price * time;
    valueWithPlan = this.calculate(minutesPlan.minutes, time, price.price);

    if (valueWithPlan <= 0) {
      valueWithPlan = 0;
    } // console.log(valeWithPlan.toFixed(2), valueWithoutPlan);


    return `O valor da ligação sem plano é ${valueWithoutPlan}, usando o plano R$${minutesPlan.name} o valor é de R$${valueWithPlan.toFixed(2)}`;
  }

  calculate(planMinutes, timeSpeaking, planPrice) {
    let value;
    let finalValue;
    value = timeSpeaking - planMinutes;
    finalValue = planPrice * 1.1 * value;
    return finalValue;
  }

}

exports.default = PriceUseCase;