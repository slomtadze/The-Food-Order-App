import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartItem = <ul className={classes['cart-items']}>{[{id:'e1', name: 'suShi', amount: '1', price: '35'}].map(item => 
            <li>{item.name}</li>
        )}
    </ul>
  return (
    <Modal onClick={props.onHideCart}>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart