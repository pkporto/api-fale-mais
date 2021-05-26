"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class PriceController {
  constructor(priceUseCase) {
    this.priceUseCase = priceUseCase;
  }

  async handle(req, res) {
    // const { origin, destiny, time } = req.query;
    // console.log(origin);
    // const request: PriceDTO = req.body;
    let origin, destiny, time, plan;

    if (req.query && req.query.origin && req.query.destiny && req.query.time && req.query.plan) {
      origin = req.query.origin;
      destiny = req.query.destiny;
      time = req.query.time;
      plan = req.query.plan;
    }

    try {
      // const result = await validateUser.validateAsync(req.body);
      const price = await this.priceUseCase.execute(origin, destiny, time, plan);
      return res.status(201).json({
        cod: 201,
        message: 'Resultado:',
        data: price
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Erro desconhecido.'
      });
    }
  }

}

exports.default = PriceController;