import React, { useContext } from 'react'
import CartContext from '../../Store/Cart-Context'
import MealForm from './MealForm/MealForm'
import classes from './MealItem.module.css'

const MealItem = (props) => {

  const cartCtx = useContext(CartContext)

  const addItemToCart = amount => {
    
    cartCtx.addItem({
      id: props.id,
      name: props.title,
      amount: amount,
      price: props.price
    })

    console.log(cartCtx)

  }

  return (
    <li className={classes.meal}>
        <div>            
            <h3>{props.title}</h3>
            <p className={classes.description}>{props.description}</p>
            <span className={classes.price}>{`$${props.price}`}</span>
        </div>
        <div>
            <MealForm id={props.id} onAddToCart = {addItemToCart}/>
        </div>
    </li>
  )
}

export default MealItem