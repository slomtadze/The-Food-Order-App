import React from 'react'
import classes from './MealItem.module.css'

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
        <span>{props.title}</span>
        <span>{props.description}</span>
        <span>{`$${props.title}`}</span>
    </li>
  )
}

export default MealItem