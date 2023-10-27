const express = require('express');
const userController = require('../controllers/user.js');
const router = express.Router();

router.get('/', userController.getAllUser);
router.get('/:id', userController.getUserByID);
router.post('/', userController.createUser);
router.put('/:id', userController.editUserFull);
router.patch('/:id', userController.editUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;