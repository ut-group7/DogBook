const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lostDogSchema = new Schema ({
    dogBreed: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()},
    lost: {type: Boolean, default: true}
});

const LostDog = mongoose.model("LostDog", lostDogSchema);

module.exports = LostDog;