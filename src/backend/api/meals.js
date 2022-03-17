const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  let data;
  try {
    data = await knex("meal").select("*");
    if("title" in request.query){
      data = await knex("meal").where("title", "like", `%${request.query.title}%`)

    }
    if("limit" in request.query){
      const limitAmount = Number(request.query.limit)
      if(isNaN(limitAmount)){
        response.status(404).end("Wrong value : please enter a valid integer value")
      }
      else{
      data = await knex('meal').select("*").limit(limitAmount)};
    }
    if("maxPrice" in request.query){
      const maxPriceInteger = Number(request.query.maxPrice)
      if(isNaN(maxPriceInteger)){
        response.status(404).end("Wrong value : please enter a Price in valid integer")
      }
      data = await knex('meal').select("*").where("price", "<", `${maxPriceInteger}`);
    }
    if("createdAfter" in request.query){
      data = await knex('meal').select("*").where("created_date", ">", request.query.createdAfter)
  }
    if("availableReservations" in request.query){
      const joinData = await knex('meal').select("title","reservation.meal_id", "meal.max_reservations", "reservation.number_of_guests").join("reservation", "meal.id", "=","reservation.meal_id");
      const data = joinData.filter((meal)=>meal.number_of_guests < meal.max_reservations)
  }
    if("maxPrice" in request.query && "limit" in request.query){
      data = await knex('meal').select("*").where("price", "<", Number(request.query.maxPrice)).limit(Number(request.query.limit));

  }
    response.json(data);
  } catch (error) {
    response.status(404).end("please enter a valid value");
  }
});
router.post("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const newMeal = await knex("meal").insert({
      'title':request.body.title,
      'description': request.body.description,
      'location': request.body.location,
      'when_event': request.body.when_event,
      'max_reservations': request.body.max_reservations,
      'price': request.body.price,
      'created_date' : request.body.created_date
    });
    response.json("meal has been added");
  } catch (error) {
    throw error;
  }
});
router.get("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const mealWithId = await knex("meal").where('id',request.params.id);
    response.json(mealWithId);
  } catch (error) {
    throw error;
  }
});
router.put("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const updateMeal = await knex("meal").where({id:request.params.id}).update(request.body);
    response.json("meal has been updated");
  } catch (error) {
    throw error;
  }
});
router.delete("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const deleteMeal = await knex("meal").where('id',request.params.id).del();
    response.json("meal has been deleted");
  } catch (error) {
    throw error;
  }
});

module.exports = router;
