const mongoose = require("mongoose");
const DB = "mongodb+srv://anup:12345@cluster0.9eh35xp.mongodb.net/mernstack?retryWrites=true&w=majority"
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(function () {
        console.log("connection start")
    })
    .catch(function (error) {
        console.log(error.message)
    })