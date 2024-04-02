import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient, removeIngredient, resetIngredients } from '../../store/slices/burgerIngredients.slice';
import OrderHeader from "./OrderHeader";
import OrderBurgerDisplay from "./OrderBurgerDisplay";
import OrderIngredientsPicker from "./OrderIngredientsPicker";
import SummaryOrderPopup from "./SummaryOrderPopup";

export default function OrderPage() {
  const dispatch = useDispatch();
  const allIngredients = useSelector(state => state.burgerIngredients.ingredients);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [isReachMax, setIsReachMax] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const { search } = useLocation();

  useEffect(() => {
    if (selectedIngredients.length >= 10) {
      setIsReachMax(true);
    } else {
      setIsReachMax(false);
    }
  }, [selectedIngredients]);

  useEffect(() => {
    if (new URLSearchParams(search).get("done") === "true") {
      setIsDone(true);
    }
  }, [search]);

  const manageIngredients = (type, id, idx) => {
    if (type === "add") {
      dispatch(addIngredient({ id }));
      setSelectedIngredients(prevIngredients => [...prevIngredients, id]);
    }
    if (type === "remove") {
      dispatch(removeIngredient({ id }));
      setSelectedIngredients(prevIngredients => {
        const updatedIngredients = [...prevIngredients];
        const index = updatedIngredients.indexOf(id);
        if (index !== -1) {
          updatedIngredients.splice(index, 1);
        }
        return updatedIngredients;
      });
    }
  };

  const resetOrder = () => {
    setSelectedIngredients([]);
    dispatch(resetIngredients());
    setIsReachMax(false);
  };

  const showSummaryOrder = () => {
    setShowSummary(true);
  };

  const hideSummaryOrder = () => {
    setShowSummary(false);
  };

  if (isDone) {
    return (
      <div>
        <h1>Pesanan Anda telah diterima</h1>
        <Link to="/">Kembali ke halaman utama</Link>
      </div>
    );
  }

  return (
    <section>
      <OrderHeader
        allIngredients={allIngredients}
        selectedIngredients={selectedIngredients}
        onReset={resetOrder}
        onOrder={showSummaryOrder}
      />
      <OrderBurgerDisplay
        selectedIngredients={selectedIngredients}
        removeIngredient={manageIngredients}
      />
      <OrderIngredientsPicker
        allIngredients={allIngredients}
        manageIngredients={manageIngredients}
        isReachMax={isReachMax}
      />
      {showSummary && (
        <SummaryOrderPopup
          selectedIngredients={selectedIngredients}
          allIngredients={allIngredients}
          onClose={hideSummaryOrder}
        />
      )}
    </section>
  );
}