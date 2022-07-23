import styles from './SimpleInput.module.css'

const SimpleInput = (props) => {

  const style = props.inputIsInvalid ? `${styles.form} ${styles.invalid}` : styles.form; 

  return (
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
  );
};

export default SimpleInput;
