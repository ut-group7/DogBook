const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seenDogSchema = new Schema ({
    dogBreed: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()},
    lost: {type: Boolean, default: true}
});

const SeenDog = mongoose.model("SeenDog", seenDogSchema);

module.exports = SeenDog;