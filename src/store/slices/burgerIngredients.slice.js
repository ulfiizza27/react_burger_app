import { createSlice } from '@reduxjs/toolkit';
import cheese from "../../assets/img/cheese.png";
import lettuce from "../../assets/img/lettuce.png";
import tomato from "../../assets/img/tomato.jpg";
import meat from "../../assets/img/meat.jpg";
import pickles from "../../assets/img/pickles.png";
import mayo from "../../assets/img/mayo.png";
import sauce from "../../assets/img/sauce.png";

const initialState = {
    ingredients: [
        {
            id: "cheese",
            name: "Cheese",
            price: 5000,
            quantity: 0,
            imageUrl: cheese,
        },
        {
            id: "lettuce",
            name: "Lettuce",
            price: 1000,
            quantity: 0,
            imageUrl: lettuce,
        },
        {
            id: "tomato",
            name: "Tomato",
            price: 2500,
            quantity: 0,
            imageUrl: tomato,
        },
        {
            id: "pickles",
            name: "Pickles",
            price: 2000,
            quantity: 0,
            imageUrl: pickles,
        },
        {
            id: "meat",
            name: "Meat",
            price: 14000,
            quantity: 0,
            imageUrl: meat,
        },
        {
            id: "mayo",
            name: "Mayo",
            price: 4000,
            quantity: 0,
            imageUrl: mayo,
        },
        {
            id: "sauce",
            name: "Sauce",
            price: 4000,
            quantity: 0,
            imageUrl: sauce,
        },
    ],
}

export const burgerIngredientsSlice = createSlice({
  name: 'burgerIngredients',
  initialState,
  reducers: {
    addIngredient: (state, action) => {
      const { id } = action.payload;
      const ingredient = state.ingredients.find(item => item.id === id);
      if (ingredient) {
        ingredient.quantity++;
      }
    },
    removeIngredient: (state, action) => {
      const { id } = action.payload;
      const ingredient = state.ingredients.find(item => item.id === id);
      if (ingredient && ingredient.quantity > 0) {
        ingredient.quantity--;
      }
    },
    resetIngredients: (state) => {
      state.ingredients.forEach(ingredient => {
        ingredient.quantity = 0;
      });
    },
  },
});

export const { addIngredient, removeIngredient, resetIngredients } = burgerIngredientsSlice.actions;
export default burgerIngredientsSlice.reducer;
