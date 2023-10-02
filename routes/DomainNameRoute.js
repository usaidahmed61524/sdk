const express = require('express');
const DomainNameController = require('../controller/DomainNameController');

const router = express.Router();

router.post('/checkdomain', DomainNameController.checkDomainExistence);



module.exports = router;
