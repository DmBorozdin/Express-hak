import express, { Router } from 'express';
import { getUsers } from '../controllers/usersController'

export const routerUsers: Router = express.Router();

/* GET users listing. */
routerUsers.get('/', getUsers);

