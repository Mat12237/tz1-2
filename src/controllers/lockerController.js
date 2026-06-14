const lockerService = require('../services/lockerService');

const getAll = async (req, res, next) => {
  try {
    res.json(await lockerService.getAll());
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll };
