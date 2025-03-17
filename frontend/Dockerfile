# Étape 1 : Construction de l'application Vue.js
FROM node:16 AS builder

# Créer et définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier package.json et package-lock.json (si disponible)
COPY package*.json ./

COPY nginx.conf /etc/nginx/conf.d/default.conf


# Installer les dépendances avec npm ci pour des installations reproductibles
RUN npm ci

# Copier tout le code source dans le conteneur
COPY . .

# Construire l'application Vue.js
RUN npm run build

# Étape 2 : Servir l'application avec Nginx
FROM nginx:alpine

# Copier les fichiers construits depuis l'étape de build dans le répertoire public d'Nginx
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Exposer le port 80 pour le serveur
EXPOSE 80

# Lancer Nginx en arrière-plan
CMD ["nginx", "-g", "daemon off;"]
