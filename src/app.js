import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import dataRoutes from './routes/data';
import appLogger from './db/utils/applogger';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(appLogger);

app.use('/', dataRoutes);

app.get('/api/v1/on-covid-19', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Covid-19 Estimator from Tobe'
  });
});

app.get('/api/v1/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Covid-19 Estimator from Tobe'
  });
});

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Covid-19 Estimator from Tobe'
  });
});

export default app;
