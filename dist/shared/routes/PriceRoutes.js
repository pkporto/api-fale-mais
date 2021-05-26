"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _PriceIndex = require("../../app/useCases/price/PriceIndex");

const priceRoutes = (0, _express.Router)();
priceRoutes.get('/calculate', (req, res) => {
  console.log('calculate routes');
  return _PriceIndex.priceController.handle(req, res); // return res.send('Rota iniciddaldadsadsda');
});
priceRoutes.get('/', (req, res) => {
  return res.send('Rota inicifsdfsfddal.');
});
var _default = priceRoutes;
exports.default = _default;