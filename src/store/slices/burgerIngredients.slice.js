import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ingredients: [
        {
            id: "cheese",
            name: "Cheese",
            price: 5000,
            quantity: 0,
        },
        {
            id: "lettuce",
            name: "Lettuce",
            price: 1000,
            quantity: 0,
        },
        {
            id: "tomato",
            name: "Tomato",
            price: 2500,
            quantity: 0,
        },
        {
            id: "pickles",
            name: "Pickles",
            price: 2000,
            quantity: 0,
        },
        {
            id: "meat",
            name: "Meat",
            price: 14000,
            quantity: 0,
        },
        {
            id: "mayo",
            name: "Mayo",
            price: 4000,
            quantity: 0,
        },
        {
            id: "sauce",
            name: "Sauce",
            price: 4000,
            quantity: 0,
        },
    ],
}

export const burgerIngredientsSlice = createSlice({
    name: 'burgerIngredients',
    initialState,
    reducers: {
        incrementQuantity: (state, action) => {
            const { id } = action.payload;
            const ingredient = state.ingredients.find(item => item.id === id);
            if (ingredient) {
                ingredient.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const { id } = action.payload;
            const ingredient = state.ingredients.find(item => item.id === id);
            if (ingredient && ingredient.quantity > 0) {
                ingredient.quantity--;
            }
        },
    },
});

export const { incrementQuantity, decrementQuantity } = burgerIngredientsSlice.actions;
export default burgerIngredientsSlice.reducer;