const connection = require('../models/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Fonction qui va manipuler les données de l'utilisateur
const register = (req, res) => {

  //Extraire les données d'enregistrement de la demande du body
  const { name, surname, username, email, password, phone } = req.body;
  console.log(name, surname, username, email, password, phone);

  //Validation des données inséré
  if (!name || !surname || !username || !email || !password || !phone) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Hashage du mot de passe 
  bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
    if (hashErr) {
      console.error('Error hashing password:', hashErr);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Stockage de l'utilisateur dans la bdd
    const insertUserQuery = 'INSERT INTO users (user_name, user_surname, user_username, user_email, user_password, user_phone_num) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(insertUserQuery, [name, surname, username, email, hashedPassword, phone], (insertErr, result) => {
      if (insertErr) {
        console.error('Error inserting user data:', insertErr);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      console.log('User registered successfully');
      res.status(201).json({ message: 'User registered successfully' });
    });
  });

};

// Fonction pour manipuler la connexion
const login = (req, res) => {

  // Extraire les données depui la demande du body
  const { email, password } = req.body;

  // Validation des données
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Vérification de l'existance des identifiants dans la base de données
  const query = 'SELECT * FROM users WHERE user_email = ?';
  connection.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
     if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];
    bcrypt.compare(password, user.user_password, (bcryptErr, match) => {
      if (bcryptErr) {
        console.error('Error comparing passwords:', bcryptErr);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // vérification mdp
      if (!match) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // création du mdp
      const token = jwt.sign({ userId: user.user_id, userEmail: user.user_email }, 'meri_secret_key', { expiresIn: '1h' });

      // insérer token dans le cookie
      res.cookie('uuid', token, { httpOnly: true });


      res.status(200).json({ message: 'Login successful', token});
    });
  });
  }

module.exports = { register,login };
