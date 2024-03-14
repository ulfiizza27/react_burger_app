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
  },
  {
    id: "lettuce",
    name: "Lettuce",
    price: 1000,
  },
  {
    id: "tomato",
    name: "Tomato",
    price: 2500,
  },
  {
    id: "pickles",
    name: "Pickles",
    price: 2000,
  },
  {
    id: "meat",
    name: "Meat",
    price: 14000,
  },
  {
    id: "mayo",
    name: "Mayo",
    price: 4000,
  },
  {
    id: "sauce",
    name: "Sauce",
    price: 4000,
  },
];

export default function OrderPage() {
  const [selectedIngredients, selectedIngredientsSet] = useState([]);
  const [isReachMax, isReachMaxSet] = useState(false);
  const [isDone, isDoneSet] = useState(false);

  const {search} = useLocation()
  


  function manageIngredients(type, id, idx) {
    if (type === "add") {      
      selectedIngredientsSet((prev) => [...prev, id]);
    }
    if (type === "remove") {
      selectedIngredientsSet((prev) => {
        const filtered = [...prev].filter((_, index) => index !== idx);
        return filtered;
      });
    }
  }

  useEffect(() => {
    if(selectedIngredients.length >= 10) {
      isReachMaxSet(true);
    }
  },[selectedIngredients])

  useEffect(() => {
    if(new URLSearchParams(search).get("done") === "true") {
      isDoneSet(true);
    }
  },[search])

  if(isDone) return (
    <div>
      <h1>Your order has been received</h1>
      <Link to="/">Back to home</Link>
    </div>
  )

  return (
    <section>
      <OrderHeader
        allIngredients={allIngredients}
        selectedIngredients={selectedIngredients}
        onReset={() => selectedIngredientsSet([])}
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