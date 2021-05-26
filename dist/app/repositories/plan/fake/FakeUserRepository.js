"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = require("../../../entities/User");

var _uuid = require("uuid");

class FakeUserRepository {
  constructor() {
    this.users = [];
  }

  async findByEmail(email) {
    const user = this.users.find(user => user.email === email);
    return user;
  }

  async signUp(data) {
    const user = new _User.User(data);
    user.id = (0, _uuid.v4)();
    this.users.push(user);
    return user;
  }

  async signin(email, password) {
    return undefined;
  }

}

exports.default = FakeUserRepository;