import Card from "../UI/Card";

import classes from "./AvailableDrinks.module.css";
import DrinkItem from "./DrinkItem/DrinkItem";

const DUMMY_DRINKS = [
  {
    id: "d1",
    name: "Water",
    description: "Finest mountain pure water",
    price: 4.99,
  },
  {
    id: "d2",
    name: "Orange juice",
    description: "Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges.",
    price: 9.99,
  },
  {
    id: "d3",
    name: "Beer",
    description: "Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea.",
    price: 6.99,
  },
  {
    id: "d4",
    name: "Coca-Cola",
    description: "Coca-Cola is a carbonated soft drink.",
    price: 3.99,
  },
];

const AvailableDrinks = () => {
  return (
    <section className={classes.drinks}>
      <Card>
        <ul>
          {DUMMY_DRINKS.map((drink) => {
            return (
              <DrinkItem
                id={drink.id}
                key={drink.id}
                name={drink.name}
                description={drink.description}
                price={drink.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableDrinks;
