import mongoose from "mongoose"

const Schema = mongoose.Schema;

let Picture = new Schema({
    "Artist": { type: String},
    "Title": { type: String },
    "ImageId": { type: String },
    "Year": { type: String} ,
    "Description": { type: String },
    "Comments": [{ type: Schema.Types.ObjectId, ref: "comments" }]
})

export default mongoose.model("pictures", Picture)
