require('dotenv').config({path:'./config.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4002;

const staffRoute = require("./routes/staffRoute");
const memberRoute = require("./routes/memberRoute");
const bookRoute = require("./routes/bookRoute");
const borrowRoute = require("./routes/borrowRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());

require("./db")(app);

app.use("/staff",staffRoute);
app.use("/member",memberRoute);
app.use("/book",bookRoute);
app.use("/borrow",borrowRoute);

app.get("/",(req,res)=>{
    res.send("Hello Index");
});

app.listen(port,()=>{
    console.log("App is running on port " + port);
});