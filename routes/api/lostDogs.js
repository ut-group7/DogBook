const router = require("express").Router();
const lostDogsController = require("../../controllers/lostDogController");

//matches with "/api/lostDogs"
router
  .route("/")
  .get(lostDogsController.findAll)
  .post(lostDogsController.create);

//matches with "/api/lostDogs/:id"
router
  .route("/:id")
  .get(lostDogsController.findById)
  .delete(lostDogsController.remove);

router
  .route("/user/:id")
  .get(lostDogsController.findByUser);
module.exports = router;
