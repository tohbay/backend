import {
  impactNumber,
  severeImpactNumber,
  daysWeek,
  daysMonth
} from './constants';

export const impactCurrentlyInfected = (data) => data.reportedCases * impactNumber;

export const severeCurrentlyInfected = (data) => data.reportedCases * severeImpactNumber;

export const normalizePeriodInDays = (periodType, timeToElapse) => {
  switch (periodType) {
    case 'months':
      return timeToElapse * daysMonth;
    case 'weeks':
      return timeToElapse * daysWeek;
    default:
      return timeToElapse;
  }
};

export const infectionsPerPeriod = (currentlyInfected, timeToElapse) => {
  const factor = Math.trunc(timeToElapse / 3);
  return currentlyInfected * Math.trunc(2 ** factor);
};

export const percentageSeverity = (totalCases, percentage) => {
  const percentQuest = percentage / 100;
  return totalCases * percentQuest;
};

export const availableHospitalBedsByRequestTime = (data, positiveCases) => {
  const availableHospitalBeds = data * 0.35;
  return availableHospitalBeds - positiveCases;
};

export const amountDollarsInFlight = (count, data, period) => (count
    * data.region.avgDailyIncomePopulation
    * data.region.avgDailyIncomeInUSD)
  / period;
