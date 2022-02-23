const express = require('express');
const router = express.Router();

let controller = require('../controllers/mainController');

router.get("/", controller.index);

module.exports = router;