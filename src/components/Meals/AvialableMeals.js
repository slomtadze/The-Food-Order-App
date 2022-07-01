import React from 'react'
import MealItem from './MealItem';
import classes from './AvailableMeals.module.css' 
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvialableMeals = () => {
    const mealItem = DUMMY_MEALS.map(item => 
        <MealItem 
          id={item.id}
          key={item.id} 
          title={item.name}
          description={item.description}
          price={item.price}
    />)
  return (
    <div className={classes.meals}>
       <Card>{mealItem}</Card>
    </div>
  )
}

export default AvialableMeals