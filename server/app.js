const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./src/routes/users")

require("dotenv").config()

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.use('/api/users', userRoutes)

app.listen(process.env.PORT, () => console.log(`Server running on port :${process.env.PORT}`));