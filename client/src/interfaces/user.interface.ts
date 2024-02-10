export interface IUser {
  id?: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}
export interface IUserUpdate {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  password?: string;
}
