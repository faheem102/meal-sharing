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
          'title' : request.body.title,
          'description' : request.body.description,
          'stars' : request.body.stars,
          'created_date' : request.body.created_date,
          'meal_id' : request.body.meal_id
      });
      response.json("new review has been added");
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
      response.json("this review has been updated");
    } catch (error) {
      throw error;
    }
  });
  router.delete("/:id", async (request, response) => {
    try {
      const deleteReview = await knex("review").where('id',request.params.id).del();
      response.json("review has been deleted");
    } catch (error) {
      throw error;
    }
  });

module.exports = router;