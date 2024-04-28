const connection = require('../models/config'); // Update the path as per your project structure
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const rdvform = (req, res) => {
    const { name, surname, barbername, services, date, time, phone, email, text } = req.body;
    console.log(req.user);
    const queryString = 'INSERT INTO rdv (name,user_id, surname, barbername, services, date, time, phone, email, text) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(queryString, [name, req.user.userId, surname, barbername, services, date, time, phone, email, text], (error, results, fields) => {
      if (error) {
        console.error('Error creating data: ' + error);
        res.status(500).json({ error: error.message });
        return;
      }
      res.json({ message: 'Data created successfully', id: results.insertId });
    });
  }

  const sendEmail = async (req, res) => {
    const { to, subject, message } = req.body;
    try {
      // Création transport 
    let transporter = nodemailer.createTransport({
    // Configuration
    service: 'gmail',
    secure: false,
    auth: {
    user: 'chriazo01@gmail.com', 
    pass: 'xcomyehtfoeycsqm' // Clé pour avoir accés
    },
    tls: {
      rejectUnauthorized: false
      }
    });
    
    // Envoie dun email avec le transporteur
    let info = await transporter.sendMail({
      from: '"BarberSaloon" chriazo01@gmail.com',
      to: to,
      subject: subject,
      text: message
    });
    
    console.log('Message sent: %s', info.messageId);
    res.send('Email envoyé avec succès');
    } catch (error) {
    console.error("Erreur lors de l'envoie de l'email:", error);
    res.status(500).send('Internal Server Error');
    }
    }

  module.exports = { rdvform, sendEmail};
