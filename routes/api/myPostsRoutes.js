const router = require("express").Router();
const lostDogsController = require("../../controllers/lostDogController");


router
  .route("/:id")
  .get(lostDogsController.findByUser)

  module.exports = router;
