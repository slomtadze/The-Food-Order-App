import useInput from "../Hooks/use-Input";
import SimpleInput from "./SimpleInput";

import styles from "./BasicForm.module.css"
import useHttp from "../Hooks/use-http";
import { useContext } from "react";
import CartContext from "../../Store/Cart-Context";


const BasicForm = (props) => {

  const cartCtx = useContext(CartContext)

  const textValidate = value => value.trim() !== '';

  const { 
    enteredValue: enteredName, 
    valueIsValid: enteredNameIsValid,
    inputIsInvalid: nameInputIsInvalid, 
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurtHandler,
    reset: nameReset 
  } = useInput(textValidate)
  const { 
    enteredValue: enteredLastName, 
    valueIsValid: enteredLastNameIsValid,
    inputIsInvalid: lastNameInputIsInvalid, 
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurtHandler,
    reset: lastNameReset 
  } = useInput(textValidate)

  const {    
    isLoading: sendRequestIsLoading,
    error, sendRequestError,
    sendRequest: setMeals} = useHttp()

  let formIsValid = false;

  const orderSubmitHandler = event => {
    event.preventDefault();

    setMeals({
      url:'https://react---udemy-default-rtdb.firebaseio.com/selectedMeals.json',
      method: 'POST',
      body: {
        meals: cartCtx.items,
        userData: {
          name:enteredName,
          lastName:enteredLastName
        }
      },
      header: {'Content-Type': 'aplication/json'}
    })

    nameReset();
    lastNameReset();

    cartCtx.resetItems()
  }

  return (
    <form onSubmit={orderSubmitHandler}>
      <SimpleInput 
        id='name'
        type='text'
        label='Your Name'
        value={enteredName}
        onChange={nameChangeHandler}
        onBlur={nameBlurtHandler}
        inputIsInvalid={nameInputIsInvalid}
        enteredValueIsValid={enteredNameIsValid}
      />
      <SimpleInput 
        id='lastName'
        type='text'
        label='Your Last Name'
        value={enteredLastName}
        onChange={lastNameChangeHandler}
        onBlur={lastNameBlurtHandler}
        inputIsInvalid={lastNameInputIsInvalid}
        enteredValueIsValid={enteredLastNameIsValid}
      />
      <div className='form-actions'>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default BasicForm;
