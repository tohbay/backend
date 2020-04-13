import { Router } from 'express';
import DataController from '../controllers/data';

const router = Router();

router.post('/', DataController.create);
router.get('/all', DataController.getAll);

export default router;
