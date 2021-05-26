"use strict";

require("reflect-metadata");

require("./shared/typeorm");

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_server.default.listen(7777, () => {
  console.log('Running on 7777');
});