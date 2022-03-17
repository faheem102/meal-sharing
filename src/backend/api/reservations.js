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
          'number_of_guests' : request.body.number_of_guests,
          'meal_id' : request.body.meal_id,
          'created_date' : request.body.created_date,
          'contact_name' : request.body.contact_name,
          'contact_phonenumber' : request.body.contact_phonenumber,
          'contact_email' : request.body.contact_email
      });
      response.json("new reservation has been added");
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
      response.json("reservation has been updated");
    } catch (error) {
      throw error;
    }
  });
  router.delete("/:id", async (request, response) => {
    try {
      const deleteReservation = await knex("reservation").where('id',request.params.id).del();
      response.json("reservation has been deleted");
    } catch (error) {
      throw error;
    }
  });
  
  

module.exports = router;