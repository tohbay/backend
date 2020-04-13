"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daysWeek = exports.daysMonth = exports.severeImpactNumber = exports.impactNumber = exports.inputData = void 0;
var inputData = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};
exports.inputData = inputData;
var impactNumber = 10;
exports.impactNumber = impactNumber;
var severeImpactNumber = 50;
exports.severeImpactNumber = severeImpactNumber;
var daysMonth = 30;
exports.daysMonth = daysMonth;
var daysWeek = 7;
exports.daysWeek = daysWeek;