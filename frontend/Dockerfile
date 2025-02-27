# Dockerfile pour frontend (Vue.js)
FROM node:16

# Créer et définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier package.json et package-lock.json (si disponible)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source dans le conteneur
COPY . .

# Construire l'application Vue.js
RUN npm run build

# Utiliser un serveur léger pour servir les fichiers statiques (par exemple, nginx)
FROM nginx:alpine

# Copier les fichiers buildés dans le répertoire public d'Nginx
COPY --from=0 /usr/src/app/dist /usr/share/nginx/html

# Exposer le port 80 pour le serveur
EXPOSE 80

# Lancer Nginx en arrière-plan
CMD ["nginx", "-g", "daemon off;"]
