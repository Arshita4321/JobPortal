// const { Description } = require("@mui/icons-material");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: { type: String, default: "" },
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        },
    },
    salary: Number,
    location: String,
    type: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

