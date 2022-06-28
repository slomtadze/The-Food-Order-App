import React, { useContext } from 'react'
import CartContext from '../../Store/Cart-Context'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const hasItems = cartCtx.items.length > 0
    const cartItem = <ul className={classes['cart-items']}>{cartCtx.items.map(item => 
            <CartItem 
                key = {item.id}
                name = {item.name}
                price = {item.price}
                amount = {totalAmount}
            /> 
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
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart