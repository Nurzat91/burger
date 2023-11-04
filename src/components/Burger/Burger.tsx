import React, { useState } from 'react';
// import {Ingredients, Ingredient} from '../../components/Ingredients/Ingredients';

const Burger: React.FC<Props> = ({ingredients, addIngredient, removeIngredient, burgerIngredients, BurgerPrice}) => {

  // const btnDelete = (
  //   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
  //     <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
  //   </svg>
  // );

  return (
    <div className="BurgerApp">
      <div>
        <h2>Ingredients:</h2>
        {ingredients.map((ingredient) => (
          <div className="BurgersRight">
            <div
              key={ingredient.id}
              className="Ingredient"
              onClick={() => addIngredient(ingredient)}
            >
              <img src={ingredient.image} alt={ingredient.name} className="imgIngredients" />
              {ingredient.name}
              <span className="AmountOfIngredient">x{ingredients.find((i) => i.name === ingredient.name)?.count || 0}</span>
            </div>
            <span onClick={() => removeIngredient(ingredient.id)}>
              {btnDelete}
            </span>
          </div>
        ))}
      </div>
      <div className="BurgerLeft">
        <h2 className="totalName">Burger:</h2>
        <div className="Burger">
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
          {burgerIngredients.map((ingredient) => (
            <div key={ingredient.id} className={ingredient.name} onClick={() => removeIngredient(ingredient.id)}></div>
          ))}
          <div className="BreadBottom"></div>
        </div>
        <p>Цена бургера: {BurgerPrice()} сом</p>
      </div>
    </div>
  )
};
export default Burger;