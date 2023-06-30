import { Request, Response, NextFunction } from 'express';
import { readFromFile } from '../utils/fileUsers';

export interface User {
    id: number,
    login: string,
    passwors: string
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await readFromFile();
      res.json(users);
    } catch (error) {
      next(error);
    }
  };