"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Validation = require("../../../../shared/helpers/Validation");

var _SignUpUseCase = _interopRequireDefault(require("./SignUpUseCase"));

var _tsyringe = require("tsyringe");

var _UserRepository = require("../../../repositories/auth/implementations/UserRepository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SignUpController {
  constructor(signUpUseCase) {
    this.signUpUseCase = signUpUseCase;
  }

  async handle(req, res) {
    const {
      name,
      email,
      password
    } = req.body;

    _tsyringe.container.register('UserRepository', {
      useValue: _UserRepository.UserRepository
    });

    const useCase = _tsyringe.container.resolve(_SignUpUseCase.default); // container.registerSingleton<IUserRepository>(
    //     'IUserRepository',
    //     delay(() => UserRepository),
    //   );


    try {
      const result = await _Validation.validateUser.validateAsync(req.body);
      console.log(result);
      await useCase.execute({
        name,
        email,
        password
      });
      return res.status(201).json({
        status: 201,
        message: "Usuário cadastrado com sucesso."
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Erro desconhecido.'
      });
    }
  }

}

exports.default = SignUpController;