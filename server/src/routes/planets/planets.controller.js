// Connecting to model
const { planets } = require('../../models/planets.model')

// Controllers
function getAllPlanets(req, res) {
  return res.status(200).json(planets);
}

// Exporting to router
module.exports = {
  getAllPlanets,
}