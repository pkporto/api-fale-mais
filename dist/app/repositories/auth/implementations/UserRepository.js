"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;

var _typeorm = require("typeorm");

var _User = require("../../../entities/User");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _dec, _dec2, _dec3, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UserRepository = (_dec = (0, _typeorm.EntityRepository)(_User.User), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = class UserRepository {
  constructor() {// this.ormRepository =  getRepository(User);
  }

  async findByEmail(email) {
    try {
      const user = await (0, _typeorm.getRepository)(_User.User).findOne({
        where: {
          email: email
        }
      });
      return user;
    } catch (error) {
      return error.message;
    }
  }

  async signUp(user) {
    await (0, _typeorm.getRepository)(_User.User).save(user); //    this.ormRepository.save(user);

    return user;
  }

  async signin(email, password) {
    try {
      const userInfo = await (0, _typeorm.getRepository)(_User.User).findOne({
        where: {
          email
        }
      });
      const login = await _bcrypt.default.compare(password, userInfo.password);

      if (!login) {
        return undefined;
      }

      return userInfo;
    } catch (error) {
      return error.message;
    }
  }

}) || _class) || _class) || _class);
exports.UserRepository = UserRepository;