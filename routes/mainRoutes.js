const express = require('express');
const router = express.Router();

let controller = require('../controllers/mainController');

router.get("/", controller.index);
router.get("/insert/project", controller.insert);
router.post("/insert/project", controller.createProject);


module.exports = router;