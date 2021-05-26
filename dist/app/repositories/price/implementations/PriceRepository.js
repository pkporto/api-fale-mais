"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PriceRepository = void 0;

var _typeorm = require("typeorm");

var _Price = _interopRequireDefault(require("../../../entities/Price"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PriceRepository = (_dec = (0, _typeorm.EntityRepository)(_Price.default), _dec(_class = class PriceRepository {
  async get(origin, destiny) {
    const plan = await (0, _typeorm.getRepository)(_Price.default).findOne({
      where: {
        origin,
        destiny
      }
    });
    return plan;
  }

}) || _class);
exports.PriceRepository = PriceRepository;