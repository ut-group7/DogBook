const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UploadImage = new Schema(
    { img: 
        { data: Buffer, contentType: String }
    }
);

var UploadImage = mongoose.model('Clothes', UploadImageSchema)

module.exports = UploadImage;

//The rest of the changes are in server.js and commented out.