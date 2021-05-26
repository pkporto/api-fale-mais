"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import endpoint from '../../../../endpoints.config';
class LoginUserController {
  constructor(signInUseCase) {
    this.signInUseCase = signInUseCase;
  }

  async handle(req, res) {
    const {
      email,
      password
    } = req.body;

    try {
      await this.signInUseCase.execute({
        email,
        password
      });

      const token = _jsonwebtoken.default.sign({
        email
      }, process.env.JWT_SECRET, {
        expiresIn: '1d'
      });

      return res.status(200).json({
        status: 200,
        message: 'Login efetuado com sucesso.',
        data: token
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Erro desconhecido.'
      });
    }
  }

}

exports.default = LoginUserController;