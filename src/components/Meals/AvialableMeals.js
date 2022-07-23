import React, { useEffect, useState } from 'react'
import MealItem from './MealItem';
import classes from './AvailableMeals.module.css' 
import Card from '../UI/Card';
import useHttp from '../Hooks/use-http';

/* const DUMMY_MEALS = [
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
  ]; */

const AvialableMeals = () => {

  const [meals, setMeals] = useState([])

  const { isLoading, error, sendRequest: fetchMeals } = useHttp()

  const applyMeals = (meals) => {

    const loadedMeals = [];

    for(const key in meals){
      loadedMeals.push({
        id:key,
        name: meals[key].name,
        description: meals[key].description,
        price: meals[key].price
      })
    }
    setMeals(loadedMeals)
  }

  useEffect(() => {
    fetchMeals(
      {url: 'https://react---udemy-default-rtdb.firebaseio.com/Meals.json'},
      applyMeals)
  }, [fetchMeals])

  const mealItem = meals.map(item => 
      <MealItem 
        id={item.id}
        key={item.id} 
        title={item.name}
        description={item.description}
        price={item.price}
  />)

  if(isLoading){
    return (
      <Card>
        <p>Is Loading...</p>
      </Card>
    )
  }
  if(error){
    return(
      <Card>
        <p>{error}</p>
      </Card>
    )
  }
  return (
    <div className={classes.meals}>
       <Card>{mealItem}</Card>
    </div>
  )
}

export default AvialableMeals