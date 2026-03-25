const router = require('express').Router();
const controller = require('../controllers/task.controller');

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.put('/:id', controller.update);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.remove);

module.exports = router;