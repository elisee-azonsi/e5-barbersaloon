function createTables(connection){
    // Création de la bdd Users s'elle n'existe pas
    const createUserTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        user_id INT AUTO_INCREMENT PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL,
        user_surname VARCHAR(255) NOT NULL,
        user_username VARCHAR(255) NOT NULL,
        user_email VARCHAR(255) UNIQUE NOT NULL,
        user_password VARCHAR(255) NOT NULL,
        user_phone_num VARCHAR(20) NOT NULL
      )
    `;
    connection.query(createUserTableQuery, (error) => {
      if (error) {
        console.error('Error creating users table:', error);
        return;
      }
      console.log('Users table created');
    });
  }
  
  module.exports = createTables;
  