import {useState} from 'react';
import {useDishes} from '../hooks/apiHooks';
import Dish from '../components/Dish';

const Dishes = () => {
  const {dishesArray} = useDishes();
  const today = String(new Date()).slice(0, 3).toLowerCase();
  console.log(dishesArray);
  console.log(today);
  return (
    <>
      <h1>Available Dishes</h1>
      <div className="flex">
        {dishesArray.map((dish) => (
          <Dish key={dish.dish_id} dish={dish} />
        ))}
      </div>
    </>
  );
};

export default Dishes;
