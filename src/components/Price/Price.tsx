import React from 'react';

interface PriceProps {
  burgerIngredients: Ingredient[];
}

const Price: React.FC<PriceProps> = ({ burgerIngredients }) => {
  // Рассчет общей цены
  const totalIngredientsPrice = burgerIngredients.reduce((acc, ingredient) => acc + ingredient.price, 0);
  const totalPrice = BASE_BURGER_PRICE + totalIngredientsPrice;

  return <p>Цена бургера: {totalPrice} сом</p>;
};

export default Price;