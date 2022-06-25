import React, { Fragment } from 'react'
import classes from './MealItem.module.css'

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
        <div>            
            <h3>{props.title}</h3>
            <p className={classes.description}>{props.description}</p>
            <span className={classes.price}>{`$${props.price}`}</span>
        </div>
        <div>
            
        </div>
    </li>
  )
}

export default MealItem