import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import burgerIngredientsReducer from './slices/burgerIngredients.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    burgerIngredients: burgerIngredientsReducer,
  },
});