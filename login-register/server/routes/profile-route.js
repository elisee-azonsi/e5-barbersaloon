const connection = require('../models/config');
const express = require('express');
const authenticateToken = require('../middleware/auth-token');


const router = express.Router();

router.get('/', authenticateToken, async (req, res) => {

const { userId } = req.user;

const getUserQuery = `SELECT 
                            users.user_name, 
                            users.user_surname, 
                            users.user_email, 
                            users.user_phone_num, 
                            rdv.barbername,
                        CONCAT(
                            DATE_FORMAT(rdv.date, '%d-%m-%Y'), ':', rdv.barbername
                        ) AS appointment
                        FROM 
                            users
                        INNER JOIN 
                            rdv ON users.user_id = rdv.user_id
                        WHERE 
                            users.user_id = ?`;

connection.query(getUserQuery, [userId], (selectErr, result) => {
if (selectErr) {
console.error('Error getting user data:', selectErr);
return res.status(500).json({ error: 'Internal Server Error' });
}
//console.log('User registered successfully');
res.status(201).json({ result });
});

});

module.exports = router;



