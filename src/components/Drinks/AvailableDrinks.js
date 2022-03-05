import { useEffect, useState } from "react";
import Card from "../UI/Card";

import classes from "./AvailableDrinks.module.css";
import DrinkItem from "./DrinkItem/DrinkItem";

/* const DUMMY_DRINKS = [
  {
    id: "d1",
    name: "Water",
    description: "Finest mountain pure water.",
    price: 4.99,
  },
  {
    id: "d2",
    name: "Orange juice",
    description:
      "Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges.",
    price: 9.99,
  },
  {
    id: "d3",
    name: "Beer",
    description:
      "Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea.",
    price: 6.99,
  },
  {
    id: "d4",
    name: "Coca-Cola",
    description: "Coca-Cola is a carbonated soft drink.",
    price: 3.99,
  },
]; */

const AvailableDrinks = () => {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await fetch(
        "https://order-sweets-app-933e0-default-rtdb.firebaseio.com/drinks.json"
      );

      if (!response.ok) {
        throw new Error("Fetching data from server failed!");
      }

      const responseData = await response.json();

      const loadedDrinks = [];

      for (const key in responseData) {
        loadedDrinks.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setDrinks(loadedDrinks);
      setIsLoading(false);
    };

    fetchDrinks().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.drinksLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.drinksError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const drinksList = drinks.map((drink) => {
    return (
      <DrinkItem
        id={drink.id}
        key={drink.id}
        name={drink.name}
        description={drink.description}
        price={drink.price}
      />
    );
  });

  return (
    <section className={classes.drinks}>
      <Card>
        <ul>{drinksList}</ul>
      </Card>
    </section>
  );
};

export default AvailableDrinks;
