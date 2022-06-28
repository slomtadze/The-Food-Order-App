import React, { Fragment} from 'react'
import styles from './Header.module.css'
import mealsImage from '../../img/meals.jpg'
import HeaderCartButton from '../Cart/HeaderCartButton'


const Header = (props) => {

  return (
    <Fragment>
        <header className={styles.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={styles['main-image']}>
            <img src={mealsImage} alt="Delicicious Food"/>
        </div>
    </Fragment>
  )
}

export default Header