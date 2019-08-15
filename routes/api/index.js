const router = require("express").Router();

const lostDogRoutes = require("./lostDogs");

const authRoutes = require("./authRoutes");

const myPostRoutes = require("./myPostsRoutes");

router.use("/lostDogs", lostDogRoutes);
router.use("/auth", authRoutes);
router.use("/user", myPostRoutes);

module.exports = router;