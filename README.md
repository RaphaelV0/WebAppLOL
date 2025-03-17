
# League of Legends Web Application

## Introduction
Cette application web permet de découvrir les personnages de *League of Legends* avec leurs statistiques, sorts, skins, et plus encore. L'utilisateur peut interagir avec les données des champions, telles que leurs statistiques et ajuster leur niveau pour voir les dégâts dynamiques.

## Technologies utilisées

### Backend
- **Framework** : Express.js
- **Base de données** : MySQL
- **Langage** : JavaScript (Node.js)

### Frontend
- **Framework** : Vue.js
- **Langage** : JavaScript, HTML, CSS

### Infrastructure
- **Outils** : Docker, Docker Compose

### Conteneurs
- **Backend** : Express.js
- **Base de données** : MySQL
- **Frontend** : Vue.js

## Démarrer le projet

### 1. Clonez le projet
Clonez ce dépôt sur votre machine locale :

```bash
git clone <url-du-dépôt>
```

### 2. Installation des dépendances
Dans le dossier du projet, exécutez la commande suivante pour installer les dépendances de chaque service (backend et frontend) :
Attention, il faut exécuter la commande avec une connexion internet qui ne bloque pas la récupération des données des champions depuis l'api de Riot Games.
```bash
docker-compose up --build
```

Cela construira et démarrera les services définis dans le fichier `docker-compose.yml`, y compris :
- MySQL pour la base de données.
- Express.js pour l'API backend.
- Vue.js pour le frontend.

### 3. Accédez à l'application
- **Backend** : Accédez à `http://localhost:3000` pour interagir avec l'API.
- **Frontend** : Accédez à `http://localhost:8080` pour voir l'interface utilisateur du projet.

### 4. Accédez à PhpMyAdmin
PhpMyAdmin est accessible à `http://localhost:8081` pour gérer la base de données MySQL.

## Évolution du projet

### Fonctionnalités en cours :
- **Swagger** a été intégré à l'API pour la documentation interactive.
- Le backend est en place pour récupérer et stocker les données des champions dans la base de données.
- Des routes ont été ajoutées pour afficher les champions, leurs statistiques, sorts et skins.

### Prochaines étapes :
- Développement de la partie **Frontend Vue.js** pour afficher dynamiquement les données des champions, avec l'ajustement des niveaux et des dégâts des sorts.
- Intégration des **astuces des champions** et gestion des **tags** associés aux sorts.
- Implémentation de **routes et contrôleurs** supplémentaires pour une interaction complète avec l'utilisateur.

## Problèmes connus
- Les **astuces des champions** ne sont pas encore récupérées.
- La gestion des **tags** associés aux sorts est à implémenter.
- Le **frontend** pour l'affichage dynamique des statistiques et des dégâts des sorts sera développé prochainement.