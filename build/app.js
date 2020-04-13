"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _data = _interopRequireDefault(require("./db/data"));

var _data2 = _interopRequireDefault(require("./routes/data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use('/api/v1/on-covid-19', _data2["default"]);
app.get('/api/v1/on-covid-19', function (req, res) {
  res.status(200).json({
    data: _data["default"][0]
  }); //   next();
});
app.get('/api/v1', function (req, res) {
  res.status(200).json({
    message: 'Welcome to Covid-19 Estimator'
  }); //   next();
});
var _default = app;
exports["default"] = _default;