"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.amountDollarsInFlight = exports.availableHospitalBedsByRequestTime = exports.percentageSeverity = exports.infectionsPerPeriod = exports.normalizePeriodInDays = exports.severeCurrentlyInfected = exports.impactCurrentlyInfected = void 0;

var _constants = require("./constants");

var impactCurrentlyInfected = function impactCurrentlyInfected(data) {
  return data.reportedCases * _constants.impactNumber;
};

exports.impactCurrentlyInfected = impactCurrentlyInfected;

var severeCurrentlyInfected = function severeCurrentlyInfected(data) {
  return data.reportedCases * _constants.severeImpactNumber;
};

exports.severeCurrentlyInfected = severeCurrentlyInfected;

var normalizePeriodInDays = function normalizePeriodInDays(periodType, days) {
  switch (periodType) {
    case 'months':
      return days * _constants.daysMonth;

    case 'weeks':
      return days * _constants.daysWeek;

    default:
      return days;
  }
};

exports.normalizePeriodInDays = normalizePeriodInDays;

var infectionsPerPeriod = function infectionsPerPeriod(currentlyInfected, period) {
  var factor = Math.trunc(period / 3);
  return currentlyInfected * Math.pow(2, factor);
};

exports.infectionsPerPeriod = infectionsPerPeriod;

var percentageSeverity = function percentageSeverity(totalCases, percentage) {
  var percentQuest = percentage / 100;
  return totalCases * percentQuest;
};

exports.percentageSeverity = percentageSeverity;

var availableHospitalBedsByRequestTime = function availableHospitalBedsByRequestTime(data, positiveCases) {
  var availableHospitalBeds = data * 0.35;
  return availableHospitalBeds - positiveCases;
};

exports.availableHospitalBedsByRequestTime = availableHospitalBedsByRequestTime;

var amountDollarsInFlight = function amountDollarsInFlight(count, data, period) {
  return count * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD / period;
};

exports.amountDollarsInFlight = amountDollarsInFlight;