import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MealsList({ fetchData }) {
  if (fetchData) {
    const listOfItems = fetchData.map((meal) => (
      <li key={meal.id} className="mealSection">
        <Link to={`/meals/${meal.id}`}>
          <h3 className="meal-title">{meal.title}</h3>
        </Link>
        {/* <p>
          {meal.description}
          <br></br>
          {meal.price} Kr
        </p> */}
      </li>
    ));
    console.log(fetchData);

    return <ul className="mealList">{listOfItems}</ul>;
  }
}

export function MealsInformation() {
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    fetchDataResult();
  }, []);
  const fetchDataResult = async () => {
    const response = await fetch("http://localhost:3000/api/meals");
    const Data = await response.json();
    setFetchData(Data);
  };

  return (
    <div className="meals-component">
      <h1 className="menu-heading">Menu</h1>
      <h2 className="sub-heading">
        For Reservation & Detail click on the Meal
      </h2>
      <div className="meals">
        <MealsList fetchData={fetchData} />
      </div>
    </div>
  );
}
