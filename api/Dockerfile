# Utiliser une image Node.js officielle
FROM node:18

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port sur lequel Sails.js va tourner
EXPOSE 1337

# Démarrer le serveur Sails.js
CMD ["npm", "start"]
