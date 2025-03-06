const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:  true
}).then(()=>{
    console.log("Mongo Connected")
}).catch(err=> console.log(err));


app.use("/clients", require("./routes/clients"));


app.listen(PORT, ()=> console.log("Serveur started on port"+PORT))

