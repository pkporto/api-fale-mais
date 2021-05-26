"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUpController = void 0;

var _UserRepository = require("../../../repositories/auth/implementations/UserRepository");

var _SignUpController = _interopRequireDefault(require("./SignUpController"));

var _SignUpUseCase = _interopRequireDefault(require("./SignUpUseCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRepository = new _UserRepository.UserRepository();
const signUpUseCase = new _SignUpUseCase.default(userRepository);
const signUpController = new _SignUpController.default(signUpUseCase);
exports.signUpController = signUpController;