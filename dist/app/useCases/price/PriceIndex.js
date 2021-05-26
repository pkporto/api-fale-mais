"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.priceController = void 0;

var _PlanRepository = require("../../repositories/plan/implementations/PlanRepository");

var _PriceRepository = require("../../repositories/price/implementations/PriceRepository");

var _PriceController = _interopRequireDefault(require("./PriceController"));

var _PriceUseCase = _interopRequireDefault(require("./PriceUseCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const priceRepository = new _PriceRepository.PriceRepository();
const planRepository = new _PlanRepository.PlanRepository();
const priceUseCase = new _PriceUseCase.default(planRepository, priceRepository);
const priceController = new _PriceController.default(priceUseCase);
exports.priceController = priceController;