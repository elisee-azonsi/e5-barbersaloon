const express = require('express');
const router = express.Router();
const RDVController = require('../controllers/form-controller');
const authenticateToken = require('../middleware/auth-token');


//  Rdv routes 
router.post('/rdv',authenticateToken , RDVController.rdvform);
router.post('/send-email', RDVController.sendEmail);

module.exports = router;