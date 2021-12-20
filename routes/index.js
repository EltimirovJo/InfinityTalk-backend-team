const { Router } = require('express');

const router = Router();

router.use('/users', require('./users.route'));
router.use('/languages', require('./languages.route'));

module.exports = router;
