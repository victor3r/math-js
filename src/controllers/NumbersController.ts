import { Request, Response } from 'express';
import Numbers from '../entities/Numbers';
import parseStringAsArray from '../utils/parseStringAsArray';

export default {
  sum(request: Request, response: Response): Response {
    const { numbers } = request.body;

    const numbersArray = parseStringAsArray(numbers);

    const sum = Numbers.sum(numbersArray);

    return response.json({ sum });
  },

  average(request: Request, response: Response): Response {
    const { numbers } = request.body;

    const numbersArray = parseStringAsArray(numbers);

    const average = Numbers.average(numbersArray);

    return response.json({ average });
  },
};
