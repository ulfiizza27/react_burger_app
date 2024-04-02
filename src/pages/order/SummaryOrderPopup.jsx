import React from "react";
import { formatNumber } from "../../utils/helper";

const SummaryOrderPopup = ({ selectedIngredients, allIngredients, onClose }) => {
  // Fungsi untuk menghitung total harga per item
  const calculateItemTotal = (id, quantity) => {
    const ingredient = allIngredients.find((item) => item.id === id);
    return ingredient.price * quantity;
  };

  // Fungsi untuk menghitung total harga keseluruhan
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedIngredients.forEach((id) => {
      const ingredient = allIngredients.find((item) => item.id === id);
      totalPrice += calculateItemTotal(id, ingredient.quantity);
    });
    return totalPrice;
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Summary Order</h2>
        {selectedIngredients.map((id) => (
          <div key={id} className="flex justify-between mb-2">
            <p>{allIngredients.find((item) => item.id === id)?.name}</p>
            <p>
              Rp{formatNumber(allIngredients.find((item) => item.id === id)?.price)} x{" "}
              {allIngredients.find((item) => item.id === id)?.quantity} = Rp
              {formatNumber(calculateItemTotal(id, allIngredients.find((item) => item.id === id)?.quantity))}
            </p>
          </div>
        ))}
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="font-bold">Total:</p>
          <p className="font-bold">
            Rp{formatNumber(calculateTotalPrice())}
          </p>
        </div>
        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 mt-4 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SummaryOrderPopup;