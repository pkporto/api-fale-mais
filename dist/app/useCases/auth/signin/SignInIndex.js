"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInController = void 0;

var _UserRepository = require("../../../repositories/auth/implementations/UserRepository");

var _SignInController = _interopRequireDefault(require("./SignInController"));

var _SignInUseCase = _interopRequireDefault(require("./SignInUseCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRepository = new _UserRepository.UserRepository();
const signInUseCase = new _SignInUseCase.default(userRepository);
const signInController = new _SignInController.default(signInUseCase);
exports.signInController = signInController;