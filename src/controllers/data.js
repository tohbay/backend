import records from '../db/data';
import DataModel from '../models/data';
import estimator from '../db/utils/estimator'
import { inputData } from '../db/utils/constants'

class DataController {
  static getAll(req, res) {
    const allData = DataModel.getAll();
    return res.status(200).json({
      data: allData
    });
    // return data;
  }

  static create(req, res) {
    const {
      periodTypeData,
      timeToElapseData,
      reportedCasesData,
      populationData,
      totalHospitalBedsData
    } = req.body;

    if (
      !periodTypeData ||
      !timeToElapseData ||
      !reportedCasesData ||
      !populationData ||
      !totalHospitalBedsData
    ) {
      return res.status(400).json({
        error: 'All fields are required'
      });
    }

  
      inputData.periodType = periodTypeData;
      inputData.timeToElapse = timeToElapseData;
      inputData.reportedCases = reportedCasesData;
      inputData.population = populationData;
      inputData.totalHospitalBeds = totalHospitalBedsData;

      const estimate = estimator(inputData)

      const { region, periodType,
        timeToElapse,
        reportedCases,
        population,
        totalHospitalBeds, impact, severeImpact } = estimate 

    DataModel.create(estimate);

    return res.status(201).json({
      data: estimate
    });
  }
}

export default DataController;
