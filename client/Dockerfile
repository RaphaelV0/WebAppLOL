# Étape 1 : Construire l'application Vue.js
FROM node:18 AS build

# Répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers de configuration
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape 2 : Servir l'application avec Nginx
FROM nginx:alpine

# Copier les fichiers construits dans le répertoire de Nginx
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Exposer le port sur lequel le frontend sera accessible
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
