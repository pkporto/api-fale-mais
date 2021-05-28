"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class SignInUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(data) {
    console.log('entrou no usecase');
    const userExists = await this.usersRepository.findByEmail(data.email);
     console.log(userExists); 
    if (!userExists) {
      throw new Error("User don't exists.");
    } // console.log(`login useruscase  ${userExists}`)


    const usuario = await this.usersRepository.signin(data.email, data.password);

    if (!usuario) {
      throw new Error("Credenciais incorretas.");
    }

    return usuario; // console.log(`teste da senha   ${usuario}`);
  }

}

exports.default = SignInUseCase;