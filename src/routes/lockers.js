const router = require('express').Router();
const ctrl = require('../controllers/lockerController');

router.get('/', ctrl.getAll);

module.exports = router;
