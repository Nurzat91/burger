import { useState } from 'react';
import './App.css';
import meatImage from '../../assets/meat.png';
import cheeseImage from '../../assets/cheese.png';
import saladImage from '../../assets/salad.png';
import baconImage from '../../assets/bacon.png';

interface Ingredient {
  name: string;
  price: number;
  image: string;
}
const BASE_BURGER_PRICE = 30;

function App() {
  const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Bacon', price: 60, image: baconImage},
  ];

  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const [burgerIngredients, setBurgerIngredients] = useState<Ingredient[]>([]);

  const addIngredient = (ingredient: Ingredient) => {
    const newId = burgerIngredients.length + 1;
    const updatedBurgerIngredients = [...burgerIngredients, { ...ingredient, id: newId }];
    setBurgerIngredients(updatedBurgerIngredients);
    const updatedIngredients = ingredients.map((i) =>
      i.name === ingredient.name ? { ...i, count: i.count + 1 } : i
    );
    setIngredients(updatedIngredients);
  };


  const removeIngredient = (ingredientName: string) => {
    const removeBurgerIngredients = burgerIngredients.filter(
      (ingredient) => ingredient.name !== ingredientName
    );
    setBurgerIngredients(removeBurgerIngredients);

    const updatedIngredients = ingredients.map((i) =>
      i.name === ingredientName && i.count > 0 ? { ...i, count: i.count - 1 } : i
    );
    setIngredients(updatedIngredients);
  };
  const BurgerPrice = () => {
    const ingredientPrices = burgerIngredients.map((ingredient) => ingredient.price);
    const totalIngredientsPrice = ingredientPrices.reduce(
      (acc, price) => acc + price,
      0
    );
    return BASE_BURGER_PRICE + totalIngredientsPrice;
  };

  const btnDelete =  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
  </svg>

  return (
    <div className="BurgerApp">
      <div>
        <h2>Ingredients:</h2>
        {INGREDIENTS.map((ingredient) => (
          <div className="BurgersRight">
            <div
              className="Ingredient"
              key={ingredient.name}
              onClick={() => addIngredient(ingredient)}
            >
              <img src={ingredient.image} alt={ingredient.name} className="imgIngredients"/>
              {ingredient.name}
              <span className="AmountOfIngredient">x{ingredients.find((i) => i.name === ingredient.name)?.count || 0}</span>
            </div>
            <span onClick={() => removeIngredient(ingredient.name)}>
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
            <div className={ingredient.name}></div>
          ))}
          <div className="BreadBottom"></div>
        </div>
        <p>Цена бургера: {BurgerPrice()} сом</p>
      </div>
    </div>

  );
}

export default App
