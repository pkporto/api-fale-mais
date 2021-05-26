"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _SignUpIndex = require("../../app/useCases/auth/signup/SignUpIndex");

var _SignInIndex = require("../../app/useCases/auth/signin/SignInIndex");

const authRoutes = (0, _express.Router)(); // authRoutes.get('/', (req: Request, res: Response)=>{
//     return res.send('Rota inicial.');
// })

authRoutes.post('/signup', (req, res) => {
  return _SignUpIndex.signUpController.handle(req, res);
});
authRoutes.post('/signin', (req, res) => {
  return _SignInIndex.signInController.handle(req, res);
});
var _default = authRoutes;
exports.default = _default;