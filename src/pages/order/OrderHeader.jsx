import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { formatNumber } from "../../utils/helper";

export default function OrderHeader({
  allIngredients = [],
  selectedIngredients = [],
  onReset,
}) {
  const isEmptySelectedIngredients = selectedIngredients.length === 0;

  const totalCost = () => {
    const filterBySelectedIngredients = selectedIngredients.map(
      (id) => allIngredients.find((item) => item?.id === id)?.price
    );
    return `Rp${formatNumber(
      filterBySelectedIngredients.reduce((a, b) => a + b)
    )}`;
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
          <Link to="/order?done=true" className="w-full">
            <Button disabled={isEmptySelectedIngredients}>Order Burger</Button>
          </Link>
          {!isEmptySelectedIngredients && (
            <Button variant="secondary" onClick={onReset} className="px-8">
              Reset
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}