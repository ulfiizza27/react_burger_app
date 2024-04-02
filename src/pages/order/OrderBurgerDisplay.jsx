import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeIngredient } from '../../store/slices/burgerIngredients.slice';
import BreadBottom from "../../assets/img/bottom.jpg";
import BreadTop from "../../assets/img/top.jpg";

export default function OrderBurgerDisplay() {
  const dispatch = useDispatch();
  const selectedIngredients = useSelector(state => state.burgerIngredients.ingredients.filter(item => item.quantity > 0));

  const selectedItems = [];
  selectedIngredients.forEach((ingredient) => {
    for (let i = 0; i < ingredient.quantity; i++) {
      selectedItems.push(ingredient);
    }
  });

  const imageStyle = { maxWidth: '200px', maxHeight: '100px', margin: 'auto' };

  const [showRemoveButton, setShowRemoveButton] = useState(null);

  const removeIngredientHandler = (index) => {
    const itemId = selectedItems[index].id; // Mendapatkan ID item yang akan dihapus
    dispatch(removeIngredient({ id: itemId })); // Menghapus item dari redux store berdasarkan ID
  };

  return (
    <section className="container mx-auto flex justify-center mb-14">
      <div className="flex flex-col gap-1 items-center">
        <img src={BreadTop} alt="Top Bread" style={imageStyle} />
        {/* Tampilkan gambar sesuai dengan urutan pemilihan item */}
        {selectedItems.map((ingredient, idx) => (
          <div
            key={idx}
            className="relative"
            onMouseEnter={() => setShowRemoveButton(idx)}
            onMouseLeave={() => setShowRemoveButton(null)}
          >
            <img src={ingredient.imageUrl} alt={ingredient.name} style={imageStyle} />
            {showRemoveButton === idx && (
              <div
                onClick={() => removeIngredientHandler(idx)}
                className="absolute -top-1 -right-2 text-[8px] bg-red-500 rounded-full w-4 h-4 flex justify-center items-center text-white cursor-pointer opacity-80 hover:opacity-100 z-10"
              >
                X
              </div>
            )}
          </div>
        ))}
        <img src={BreadBottom} alt="Bottom Bread" style={imageStyle} />
      </div>
    </section>
  );
}
