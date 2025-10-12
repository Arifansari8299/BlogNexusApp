const express = require('express')
const { register, login, getProfile } = require("../../controllers/users/usersControllers")

const usersRouter = express.Router();

usersRouter.post('/registration', register)
usersRouter.post('/login',login)
usersRouter.get('/profile/:id',getProfile)

module.exports = usersRouter;