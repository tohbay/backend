# Covid-19 Estimator API
A novelty COVID-19 infections estimator


### Technologies Used
* JavaScript ES6 for DOM Manipulations
* Nodejs: an open source server framework that allows you to run JavaScript on the server.
* Express: open source server-side framework for starting out Javascript server quickly on the fly.


### Link to github
https://github.com/tobechukwuobitube/backend


### Live Link
https://murmuring-beach.herokuapp.com/


### Available Feature Endpoints

| Feature Endpoints                 |   Description                                                         |
|-----------------------------------|-----------------------------------------------------------------------|
| POST /api/v1/on-covid-19          | Compute Impact and Severe Impact Data based on Input Data             |
| POST /api/v1/on-covid-19/json     | Return Computed Impact and Severe Impact Response Data in JSON format |
| POST /api/v1/on-covid-19/xml      | Return Computed Impact and Severe Impact Response Data in XML format  |
| GET /api/v1/on-covid-19/all       | Get all Computed Impact and Severe Impact Data in JSON format         |
| GET /api/v1/on-covid-19/logs      | Get logs of all request to Covid-19 Estimator API                     |
| DELETE /api/v1/on-covid-19/logs   | Delete logs of all request to Covid-19 Estimator API                  |



## API Request and Response Data

#### Input
```
{
  region: {
  name: "Africa",
  avgAge: 19.7,
  avgDailyIncomeInUSD: 5,
  avgDailyIncomePopulation: 0.71
  },
  periodType: "days",
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
}
```


#### Response Output (JSON)
```
{
  data: {}, // the input data you got
  impact: {}, // your best case estimation
  severeImpact: {} // your severe case estimation
}
```


#### Response Output (XML)
```
<root>
    <data>
      ...inputData
    </data>
    <impact>
      ...responseData
    </impact>
    <severeImpact>
      ...responseData
    </severeImpact>
</root>
```


#### Sample Response in JSON
```
{
    "data": {
        "region": {
            "name": "Africa",
            "avgAge": 19.7,
            "avgDailyIncomeInUSD": 5,
            "avgDailyIncomePopulation": 0.71
        },
        "periodType": "days",
        "timeToElapse": 58,
        "reportedCases": 674,
        "population": 66622705,
        "totalHospitalBeds": 1380614
    },
    "impact": {
        "currentlyInfected": 6740,
        "infectionsByRequestedTime": 3533701120,
        "severeCasesByRequestedTime": 530055168,
        "hospitalBedsByRequestedTime": -529571953,
        "casesForICUByRequestedTime": 176685056,
        "casesForVentilatorsByRequestedTime": 70674022,
        "dollarsInFlight": 216286878
    },
    "severeImpact": {
        "currentlyInfected": 33700,
        "infectionsByRequestedTime": 17668505600,
        "severeCasesByRequestedTime": 2650275840,
        "hospitalBedsByRequestedTime": -2649792625,
        "casesForICUByRequestedTime": 883425280,
        "casesForVentilatorsByRequestedTime": 353370112,
        "dollarsInFlight": 1081434394
    }
}
```
