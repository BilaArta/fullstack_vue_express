const Router = require("express").Router();
const {getAllUsers} = require("../controllers/users");

Router.get('/', getAllUsers)

module.exports = Router;