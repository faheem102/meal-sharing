const express = require("express");
const router = express.Router();
const knex = require("../database");
router.get("/", async (request, response) => {
    try {
      const allReservations = await knex("reservation").select("*");
      response.json(allReservations);
    } catch (error) {
      throw error;
    }
  });
  router.post("/", async (request, response) => {
    try {
      const newReservation = await knex("reservation").insert({
          'number_of_guests' : '5',
          'meal_id' : '7',
          'created_date' : '2022-03-15',
          'contact_name' : 'Brian Lara',
          'contact_phonenumber' : '78643909',
          'contact_email' : 'Blara@hotmail.com'
      });
      response.json(newReservation);
    } catch (error) {
      throw error;
    }
  });
  router.get("/:id", async (request, response) => {
    try {
      const reservationWithId = await knex("reservation").where('id',request.params.id);
      response.json(reservationWithId);
    } catch (error) {
      throw error;
    }
  });
  router.put("/:id", async (request, response) => {
    try {
      const updateReservation = await knex("reservation").where({id:request.params.id}).update(request.body);
      response.json(updateReservation);
    } catch (error) {
      throw error;
    }
  });
  router.delete("/:id", async (request, response) => {
    try {
      const deleteReservation = await knex("reservation").where('id',request.params.id).del();
      response.json(deleteReservation);
    } catch (error) {
      throw error;
    }
  });
  router.get("/", async (request, response) => {
    try {
      const allReservations1 = await knex("reservation").select("title").where('id',request.query.id);
      console.log(request.query.id)
      response.json(allReservations1);
    } catch (error) {
      throw error;
    }
});
  

module.exports = router;