
const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require('mongoose')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { requireAuthentication, checkUser } = require("./Middleware/authmiddleware");
const authenticatToken = require("./Auth/verify");
const roleAuthentication = require("./Auth/roleAuthentication");
const tokenAuthentication = require("./Auth/tokenVerification");
const { role, Admins_Role, Users_Role } = require("./Utils/role");
const tesseract = require("node-tesseract-ocr")
const port = process.env.PORT || 8080;
const app = express();

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());



//DB connection
require('./Models/index')


//require routes
const apiRoutes = require('./Routes/index');
app.use("/", apiRoutes);

app.get("/", (req, res) => {
    res.send(`app working ` + new Date().toLocaleTimeString());
});

const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
  }





app.listen(port,()=>{
    console.log(`Server listening port http://localhost:${port}`);
})
