import { useState } from 'react';
import meatImage from '../../assets/meat.png';
import cheeseImage from '../../assets/cheese.png';
import saladImage from '../../assets/salad.png';
import baconImage from '../../assets/bacon.png';
import btnDelete from '../../assets/btnDelete.svg';
import './App.css';

interface Ingredient {
  id: number;
  name: string;
  price: number;
  image: string;
}

const BASE_BURGER_PRICE = 30;

function App() {
  const INGREDIENTS: Ingredient[] = [
    { id: 1, name: 'Meat', price: 80, image: meatImage },
    { id: 2, name: 'Cheese', price: 50, image: cheeseImage },
    { id: 3, name: 'Salad', price: 10, image: saladImage },
    { id: 4, name: 'Bacon', price: 60, image: baconImage },
  ];

  const [ingredients, setIngredients] = useState([
    { name: 'Meat', count: 0 },
    { name: 'Cheese', count: 0 },
    { name: 'Salad', count: 0 },
    { name: 'Bacon', count: 0 },
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

  const removeIngredient = (id: number) => {
    setBurgerIngredients((prevState) => {
      return prevState.filter((ingredient) => ingredient.id !== id);
    });

    const ingredient = INGREDIENTS.find((i) => i.id === id);
    if (ingredient) {
      const updatedIngredients = ingredients.map((i) =>
        i.name === ingredient.name && i.count > 0 ? { ...i, count: i.count - 1 } : i
      );
      setIngredients(updatedIngredients);
    }
  };

  const BurgerPrice = () => {
    const ingredientPrices = burgerIngredients.map((ingredient) => ingredient.price);
    const totalIngredientsPrice = ingredientPrices.reduce((acc, price) => acc + price, 0);
    return BASE_BURGER_PRICE + totalIngredientsPrice;
  };


  return (
    <div className="BurgerApp">
      <div>
        <h2>Ingredients:</h2>
        {INGREDIENTS.map((ingredient) => (
          <div className="BurgersRight" key={ingredient.id}>
            <div
              className="Ingredient"
              onClick={() => addIngredient(ingredient)}
            >
              <img src={ingredient.image} alt={ingredient.name} className="imgIngredients" />
              {ingredient.name}
              <span className="AmountOfIngredient">x{ingredients.find((i) => i.name === ingredient.name)?.count || 0}</span>
            </div>
            <span onClick={() => removeIngredient(ingredient.id)}>
              <img src={btnDelete} alt="btnDelete" />
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
  );
}

export default App;
