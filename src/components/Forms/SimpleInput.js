import { Fragment } from 'react';
import styles from './SimpleInput.module.css'

const SimpleInput = (props) => {

  const style = props.inputIsInvalid ? `${styles.form} ${styles.invalid}` : styles.form; 




  return (
    <Fragment>
      <div className={style}>
        <label htmlFor={props.id}>{props.label}</label>
        <input 
          type={props.type} 
          id={props.id}
          onChange={props.onChange}
          onBlur={props.onBlur} 
          value={props.value}
        />
      </div>
      {props.inputIsInvalid && <p>{`Enter a valid ${props.id}`}</p>}
    </Fragment>
  );
};

export default SimpleInput;
