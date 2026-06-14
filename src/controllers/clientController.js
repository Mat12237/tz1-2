const clientService = require('../services/clientService');

const getAll = async (req, res, next) => {
  try {
    res.json(await clientService.getAll());
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    res.json(await clientService.getById(req.params.id));
  } catch (err) {
    next(err);
  }
};

const getDetail = async (req, res, next) => {
  try {
    res.json(await clientService.getDetail(req.params.id));
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const client = await clientService.create(req.body);
    res.status(201).json(client);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const client = await clientService.update(req.params.id, req.body);
    res.json(client);
  } catch (err) {
    next(err);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const client = await clientService.updateStatus(req.params.id, req.body.is_active);
    res.json(client);
  } catch (err) {
    next(err);
  }
};

const assignTrainer = async (req, res, next) => {
  try {
    const client = await clientService.assignTrainer(
      req.params.clientId,
      req.params.trainerId,
    );
    res.json(client);
  } catch (err) {
    next(err);
  }
};

const assignLocker = async (req, res, next) => {
  try {
    const client = await clientService.assignLocker(
      req.params.clientId,
      req.params.lockerId,
    );
    res.json(client);
  } catch (err) {
    next(err);
  }
};

const addService = async (req, res, next) => {
  try {
    const client = await clientService.addService(
      req.params.clientId,
      req.params.serviceId,
    );
    res.json(client);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
  getDetail,
  create,
  update,
  updateStatus,
  assignTrainer,
  assignLocker,
  addService,
};
