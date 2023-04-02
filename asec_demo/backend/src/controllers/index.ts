import { NextFunction, Response, Request } from 'express';
import express from 'express';

const router = express.Router();

router.get('/', async function(req: Request, res: Response, next: NextFunction) {
  return res.send('This is a way to adopt tranditional restful service.');
});

export default router;
