const mysql = require('mysql');
const createUserTable = require('./user-model');
const createRDV = require('./rdv-model');

// Connèxion avec configuration MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
});

// Connexion à ma bdd MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database server:', err);
    return;
  }
  console.log('Connected to MySQL database server');

  // Création bdd 'barber-saloon' s'elle n'existe pas
  connection.query('CREATE DATABASE IF NOT EXISTS barber_saloon', (error) => {
    if (error) {
      console.error('Error creating database:', error);
      return;
    }
    console.log('Database "barber-saloon" created');

    // aller dans bdd 'barber-saloon'
    connection.query('USE barber_saloon', (useError) => {
      if (useError) {
        console.error('Error switching to database:', useError);
        return;
      }
      console.log('Switched to database "barber-saloon"');
      
      //création de la table User et RDV
      createUserTable(connection);
      createRDV(connection);
      
    });
  });
});

module.exports = connection;
