import React, { useReducer } from 'react'
import CartContext from './Cart-Context'

const defaulcCartItem = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedCartItems = state.items.concat(action.item);
        const updatedToTalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {items: updatedCartItems, totalAmount: updatedToTalAmount}
    }

    if(action.type === 'REMOVE') {

    }
    return defaulcCartItem
}


const CartProvider = (props) => {

    const [cartItem, dispatchCartAction] = useReducer(cartReducer, defaulcCartItem)

    const addItemToCarthandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
        console.log(cartItem.items)
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }; 

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCarthandler,
        removeItem: removeItemFromCartHandler,
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider