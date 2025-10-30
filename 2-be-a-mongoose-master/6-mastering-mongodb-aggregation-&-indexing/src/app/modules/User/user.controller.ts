import { NextFunction, Request, Response } from 'express';
import {
  createUserToDB,
  getAdminUsersFromDB,
  getUserByIdFromDB,
  getUsersFromDB,
} from './user.services';

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUsersFromDB();

  res.status(200).send({
    success: true,
    message: 'Users found successfully',
    data: users,
  });
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);
  // console.log('hit from getUserById', id);

  res.send({
    success: true,
    message: 'Found the user',
    data: user,
  });
};

export const getAdminUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log('hit from getAdminUsers');
  const admins = await getAdminUsersFromDB();

  res.send({
    success: true,
    message: 'Found Admin users',
    data: admins,
  });
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  const user = await createUserToDB(data);

  res.status(200).send({
    success: true,
    message: 'User created successfully',
    data: user,
  });
};
