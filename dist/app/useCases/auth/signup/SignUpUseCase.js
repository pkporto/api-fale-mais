"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = require("../../../entities/User");

var _AppError = _interopRequireDefault(require("../../../../shared/helpers/AppError"));

var _tsyringe = require("tsyringe");

var _UserRepository = require("../../../repositories/auth/implementations/UserRepository");

var _dec, _dec2, _dec3, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let SignUpUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [typeof _UserRepository.UserRepository === "undefined" ? Object : _UserRepository.UserRepository]), _dec(_class = _dec2(_class = _dec3(_class = class SignUpUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(data) {
    const emailExists = await this.userRepository.findByEmail(data.email);
    console.log(emailExists);

    if (emailExists) {
      throw new _AppError.default('Email address already used.');
    }

    const user = new _User.User(data); // user.email = data.email;
    // user.name = data.name;
    // user.password = data.password;

    const customer = await this.userRepository.signUp(user);
    return customer;
  }

}) || _class) || _class) || _class);
exports.default = SignUpUseCase;