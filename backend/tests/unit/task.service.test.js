const taskService = require('../../src/services/task.service');
const taskRepo = require('../../src/repositories/task.repository');

jest.mock('../../src/repositories/task.repository');

describe('Task Service', () => {
  it('should create a new task', async () => {
    const input = { title: 'Test', priority: 'HIGH' };
    const createdTask = { id: 1, ...input };

    taskRepo.create.mockResolvedValue(createdTask);

    const result = await taskService.createTask(input);

    expect(taskRepo.create).toHaveBeenCalledWith(input);
    expect(result).toEqual(createdTask);
  });
});
