const mongoose = require("mongoose");
const dbConnectionUrl = "mongodb+srv://admin:admin@cluster0-8mhfn.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dbConnectionUrl);
var db = mongoose.connection;

const dbName = "mwa"; //homework07.lectures
const collectionName = "users";

var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});
var Blog = mongoose.model('Blog', blogSchema);