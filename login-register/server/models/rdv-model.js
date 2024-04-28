function createRDV(connection){
    // Création de la bdd RDV s'elle n'existe pas
    const createRDVTableQuery = `
    CREATE TABLE IF NOT EXISTS rdv (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      name VARCHAR(255) NOT NULL,
      surname VARCHAR(255) NOT NULL,
      barbername VARCHAR(255),
      services VARCHAR(255),
      date DATE,
      time VARCHAR(255),
      phone VARCHAR(20) NOT NULL,
      email VARCHAR(255) NOT NULL,
      text TEXT,
      FOREIGN KEY (user_id) REFERENCES users(user_id)
      );
      
    `;
    connection.query(createRDVTableQuery, (error) => {
      if (error) {
        console.error('Error creating users table:', error);
        return;
      }
      console.log('Users table created');
    });
  }
  
  module.exports = createRDV;
  




