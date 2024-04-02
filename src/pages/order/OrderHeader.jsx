import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { formatNumber } from "../../utils/helper";
import SummaryOrderPopup from "./SummaryOrderPopup";

export default function OrderHeader({
  allIngredients = [],
  selectedIngredients = [],
  onReset,
}) {
  const isEmptySelectedIngredients = selectedIngredients.length === 0;
  const [showSummary, setShowSummary] = useState(false);

  const totalCost = () => {
    const filterBySelectedIngredients = selectedIngredients.map(
      (id) => allIngredients.find((item) => item?.id === id)?.price
    );
    return `Rp${formatNumber(
      filterBySelectedIngredients.reduce((a, b) => a + b, 0)
    )}`;
  };

  const handleOrderClick = () => {
    if (!isEmptySelectedIngredients) {
      setShowSummary(true);
    }
  };

  const handleCloseSummary = () => {
    setShowSummary(false);
  };

  return (
    <section className="container mx-auto py-14">
      <div className="flex justify-between items-center">
        {!isEmptySelectedIngredients && (
          <div>
            <h3 className="text-3xl font-bold">Total: {totalCost()}</h3>
          </div>
        )}
        <div className="flex items-center gap-4 max-w-sm w-full">
          <Button disabled={isEmptySelectedIngredients} onClick={handleOrderClick}>
            Order Burger
          </Button>
          {!isEmptySelectedIngredients && (
            <Button variant="secondary" onClick={onReset} className="px-8">
              Reset
            </Button>
          )}
        </div>
      </div>
      {showSummary && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Summary Order</h2>
            <ul>
              {selectedIngredients.map((id) => (
                <li key={id}>
                  {allIngredients.find((item) => item.id === id)?.name}: Rp{formatNumber(allIngredients.find((item) => item.id === id)?.price)} x {allIngredients.find((item) => item.id === id)?.quantity} = Rp{formatNumber(allIngredients.find((item) => item.id === id)?.price * allIngredients.find((item) => item.id === id)?.quantity)}
                </li>
              ))}
            </ul>
            <p className="font-bold mt-4">Total: {totalCost()}</p>
            <button onClick={handleCloseSummary} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}