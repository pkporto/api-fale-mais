"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _AuthRoutes = _interopRequireDefault(require("./shared/routes/AuthRoutes"));

var _AppError = _interopRequireDefault(require("./shared/helpers/AppError"));

var _PriceRoutes = _interopRequireDefault(require("./shared/routes/PriceRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); //Enable CORS

app.use((0, _cors.default)()); //Using JSON

app.use(_express.default.json()); //Routes

app.use(_AuthRoutes.default);
app.use(_PriceRoutes.default); //Middleware to handle errors

app.use((error, request, response, next) => {
  if (error instanceof _AppError.default) {
    console.log('error 9989');
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    });
  }

  console.log(error);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
});
var _default = app;
exports.default = _default;