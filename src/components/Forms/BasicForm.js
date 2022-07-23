import SimpleInput from "./SimpleInput";

import styles from "./BasicForm.module.css"

const BasicForm = (props) => {
  return (
    <form>
      <SimpleInput 
        id='name'
        type='text'
        label='Your Name'
      />
      <SimpleInput 
        id='lastName'
        type='text'
        label='Your Last Name'
      />
      <SimpleInput 
        id='adress'
        type='text'
        label='Delivery Adress'
      />
      <SimpleInput 
        id='phone'
        type='text'
        label='Your Phone Number'
      />
      <div className='form-actions'>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default BasicForm;
