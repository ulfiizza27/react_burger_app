import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        dispalyName: "",
        email: "",
        id: "",
        isActive: false
    }
  }
  
  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setUserData: (state, action) => {
        state.user = action.payload
      },
    },
  })

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;