FROM node:16

# Créer et définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Installer netcat pour la vérification de la BDD
RUN apt-get update && apt-get install -y netcat

# Copier le fichier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du code source
COPY . .

# Ajouter le script d'attente
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Commande de démarrage
CMD ["/wait-for-it.sh"]
