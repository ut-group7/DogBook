const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema ({
    googleId: {type: String, required: true},
    name: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()},
    posts: [{ type: Schema.Types.ObjectId, ref: 'LostDog' }]
});

userSchema.plugin(findOrCreate)

const User = mongoose.model("User", userSchema);

module.exports = User;