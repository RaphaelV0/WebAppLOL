FROM node:16

# Créer et définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Installer wget pour télécharger wait-for-it
RUN apt-get update && apt-get install -y wget

# Télécharger wait-for-it.sh
RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && chmod +x wait-for-it.sh

# Copier le fichier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du code source
COPY . .

# Commande de démarrage
CMD ./wait-for-it.sh mysql:3306 --timeout=30 --strict -- node app.js
