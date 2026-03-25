const service = require('../services/task.service');

exports.create = async (req, res, next) => {
  try {
    const task = await service.create(req.body);
    res.status(201).json(task);
  } catch (e) {
    next(e);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const tasks = await service.getAll(req.query);
    res.json(tasks);
  } catch (e) {
    next(e);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const task = await service.getOne(req.params.id);
    res.json(task);
  } catch (e) {
    next(e);
  }
};

exports.update = async (req, res, next) => {
  try {
    const task = await service.update(req.params.id, req.body);
    res.json(task);
  } catch (e) {
    next(e);
  }
};

exports.patch = async (req, res, next) => {
  try {
    const task = await service.patch(req.params.id, req.body);
    res.json(task);
  } catch (e) {
    next(e);
  }
};

exports.remove = async (req, res, next) => {
  try {
    await service.remove(req.params.id);
    res.status(204).send();
  } catch (e) {
    next(e);
  }
};