const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
    try {
      const allReviews = await knex("review").select("*");
      response.json(allReviews);
    } catch (error) {
      throw error;
    }
  });
  router.post("/", async (request, response) => {
    try {
      const newReview = await knex("review").insert({
          'title' : 'Delicious treat',
          'description' : 'Delicious taste of indian food away from home',
          'stars' :'5',
          'created_date' : '2022-02-09',
          'meal_id' : '5'
      });
      response.json(newReview);
    } catch (error) {
      throw error;
    }
  });
  router.get("/:id", async (request, response) => {
    try {
      const reviewWithId = await knex("review").where('id',request.params.id);
      response.json(reviewWithId);
    } catch (error) {
      throw error;
    }
  });
  router.put("/:id", async (request, response) => {
    try {
      const updateReview = await knex("review").where({id:request.params.id}).update(request.body);
      response.json(updateReview);
    } catch (error) {
      throw error;
    }
  });
  router.delete("/:id", async (request, response) => {
    try {
      const deleteReview = await knex("review").where('id',request.params.id).del();
      response.json(deleteReview);
    } catch (error) {
      throw error;
    }
  });

module.exports = router;