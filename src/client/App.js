import React from "react";
import "./App.css";
import "./MealsComponents/mealscomponents.css";
import "./NavbarComponents/navbar.css";
import "./FooterComponents/footer.css";
import "./AboutComponents/about.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import { MealsInformation } from "./MealsComponents/MealsInformation";
import { Navbar } from "./NavbarComponents/Navbar";
import { FooterSection } from "./FooterComponents/Footer";
import { AddMeal } from "./AddMealComponents/AddMeal";
import { AboutUs } from "./AboutComponents/About";
import { MealsListInformation } from "./MealsComponents/MealDetail";
// import { MakeReservation } from "./ReservationComponents/Reservation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <AboutUs />
            <MealsInformation />
          </Route>
          <Route path="/aboutus" component={AboutUs} />

          <Route path="/meals" exact component={AddMeal} />
          <Route path="/meals/:id" component={MealsListInformation} />
          {/* <Route path="/reservations" component={MakeReservation} /> */}
        </Switch>

        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
