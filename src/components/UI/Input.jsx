import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.form.id}>{props.label}</label>
      <input {...props.form} />
    </div>
  )
}

export default Input