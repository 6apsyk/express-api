import express from 'express'

const userRoute = express.Router()

userRoute.post('/login', (req, res, next) => {
    console.log('login')
    next()
})

userRoute.post('/register', (req, res, next) => {
    console.log('register')
    next()
})

export { userRoute }

