const express = require('express')
const { register, login } = require("../../controllers/users/usersControllers")

const usersRouter = express.Router();

usersRouter.post('/api/v1/users/registration', register)
usersRouter.post('/api/v1/users/login',login)

module.exports = usersRouter;