import React from 'react';
import IngredientItem from '../../components/Ingredients/Ingredients'

interface IngredientListProps {
  ingredients: Ingredient[];
  onAdd: (ingredient: Ingredient) => void;
  onRemove: (id: number) => void;
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients, onAdd, onRemove }) => {
  return (
    <div>
      <h2>Ingredients:</h2>
      {ingredients.map((ingredient) => (
        <IngredientItem key={ingredient.id} ingredient={ingredient} onAdd={() => onAdd(ingredient)} onRemove={() => onRemove(ingredient.id)} />
      ))}
    </div>
  );
};

export default IngredientList;