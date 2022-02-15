const { getAllLaunches } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

// launches.values is the method which converts the map into an array

module.exports = {
  httpGetAllLaunches,
}