import records from '../db/data';

class DataModel {
  static getAll() {
    return records;
  }

  static create(dataInput) {
    const { impact, severeImpact } = dataInput;
    const {
      region,
      periodType,
      timeToElapse,
      reportedCases,
      population,
      totalHospitalBeds
    } = dataInput.data;
    const newDataInput = {
      region,
      periodType,
      timeToElapse,
      reportedCases,
      population,
      totalHospitalBeds,
      impact,
      severeImpact
    };

    records.push(newDataInput);
    return newDataInput;
  }
}

export default DataModel;
