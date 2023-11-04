import React from 'react';

interface BurgerProps {
  burgerIngredients: Ingredient[];
  onRemove: (id: number) => void;
}

const Burger: React.FC<BurgerProps> = ({ burgerIngredients, onRemove }) => {
  return (
    <div className="Burger">
        <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
        </div>
        {burgerIngredients.map((ingredient) => (
            <div key={ingredient.id} className={ingredient.name} onClick={() => onRemove(ingredient.id)}></div>
        ))}
        <div className="BreadBottom"></div>
    <p>Цена бургера: {BurgerPrice()} сом</p>
    </div>
  );
};

export default Burger;