import React from "react";
import { useState } from "react";
import "./form.css";

export function AddMeal() {
  const [mealTitle, setMealTitle] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [mealPrice, setMealPrice] = useState("");
  function handleSubmit(event) {
    //event.preventDefault();
    const data = {
      title: mealTitle,
      description: mealDescription,
      location: "Lyngby",
      when_event: "2022-10-12",
      max_reservations: 4,
      price: mealPrice,
      created_date: "2022-04-12",
    };

    console.log(data);
    fetch("/api/meals", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your meal has been added");
        console.log("Success:", data);
      })
      .catch((error) => {
        alert("An error occured")
        console.error("Error:", error);
      });
  }

  return (
    // <div className="form-section">
    <div className="form-section">
      <h1 className="form-heading">Add a meal from your area</h1>
      <form>
        <div>
          <label>Add meal title</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Title..."
            onChange={(e) => setMealTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label className="flex-column">Add meal description:</label>
        </div>
        <div>
          <textarea
            name="title"
            rows="3"
            cols="50"
            onChange={(e) => setMealDescription(e.target.value)}
            placeholder="Add meal description"
          ></textarea>
        </div>
        <div>
          <label className="flex">Price:</label>
        </div>
        <div>
          <input
            type="number"
            name="price"
            onChange={(e) => setMealPrice(e.target.value)}
          />
        </div>

        <div className="submit-form">
          <button type="button" className="btn" onClick={handleSubmit}>
            Add Meal
          </button>
        </div>
      </form>
    </div>
    //   <form>
    //     <label>
    //       Add meal title:
    //       <input
    //         type="text"
    //         name="title"
    //         // onChange={changeHandler}
    //         placeholder="Add meal title..."
    //       />
    //     </label>

    // <label className="flex-column">
    //   Add meal description:
    //   <textarea
    //     name="title"
    //     rows="3"
    //     cols="100"
    //     name="description"
    //     // onChange={changeHandler}
    //     placeholder="Add meal description"
    //   ></textarea>
    // </label>

    // <label className="flex">
    //   Price:
    //   <input type="number" onChange={changeHandler} name="price" />
    // </label>

    // <div className="submit-form">
    //   <button type="submit" className="btn " onClick={submitHandler}>
    //     Add Reservation
    //   </button>
    // </div>
    //   </form>
    // </div>
  );
}
