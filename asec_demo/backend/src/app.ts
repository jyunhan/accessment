import { RequestHandler, NextFunction, Response, Request } from 'express';
import cors from 'cors';
import { expressjwt } from 'express-jwt';

import indexRouter from './controllers';
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const JWT_SECRET = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

const app = express();

app.use(cors(), express.json(), expressjwt({
  algorithms: ['HS256'],
  credentialsRequired: false,
  secret: JWT_SECRET,
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', async (req: Request, res: Response) => {
  console.log('login');
//   const { email, password } = req.body;
//   const user = await db.select().from('users').where('email', email).first();
//   if (user && user.password === password) {
//     const token = jwt.sign({ sub: user.id }, JWT_SECRET);
//     res.json({ token });  
//   } else {
//     res.sendStatus(401);
//   }
  return res.send('login')
});

app.use('/api', indexRouter);

// app.use(function(req: Request, res: Response, next: NextFunction) {
//   return res.send('404 not found')
// });

// error handler
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
