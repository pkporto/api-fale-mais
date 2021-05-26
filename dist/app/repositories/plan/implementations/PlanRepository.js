"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlanRepository = void 0;

var _typeorm = require("typeorm");

var _Plan = _interopRequireDefault(require("../../../entities/Plan"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PlanRepository = (_dec = (0, _typeorm.EntityRepository)(_Plan.default), _dec(_class = class PlanRepository {
  async get(name) {
    const plan = await (0, _typeorm.getRepository)(_Plan.default).findOne({
      where: {
        name
      }
    });
    return plan;
  }

}) || _class);
exports.PlanRepository = PlanRepository;