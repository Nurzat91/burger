import { useState } from 'react';
import meatImage from '../../assets/meat.png';
import cheeseImage from '../../assets/cheese.png';
import saladImage from '../../assets/salad.png';
import baconImage from '../../assets/bacon.png';
import Burger from '../../components/Burger/Burger';
import './App.css';

interface Ingredient {
  name: string;
  price: number;
  image: string;
}
function App() {

  const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Bacon', price: 60, image: baconImage},
  ];
  const [ingredients, setIngredientst] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  return (
    <div>
      {/*<div>*/}
      {/*  /!*<a href="#" target="_blank">*!/*/}
      {/*  /!*  <img src={cheeseImage} className="logo" alt="Vite logo" />*!/*/}
      {/*  /!*</a>*!/*/}
      {/*</div>*/}
      <div></div>
      <div>
        <Burger/>
      </div>
    </div>
  )
}

export default App
