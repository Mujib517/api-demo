const express = require('express');
const booksCtrl = require('../controllers/booksCtrl.old');
const router = express.Router();

// REST api principle 1: uniform interface
// get:read, put: update, post: create, delete: delete, patch: partial update
router.get('/', booksCtrl.get);
router.get('/:id', booksCtrl.getById);
router.post('/', booksCtrl.post);
router.delete('/:id', booksCtrl.remove);
router.put('/:id', booksCtrl.update);
router.patch('/:id', booksCtrl.patch);


module.exports = router;