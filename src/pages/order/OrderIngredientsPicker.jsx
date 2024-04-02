import { useState } from "react";
import { formatNumber } from "../../utils/helper";

export default function OrderIngredientsPicker({
  allIngredients = [],
  manageIngredients,
  isReachMax,
}) {
  const [selectedIngredients, setSelectedIngredients] = useState({});

  const handleIngredientClick = (itemId) => {
    if (isReachMax || selectedIngredients[itemId] > 3) return;
    manageIngredients(itemId);
    setSelectedIngredients((prevState) => ({
      ...prevState,
      [itemId]: (prevState[itemId] || 0) + 1,
    }));
  };

  const disabledStyle = `bg-gray-400`;

  return (
    <section className="container mx-auto">
      {isReachMax && (
        <p className="text-center">You've reached the maximum quantity of ingredients</p>
      )}
      <div className="grid grid-cols-4 gap-8 max-w-sm w-full mx-auto">
        {allIngredients.map((item) => (
          <div
            key={item?.id}
            className={`flex flex-col items-center cursor-pointer hover:scale-[0.95] active:opacity-80 bg-amber-300 rounded-md p-2 ${
              isReachMax && disabledStyle
            }`}
            onClick={() => handleIngredientClick(item?.id)}
          >
            <p className="font-bold">{item?.name}</p>
            <p className="text-sm">Rp{formatNumber(item?.price)}</p>
            <p className="text-xs">Jumlah: {item?.quantity || 0}</p>
          </div>
        ))}
      </div>
    </section>
  );
}