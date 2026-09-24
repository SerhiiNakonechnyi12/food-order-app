import { useContext } from 'react';

import { currencyFormatter } from '../util/formatting.ts';
import Button from './UI/Button.tsx';
import CartContext from '../store/CartContext.tsx';
import { type Meal } from './Meals.tsx';

type MealItemProps = {
  meal: Meal;
};

export default function MealItem({ meal }: MealItemProps) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
