import React, { useState } from 'react';
import {Ingredients, Ingredient} from '../../components/Ingredients/Ingredients';

const BURGER_PRICE = 30;
const Burger: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);


  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      <div className="Salad"></div>
      <div className="Cheese"></div>
      <div className="Meat"></div>
      <div className="BreadBottom"></div>
    </div>
  )
};
export default Burger;