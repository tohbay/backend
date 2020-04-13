import { Router } from 'express';
import DataController from '../controllers/data';

const router = Router();

router.post('/api/v1/on-covid-19', DataController.create);
router.post('/api/v1/on-covid-19/json', DataController.create);
router.post('/api/v1/on-covid-19/xml', DataController.createXml);
router.get('/api/v1/on-covid-19/all', DataController.getAll);
router.get('/api/v1/on-covid-19/logs', DataController.getLogs);
router.delete('/api/v1/on-covid-19/logs', DataController.deleteLogs);

export default router;
