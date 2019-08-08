const router = require("express").Router();

const lostDogRoutes = require("./lostDogs");

router.use("/lostDogs", lostDogRoutes);

module.exports = router;