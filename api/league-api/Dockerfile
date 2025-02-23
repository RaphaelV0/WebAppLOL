# Utiliser une image officielle de Node.js comme base
FROM node:18

# Créer et définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier tous les fichiers du projet dans le conteneur
COPY . .

# Exposer le port 1337 pour l'application Sails
EXPOSE 1337

# Démarrer l'application Sails
CMD ["npm", "start"]
