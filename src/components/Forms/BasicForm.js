import useInput from "../Hooks/use-Input";
import SimpleInput from "./SimpleInput";

import styles from "./BasicForm.module.css"


const BasicForm = (props) => {

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

  let formIsValid = false;

  const orderSubmitHandler = event => {
    event.preventDefault();

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
