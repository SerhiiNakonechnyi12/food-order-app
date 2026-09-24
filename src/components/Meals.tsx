import MealItem from './MealItem.tsx';
import useHttp from '../hooks/useHttp.ts';
import Error from './Error.tsx';

type MealFromAPI = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
};

export type Meal = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp(
    'http://localhost:3000/meals',
    requestConfig,
    [] as MealFromAPI[],
  );

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  const meals = loadedMeals.map((meal) => ({
    ...meal,
    price: Number(meal.price),
  }));

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
