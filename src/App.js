import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import AvialableMeals from "./components/Meals/AvialableMeals";
import MealsSummary from "./components/Meals/MealsSummary";


function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
      <AvialableMeals />
    </Fragment>
  );
}

export default App;
