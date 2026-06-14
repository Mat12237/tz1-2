const router = require('express').Router();
const ctrl = require('../controllers/clientController');
const validate = require('../middleware/validate');
const { createClientRules, updateClientRules, updateStatusRules } = require('../validators/clientValidators');

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.get('/:id/detail', ctrl.getDetail);
router.post('/', createClientRules, validate, ctrl.create);
router.put('/:id', updateClientRules, validate, ctrl.update);
router.patch('/:id/status', updateStatusRules, validate, ctrl.updateStatus);
router.post('/:clientId/trainer/:trainerId', ctrl.assignTrainer);
router.post('/:clientId/locker/:lockerId', ctrl.assignLocker);
router.post('/:clientId/additionalServices/:serviceId', ctrl.addService);

module.exports = router;
