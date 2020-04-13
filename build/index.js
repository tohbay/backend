"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import debug from 'debug';
var port = process.env.PORT || 8001;

_app["default"].listen(port, function () {
  // debug(`Server is running on port ${port}`);
  console.log("Server is running on port ".concat(port));
});