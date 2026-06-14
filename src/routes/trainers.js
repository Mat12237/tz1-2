const router = require('express').Router();
const ctrl = require('../controllers/trainerController');
const validate = require('../middleware/validate');
const { createTrainerRules, updateTrainerRules, updateStatusRules } = require('../validators/trainerValidators');

router.get('/', ctrl.getAll);
router.get('/:id/detail', ctrl.getDetail);
router.post('/', createTrainerRules, validate, ctrl.create);
router.put('/:id', updateTrainerRules, validate, ctrl.update);
router.patch('/:id/status', updateStatusRules, validate, ctrl.updateStatus);

module.exports = router;
