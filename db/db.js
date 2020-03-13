const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:admin@cluster0-8mhfn.gcp.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})