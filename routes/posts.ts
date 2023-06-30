import express, { Router } from 'express';

export const routerPosts: Router = express.Router();

/* GET users listing. */
routerPosts.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
