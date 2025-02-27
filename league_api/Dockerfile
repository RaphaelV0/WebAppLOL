# Utilisation de l'image Node.js officielle
FROM node:16

# Créer et définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Installer wget pour télécharger wait-for-it
RUN apt-get update && apt-get install -y wget

# Télécharger wait-for-it.sh
RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && chmod +x wait-for-it.sh

# Copier le package.json et package-lock.json (si disponible) dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source dans le conteneur
COPY . .

# Exposer le port sur lequel ton API écoute
EXPOSE 3000

# Commande par défaut pour attendre que db_loader soit prêt avant de démarrer l'API
CMD ./wait-for-it.sh db_loader:3000 --timeout=30 --strict -- node api.js
