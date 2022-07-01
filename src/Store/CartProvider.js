import React, { useReducer } from 'react'
import CartContext from './Cart-Context'

const defaulcCartItem = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedToTalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        const existingItemIndex = state.items.findIndex( item => item.id === action.item.id);
        const existngItem = state.items[existingItemIndex]
        let updatedItem ;
        let updatedItems

        if(existngItem) {
            updatedItem = {
                ...existngItem,
                amount: existngItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem; 
        } else {
            updatedItems = state.items.concat(action.item);
        }    
               
        return {
            items: updatedItems, 
            totalAmount: updatedToTalAmount
        }
    }

    return defaulcCartItem
}


const CartProvider = (props) => {

    const [cartItem, dispatchCartAction] = useReducer(cartReducer, defaulcCartItem)

    const addItemToCarthandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }; 

    const cartContext = {
        items: cartItem.items,
        totalAmount: cartItem.totalAmount,
        addItem: addItemToCarthandler,
        removeItem: removeItemFromCartHandler,
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
};

export default CartProvider