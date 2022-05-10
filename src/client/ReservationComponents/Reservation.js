import React from "react";
import { useState } from "react";
export function MakeReservation(props) {
  const [mealId, setMealId] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      number_of_guests: 1,
      meal_id: props.mealId,
      created_date: "2022-04-15",
      contact_name: name,
      contact_phonenumber: phonenumber,
      contact_email: email,
    };

    fetch("http://localhost:3000/api/reservations", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your reservation has been added");
        console.log("Success:", data);
      })
      .catch((error) => console.error("Error:", error));
  }
  return (
    <div className="form-section">
      <h1 className="form-heading">Add a Reservation for a Meals</h1>
      <form>
        {/* <div>
          <label>Meal_id</label>
        </div>
        <div>
          <input
            type="number"
            placeholder="Meal Id..."
            onChange={(e) => setMealId(e.target.value)}
          ></input>
        </div> */}
        <div>
          <label className="flex-column">Name</label>
        </div>
        <div>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Add your full name"
            required
          ></input>
        </div>
        <div>
          <label className="flex">PhoneNumber</label>
        </div>
        <div>
          <input
            type="number"
            name="phonenumber"
            placeholder="Enter phonenumber..."
            required
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>
        <div>
          <label className="flex">Email</label>
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter a valid email...."
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="submit-form">
          <button type="button" className="btn" onClick={handleSubmit}>
            Reserve Meal
          </button>
        </div>
      </form>
    </div>
  );
}
