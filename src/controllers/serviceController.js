const serviceService = require('../services/serviceService');

const getAll = async (req, res, next) => {
  try {
    res.json(await serviceService.getAll());
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    res.json(await serviceService.getById(req.params.id));
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getById };
