import React from 'react';
import btnDelete from "../../assets/btnDelete.svg";

interface IngredientProps {
  ingredient: Ingredient;
  onAdd: () => void;
  onRemove: () => void;
  ingredients: () => void;
}

const IngredientItem: React.FC<IngredientProps> = ({ ingredient, onAdd, onRemove, ingredients }) => {
  return (
    <>
        <div key={ingredient.id} className="Ingredient" onClick={() => onAdd(ingredient)}>
            <img src={ingredient.image} alt={ingredient.name} className="imgIngredients" />
            {ingredient.name}
            <span className="AmountOfIngredient">x{ingredients.find((i) => i.name === ingredient.name)?.count || 0}</span>
        </div>
        <span onClick={() => onRemove(ingredient.id)}>
            <img src={btnDelete} alt="btnDelete" />
        </span>
    </>
  );
};

export default IngredientItem;