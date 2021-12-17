const { Router } = require('express');
const upload = require('../middlewares/upload');

const router = Router();

const { usersController } = require('../controllers/users.controller');

router.get('/', usersController.getAllUsers);
router.post('/regist', usersController.registerUser);
router.patch('/:id/updateImg', upload.single('img'), usersController.updateImg);
router.post('/login', usersController.login);

module.exports = router;
