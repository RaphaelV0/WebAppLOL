# League of Legends Web Application

## Introduction
Cette application web permet de découvrir les personnages de *League of Legends* avec leurs statistiques, sorts, skins et plus encore. L'utilisateur peut interagir avec les données des champions, telles que leurs statistiques et ajuster leur niveau pour voir les dégâts dynamiques.

## Technologies utilisées

### Backend
- **Framework** : Express.js
- **Base de données** : MySQL
- **Langage** : JavaScript (Node.js)

### Frontend
- **Framework** : Vue.js
- **Langages** : JavaScript, HTML, CSS
- **Style** : Le CSS est en place pour essayer de ressembler à la maquette, bien que certains éléments soient encore manquants.

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

> **Attention** : Assurez-vous d'avoir une connexion internet qui ne bloque pas la récupération des données des champions depuis l'API de Riot Games.

```bash
docker-compose up --build
```

Cela construira et démarrera les services définis dans le fichier `docker-compose.yml`, y compris :
- MySQL pour la base de données.
- Express.js pour l'API backend.
- Vue.js pour le frontend.

### 3. Accédez à l'application
- **Backend** : `http://localhost:3000` pour interagir avec l'API.
- **Frontend** : `http://localhost:8080` pour voir l'interface utilisateur du projet.
- **PhpMyAdmin** : `http://localhost:8081` pour gérer la base de données MySQL.

## Évolution du projet

### Fonctionnalités en place :
- **Swagger** a été intégré à l'API pour la documentation interactive.
- Le backend est fonctionnel et récupère les données des champions depuis Riot Games.
- Les routes pour afficher les champions, leurs statistiques, sorts et skins sont en place.
- Le **frontend Vue.js** est en place avec un design CSS proche de la maquette.

### Fonctionnalités en cours et prochaines étapes :
- Finalisation de certains éléments manquants dans le frontend (tags, astuces des champions, etc.).
- Développement de l'affichage dynamique des statistiques et des dégâts des sorts.
- Complétion des données de l'API qui manquent encore certaines informations.
- Intégration potentielle d'un modèle 3D pour remplacer l'image statique des champions, en utilisant [ce site](https://modelviewer.lol/champions).
- Ajout futur des **items** pour les personnages, permettant un ajustement dynamique des statistiques.

## Problèmes connus
- Appuyer sur tab pour rentrer le nom d'un champion à la place de cliquer sur la barre de recherche
- Les **astuces des champions** ne sont pas encore récupérées.
- La gestion des **tags** associés aux sorts est à implémenter.
- L'affichage dynamique des statistiques et des dégâts des sorts n'est pas encore fonctionnel.
- Certaines données manquent encore dans l'API.

Ce projet est en constante évolution et de nouvelles fonctionnalités seront ajoutées au fur et à mesure ! 🚀

