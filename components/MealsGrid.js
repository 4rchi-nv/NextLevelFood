import MealItem from "./MealItem";
import classes from './MealsGrid.module.css';

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => {
        console.log(meal);
        return (
          <li key={meal.id}>
            <MealItem meal={meal} />
          </li>
        );
      })}
    </ul>
  );
}
