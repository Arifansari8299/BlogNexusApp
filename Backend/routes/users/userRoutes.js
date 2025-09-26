const express = require('express')
const { register } = require("../../controllers/users/usersControllers")

const usersRouter = express.Router();

usersRouter.post('/api/v1/users/registration', register)

module.exports = usersRouter;