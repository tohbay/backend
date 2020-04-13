"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _data = _interopRequireDefault(require("../db/data"));

var _data2 = _interopRequireDefault(require("../models/data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataController = /*#__PURE__*/function () {
  function DataController() {
    _classCallCheck(this, DataController);
  }

  _createClass(DataController, null, [{
    key: "getAll",
    value: function getAll(req, res) {
      var allData = _data2["default"].getAll();

      return res.status(200).json({
        data: allData
      }); // return data;
    }
  }, {
    key: "create",
    value: function create(req, res) {
      var _req$body = req.body,
          periodType = _req$body.periodType,
          timeToElapse = _req$body.timeToElapse,
          reportedCases = _req$body.reportedCases,
          population = _req$body.population,
          totalHospitalBeds = _req$body.totalHospitalBeds;

      if (!periodType || !timeToElapse || !reportedCases || !population || !totalHospitalBeds) {
        return res.status(400).json({
          error: 'All fields are required'
        });
      }

      var newData = _data2["default"].create(req.body);

      console.log(newData);
      return res.status(201).json({
        data: newData
      });
    }
  }]);

  return DataController;
}();

var _default = DataController;
exports["default"] = _default;