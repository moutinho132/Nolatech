import { users } from '../../api/users';
import { IUserUpdate } from '../../interfaces/user.interface';
import { updateUser } from '../slices/user.slice';

import { AppDispatch } from '../store';

export const updateUserAsync = (id: string, userData: Partial<IUserUpdate>) => async (dispatch: AppDispatch) => {
  try {
    const response = await users.updateUser(id, userData); 
    dispatch(updateUser(response.data)); 
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
  }
};
