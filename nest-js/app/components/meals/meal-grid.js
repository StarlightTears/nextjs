import React from "react";
import MealItem from "./meal-item";
import classese from "./meals-grid.module.css";
const MealsGrid = ({ meals }) => {
  return (
    <ul className={classese.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal}  />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
