import xml from 'xml2js';
import fs from 'fs';
import path from 'path';
import DataModel from '../models/data';
import estimator from '../db/utils/estimator';

class DataController {
  static getAll(req, res) {
    const allData = DataModel.getAll();
    return res.status(200).json({
      allData
    });
  }

  static create(req, res) {
    const estimate = estimator(req.body);

    const { data, impact, severeImpact } = estimate;

    DataModel.create(estimate);

    return res.status(200).json({
      data,
      impact,
      severeImpact
    });
  }

  static createXml(req, res) {
    const estimate = estimator(req.body);

    const xmlBuilder = new xml.Builder();

    res.set('Content-Type', 'application/json');
    res.set('Content-Type', 'application/xml');
    return res.status(200).send(xmlBuilder.buildObject(estimate));
  }

  static getLogs(req, res) {
    const retrievedData = fs.readFileSync('request_logs.txt', 'utf8');
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(retrievedData);
  }

  static deleteLogs(req, res) {
    const filePath = path.join('request_logs.txt');
    fs.unlinkSync(filePath);
    res.status(201).send({
      message: 'Logs were successfully deleted'
    });
  }
}

export default DataController;
