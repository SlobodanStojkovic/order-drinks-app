import classes from "./Header.module.css";

import drinksImage from "../../assets/drinks.png";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Order Drinks</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={drinksImage} alt="A bar full of all kinds of drinks!" />
      </div>
    </>
  );
};

export default Header;
