const express = require('express');

// Connecting to controllers
const { getAllPlanets } = require('./planets.controller')

// Creating the router
const planetsRouter = express.Router();

// Rouoting urls to the controllers
planetsRouter.get('/planets', getAllPlanets)

// Exporting to app's middleware
module.exports = planetsRouter;