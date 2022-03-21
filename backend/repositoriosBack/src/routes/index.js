//const bodyParser = require ('body-parser')
const express= require('express')
const cors = require('cors')
const git = require('./githubRouter')


module.exports = app => {
    app.use(cors())
    app.use(
        express.json(),
        git
    )
}