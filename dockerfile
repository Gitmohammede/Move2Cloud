# Utiliser une image Node.js officielle
FROM node:18-alpine

# Créer un répertoire de travail
WORKDIR /app

# Copier les fichiers du projet
COPY package*.json ./
RUN npm install

COPY . .

# Exposer le port sur lequel l'application sera accessible
EXPOSE 3000

# Démarrer l'application
CMD ["node", "serveur.js"]
