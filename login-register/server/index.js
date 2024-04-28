const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Création apllication Express
const app = express();

// importation du file de connexion MySQL 
const db = require('./models/config');

// importation des routes
const routes = require('./routes/index');

const corsOptions = {
origin: 'http://localhost:5173', 
methods: ['GET', 'POST', 'OPTIONS'], // Permission methode HTTP
allowedHeaders: ['Content-Type', 'Authorization'], // Autorisation
credentials: true // Permission des crédentiels (cookies, authorization headers)
};

app.use(cors(corsOptions));

// Middleware pour analyser le requêtes bodies JSON
app.use(express.json());

// Analyse de l'url des requêtes bodies
app.use(express.urlencoded({ extended: true }));

// Analyses des cookies
app.use(cookieParser());

// Utilisations des routers routes pour manipuler les routes connéxion et inscrption
app.use('/', routes);

// Démarrage du server
const port = 3000;
app.listen(port, () => {
console.log(`Server running at http://localhost:${port}/`);
});