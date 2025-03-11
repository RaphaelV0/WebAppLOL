FROM node:16

# Créer et définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Installer netcat pour vérifier la connexion à MySQL
RUN apt-get update && apt-get install -y netcat

# Copier le package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le code source
COPY . .

# Exposer le port de l'API
EXPOSE 3000

# Attendre que MySQL soit prêt avant de démarrer
CMD ["sh", "-c", "until nc -z -v -w30 mysql 3306; do echo '⏳ Waiting for MySQL...'; sleep 5; done && echo '✅ MySQL is ready! Starting API...' && node api.js"]
