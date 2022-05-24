import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MakeReservation } from "../ReservationComponents/Reservation";

function MealsListDetails({ meals }) {
  if (!meals || meals.length === 0) {
    return null;
  } else {
    const detailsOfMeals = meals.map((meal) => (
      <li key={meal.id} className="mealdetailsSection">
        <Link to={`/meals/${meal.id}`}>
          <h3>{meal.title}</h3>
        </Link>

        <p>
          Description : {meal.description}
          <br></br>
          Price : {meal.price} Kr
          <br></br>
          Location: {meal.location}
          <br></br>
          Max Reservation : {meal.max_reservations}
          <br></br>
          Meal_id : {meal.id}
        </p>
      </li>
    ));
    console.log(meals);

    return <ul className="mealList">{detailsOfMeals}</ul>;
  }
}

export function MealsListInformation({ match }) {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMealResult = async () => {
      const response = await fetch(
        `http://localhost:3000/api/meals/${match.params.id}`
      );
      const Data = await response.json();
      setMeals(Data);
    };

    fetchMealResult();
  }, []);
  // useEffect(() => {
  //   fetchMealResult();
  //   console.log(match);
  // }, []);
  // const fetchMealResult = async () => {
  //   const response = await fetch(
  //     `http://localhost:3000/api/meals/${match.params.id}`
  //   );
  //   const Data = await response.json();
  //   setMeals(Data);
  // };

  return (
    <div className="meals-component">
      <h1 className="menu-heading">Meal Details</h1>
      <div className="meals">
        <MealsListDetails meals={meals} />
      </div>
      <div>
        <MakeReservation mealId={match.params.id} />
      </div>
    </div>
  );
}
