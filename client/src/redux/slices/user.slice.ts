import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser, IUserUpdate } from '../../interfaces/user.interface'


interface UserState {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
  }
  
  const initialState: UserState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  };

 const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        ...action.payload
      };
    },
    updateUser: (state, action: PayloadAction<Partial<IUserUpdate>>) => {
      return {
          ...state,
          ...action.payload
      };
  }
  }
});

export const { createUser, updateUser } = userSlice.actions;
export default userSlice.reducer;

