import mongoose from "mongoose"

const Schema = mongoose.Schema;

let Comment = new Schema({
    "Owner": { type: Schema.Types.ObjectId, ref: "Users"},
    "Text": { type: String }
});

export default mongoose.model("Comments", Comment)
