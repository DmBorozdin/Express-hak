import { Request, Response, NextFunction } from 'express';

export interface User {
    id: number,
    login: string,
    passwors: string
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contacts = 'lalal'
      res.json(contacts);
    } catch (error) {
      next(error);
    }
  };