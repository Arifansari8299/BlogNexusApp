const express = require('express')
const { register, login, getProfile } = require("../../controllers/users/usersControllers")

const usersRouter = express.Router();

usersRouter.post('/api/v1/users/registration', register)
usersRouter.post('/api/v1/users/login',login)
usersRouter.get('/api/v1/users/profile/:id',getProfile)

module.exports = usersRouter;