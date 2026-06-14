const trainerService = require('../services/trainerService');

const getAll = async (req, res, next) => {
  try {
    res.json(await trainerService.getAll());
  } catch (err) {
    next(err);
  }
};

const getDetail = async (req, res, next) => {
  try {
    res.json(await trainerService.getDetail(req.params.id));
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const trainer = await trainerService.create(req.body);
    res.status(201).json(trainer);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const trainer = await trainerService.update(req.params.id, req.body);
    res.json(trainer);
  } catch (err) {
    next(err);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const trainer = await trainerService.updateStatus(req.params.id, req.body.status);
    res.json(trainer);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getDetail, create, update, updateStatus };
