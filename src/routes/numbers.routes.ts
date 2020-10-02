import { Router } from 'express';

import NumbersController from '../controllers/NumbersController';

const numbersRouter = Router();

numbersRouter.post('/sum', NumbersController.sum);
numbersRouter.post('/average', NumbersController.average);

export default numbersRouter;
