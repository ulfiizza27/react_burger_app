import { useEffect, useState } from "react";
import OrderBurgerDisplay from "./OrderBurgerDisplay";
import OrderHeader from "./OrderHeader";
import OrderIngredientsPicker from "./OrderIngredientsPicker";
import { Link, useLocation, useRoutes } from "react-router-dom";

const allIngredients = [
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
];

export default function OrderPage() {
  const [selectedIngredients, selectedIngredientsSet] = useState([]);
  const [isReachMax, isReachMaxSet] = useState(false);
  const [isDone, isDoneSet] = useState(false);

  const { search } = useLocation();

  function manageIngredients(type, id, idx) {
    if (type === "add") {
      const ingredientIndex = allIngredients.findIndex((item) => item.id === id);
      const updatedIngredients = [...allIngredients];
      updatedIngredients[ingredientIndex].quantity += 1;
      selectedIngredientsSet((prev) => [...prev, id]);
      return updatedIngredients;
    }
    if (type === "remove") {
      selectedIngredientsSet((prev) => {
        const filtered = [...prev].filter((_, index) => index !== idx);
        const updatedIngredients = [...allIngredients];
        const ingredientId = prev[idx];
        const ingredientIndex = updatedIngredients.findIndex((item) => item.id === ingredientId);
        
        // Memastikan quantity tidak kurang dari 0
        if (updatedIngredients[ingredientIndex].quantity > 0) {
          updatedIngredients[ingredientIndex].quantity -= 1;
        }
        
        return filtered;
      });
      return allIngredients;
    }
    
  }
  

  useEffect(() => {
    if (selectedIngredients.length >= 10) {
      isReachMaxSet(true);
    }
  }, [selectedIngredients]);

  useEffect(() => {
    if (new URLSearchParams(search).get("done") === "true") {
      isDoneSet(true);
    }
  }, [search]);

  if (isDone)
    return (
      <div>
        <h1>Your order has been received</h1>
        <Link to="/">Back to home</Link>
      </div>
    );

  return (
    <section>
      <OrderHeader
        allIngredients={allIngredients}
        selectedIngredients={selectedIngredients}
        onReset={() => {
          selectedIngredientsSet([]);
          // Reset quantities
          allIngredients.forEach((item) => {
            item.quantity = 0;
          });
          isReachMaxSet(false);
        }}        
      />
      <OrderBurgerDisplay
        selectedIngredients={selectedIngredients}
        removeIngredient={(idx) => manageIngredients("remove", undefined, idx)}
      />
      <OrderIngredientsPicker
        allIngredients={allIngredients}
        manageIngredients={(id) => manageIngredients("add", id)}
        isReachMax={isReachMax}
      />
    </section>
  );
}