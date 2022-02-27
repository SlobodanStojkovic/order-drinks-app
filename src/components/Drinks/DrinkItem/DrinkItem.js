import classes from "./DrinkItem.module.css";
import DrinkItemForm from "./DrinkItemForm";

const DrinkItem = (props) => {
  const price = `€${props.price.toFixed(2)}`;

  return (
    <li className={classes.drink}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <DrinkItemForm />
      </div>
    </li>
  );
};

export default DrinkItem;
