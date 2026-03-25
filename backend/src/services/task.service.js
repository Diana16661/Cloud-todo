// services/task.service.js
const repo = require('../repositories/task.repository');

async function createTask(data) {
  if (!data.title) throw new Error("Title is required");
  if (data.title.length < 3) throw new Error("Title too short");
  return repo.create(data);
}

function getAllTasks(query) {
  const { status, priority, limit = 10, offset = 0 } = query;
  return repo.getAll({ status, priority, limit, offset });
}

async function getTask(id) {
  const task = await repo.getOne(id);
  if (!task) throw new Error("Task not found");
  return task;
}

function updateTask(id, data) {
  return repo.update(id, data);
}

function patchTask(id, data) {
  return repo.update(id, data);
}

function removeTask(id) {
  return repo.remove(id);
}

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  patchTask,
  removeTask,
};
