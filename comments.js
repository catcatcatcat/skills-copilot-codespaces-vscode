// Create web server

const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');

router.get('/', commentsController.getAllComments);
router.post('/', commentsController.createComment);
router.get('/:id', commentsController.getComment);
router.put('/:id', commentsController.updateComment);
router.delete('/:id', commentsController.deleteComment);

module.exports = router;
