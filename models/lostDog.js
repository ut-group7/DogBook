const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lostDogSchema = new Schema({
  dogBreed: { type: String, required: true },
  contactName: { type: String, required: true },
  contactNumber: { type: String },
  dogSize: { type: String },
  dogColor: { type: String },
  reward: { type: String },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now() },
  lost: { type: Boolean, default: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false
}
});

const LostDog = mongoose.model("LostDog", lostDogSchema);

module.exports = LostDog;
