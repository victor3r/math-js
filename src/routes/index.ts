import { Router } from 'express';

import numbersRouter from './numbers.routes';

const routes = Router();

routes.use('/numbers', numbersRouter);

export default routes;
