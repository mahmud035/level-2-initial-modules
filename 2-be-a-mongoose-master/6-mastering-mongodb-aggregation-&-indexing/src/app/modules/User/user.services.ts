import { IUser } from './user.interface';
import { User } from './user.model';

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne(
    { id: payload },
    { name: 1, email: 1, contactNo: 1 }
    // Field Filtering: find specific properties
  );
  return user;
};

export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  // creating a new user from User model
  const user = new User(payload);

  await user.save(); // save user to database
  return user; // return the user
};

// console.log(user.fullName()); // Here, fullName() is custom instance methods
// user.save(); // Here save() is a built-in instance method
