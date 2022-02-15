// Connecting to model
const { getAllPlanets } = require('../../models/planets.model')

// Controllers
function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets());
}

// Exporting to router
module.exports = {
  httpGetAllPlanets,
}