import React, { useState, useEffect } from "react";
import { formatNumber } from "../../utils/helper";
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient } from '../../store/slices/burgerIngredients.slice';

export default function OrderIngredientsPicker() {
  const dispatch = useDispatch();
  const allIngredients = useSelector(state => state.burgerIngredients.ingredients);

  // State untuk menyimpan item yang dipilih
  const [selectedItems, setSelectedItems] = useState([]);

  // Efek untuk memantau perubahan pada jumlah item yang dipilih
  useEffect(() => {
    if (selectedItems.length >= 10) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [selectedItems]);

  // State untuk menentukan apakah tombol aktif atau tidak
  const [disabled, setDisabled] = useState(false);

  // Handler untuk menambah item yang dipilih
  const handleIngredientClick = (itemId) => {
    const ingredient = allIngredients.find(item => item.id === itemId);
    if (!disabled && ingredient && ingredient.quantity < 3) {
      // Menambah item yang dipilih ke state
      setSelectedItems([...selectedItems, itemId]);
      // Dispatch action untuk menambah item ke redux store
      dispatch(addIngredient({ id: itemId }));
    }
  };

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-4 gap-8 max-w-sm w-full mx-auto">
        {allIngredients.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center cursor-pointer hover:scale-[0.95] active:opacity-80 bg-amber-300 rounded-md p-2 ${disabled ? 'bg-gray-400 cursor-not-allowed' : ''}`}
            onClick={() => handleIngredientClick(item.id)}
            disabled={disabled}
          >
            <p className="font-bold">{item.name}</p>
            <p className="text-sm">Rp{formatNumber(item.price)}</p>
            <p className="text-xs">Jumlah: {item.quantity || 0}</p>
          </div>
        ))}
      </div>
    </section>
  );
}