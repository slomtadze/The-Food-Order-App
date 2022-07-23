import { useState } from "react"

const useInput = (validateValue) => {
    
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const inputIsInvalid = !valueIsValid && isTouched;

    const onChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }
    const onBlurHandler = () => {
        setIsTouched(true)
    }    

    const reset = () => {
      setEnteredValue('');
      setIsTouched(false)
    }

  return ({
    enteredValue,
    valueIsValid,
    inputIsInvalid, 
    onChangeHandler,
    onBlurHandler,
    reset
  })
}

export default useInput;