"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUser = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validateUser = _joi.default.object({
  name: _joi.default.string().required(),
  email: _joi.default.string().email().lowercase().required(),
  password: _joi.default.string().min(6).required()
});

exports.validateUser = validateUser;