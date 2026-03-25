const prisma = require('../prisma');

exports.create = (data) => prisma.task.create({ data });

exports.getAll = ({ status, priority, limit, offset }) => {
  return prisma.task.findMany({
    where: {
      status: status || undefined,
      priority: priority || undefined
    },
    take: Number(limit),
    skip: Number(offset)
  });
};

exports.getOne = (id) => prisma.task.findUnique({ where: { id } });

exports.update = (id, data) => prisma.task.update({
  where: { id },
  data
});

exports.remove = (id) => prisma.task.delete({ where: { id } });