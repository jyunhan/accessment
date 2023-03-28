import { NextFunction, Response, Request } from 'express';
import express from 'express';
import questionService from '../services/question';

const router = express.Router();

router.post('/question', async function(req: Request, res: Response, next: NextFunction) {
  // TODO: Use JoI if we want to detect object schema without typescript's type-validation.
  const { body } = req;
  await questionService.create(body);
  return res.send('done');
});

module.exports = router;