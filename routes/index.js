var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeCopntroller');
const flexBoxController = require('../controllers/flexBoxCopntroller');

/* GET home page. */

router.get('/',homeController.home);
router.get('/flexBox',flexBoxController.flexBox);
module.exports = router;
