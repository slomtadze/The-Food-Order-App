import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvialableMeals from "./components/Meals/AvialableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import CartProvider from "./Store/CartProvider";


function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart ={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <MealsSummary />
        <AvialableMeals />
      </main>
    </CartProvider>
  );
}

export default App;
