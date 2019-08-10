const router = require("express").Router();

const lostDogRoutes = require("./lostDogs");

const authRoutes = require("./authRoutes");

router.use("/lostDogs", lostDogRoutes);
router.use("/auth", authRoutes);

module.exports = router;