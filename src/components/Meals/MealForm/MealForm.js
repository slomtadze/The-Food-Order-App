import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealForm.module.css'

const MealForm = (props) => {

  const [amountIsValid, setAmountIsValid] = useState(true)
  
  const inputRef=useRef()
  
  const itemAddHandler = event => {
    event.preventDefault()

    const enteredAmount = inputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
      console.log('submit error')
      setAmountIsValid(false)
      return
    }

    props.onAddToCart(enteredAmountNum)
  }

  return (
    <form className={classes.form} onSubmit={itemAddHandler}>
        <Input 
          label='Amount' 
          ref={inputRef}
          form={{
            id: props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button>Add</button>
        {!amountIsValid && <p>Enter a valid amount (1-5)</p>}
    </form>    
  )
}

export default MealForm