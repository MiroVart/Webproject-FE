const Dish = ({dish}) => {
  // console.log(dish);
  return (
    <div className="p-4">
      <h1>{dish.dish_name_en}</h1>
      <p>Description: {dish.description_en}</p>
      <p>Calories: {dish.calories}</p>
      <p>Carbs: {dish.carbs}</p>
      <p>Fat: {dish.fat}</p>
      <p>Saturated fat: {dish.saturated_fat}</p>
      <p>Protein: {dish.protein}</p>
      <p>Price: {dish.price}</p>
    </div>
  );
};

export default Dish;
