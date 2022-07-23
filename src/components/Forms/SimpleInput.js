import styles from './SimpleInput.module.css'

const SimpleInput = (props) => {
  return (
      <div className={styles.form}>
        <label htmlFor={props.id}>{props.label}</label>
        <input type={props.type} id={props.id} />
      </div>
  );
};

export default SimpleInput;
