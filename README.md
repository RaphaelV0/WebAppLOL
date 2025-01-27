## Raphaël Verchain

# League of Legends Web Application - Semaine 1

## 📖 Introduction
Ce projet est une application web permettant de découvrir les personnages de **League of Legends** et leurs détails, tels que leurs statistiques, sorts, skins, et plus encore. L'utilisateur pourra interagir avec les données en choisissant un personnage et en ajustant son niveau pour voir les stats et dégâts dynamiques. 

Durant la **semaine 1**, nous avons travaillé sur la conception et la préparation de l'application.

---

## ⚙️ Technologies utilisées
### Backend
- **Framework** : Sails.js
- **Base de données** : MySQL
- **Langage** : JavaScript (Node.js)

### Frontend
- **Framework** : [React / Vue.js / Angular] (à choisir)
- **Langage** : JavaScript, HTML, CSS

### Infrastructure
- **Outils** : Docker, Docker Compose
- **Conteneurs** :
  - Backend : Sails.js
  - Base de données : MySQL
  - Frontend : Framework au choix

---

## 📋 Tâches réalisées
### 1. Conception
- **Backend :**
  - Création d'un schéma de base de données pour les entités principales :
    - Personnages, Skins, Sorts, Statistiques.
  - Définition des relations entre les entités :
    - Ex : Un personnage peut avoir plusieurs skins et plusieurs sorts.

### 2. Configuration de l'environnement
- **Backend :**
  - Installation et configuration de Sails.js.

- **Infrastructure :**
  - Création d’un fichier `docker-compose.yml` pour orchestrer les services :
    - Conteneur pour l’API (Sails.js).
    - Conteneur pour MySQL.
  - Test des conteneurs avec `docker-compose up`.
![Schéma relationnel du projet](MCD.png)
