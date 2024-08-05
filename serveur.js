const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware pour le parsing des données
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware pour servir des fichiers statiques
app.use(express.static(__dirname));

// Endpoint pour stocker les réponses
app.post('/store-responses', (req, res) => {
    const responses = req.body;

    fs.writeFile('responses.json', JSON.stringify(responses, null, 2), (err) => {
        if (err) {
            return res.status(500).send('Erreur lors de l\'enregistrement des réponses.');
        }
        res.send('Réponses enregistrées avec succès.');
    });
});

// Endpoint pour récupérer les réponses
app.get('/get-responses', (req, res) => {
    fs.readFile('responses.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erreur lors de la lecture des réponses.');
        }
        if (data) {
            res.json(JSON.parse(data));
        } else {
            res.json([]);
        }
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
