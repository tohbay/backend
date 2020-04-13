"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _data = _interopRequireDefault(require("../db/data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataModel = /*#__PURE__*/function () {
  function DataModel() {
    _classCallCheck(this, DataModel);
  }

  _createClass(DataModel, null, [{
    key: "getAll",
    value: function getAll() {
      return _data["default"];
    }
  }, {
    key: "create",
    value: function create(newData) {
      // const {
      //   periodType,
      //   timeToElapse,
      //   reportedCases,
      //   population,
      //   totalHospitalBeds
      // } = newData;
      var newRegionData = {
        region: {
          name: 'Africa',
          avgAge: 19.7,
          avgDailyIncomeInUSD: 5,
          avgDailyIncomePopulation: 0.71
        },
        periodType: newData.periodType || '',
        timeToElapse: newData.timeToElapse || '',
        reportedCases: newData.reportedCases || '',
        population: newData.population || '',
        totalHospitalBeds: newData.totalHospitalBeds || ''
      };

      _data["default"].push(newRegionData);

      return newRegionData;
    }
  }]);

  return DataModel;
}();

var _default = DataModel;
exports["default"] = _default;