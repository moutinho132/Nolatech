import { users } from '../../api/users';
import { IUser } from '../../interfaces/user.interface';
import { createUser } from '../slices/user.slice';
import { AppDispatch } from '../store';

export const createUserAsync = (userData: IUser) => async (dispatch: AppDispatch) => {
  try {
    const response = await users.createUser(userData);
    dispatch(createUser(response.data));
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error al crear usuario:', error);
  }
};
