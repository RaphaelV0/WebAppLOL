## Raphaël Verchain

# League of Legends Web Application

## 📖 Introduction
Ce projet est une application web permettant de découvrir les personnages de League of Legends et leurs détails, tels que leurs statistiques, sorts, skins, et plus encore. L'utilisateur pourra interagir avec les données en choisissant un personnage et en ajustant son niveau pour voir les stats et dégâts dynamiques.

## ⚙️ Technologies utilisées

### Backend
- **Framework** : Express.js (anciennement Sails.js, remplacé après des problèmes techniques)
- **Base de données** : MySQL
- **Langage** : JavaScript (Node.js)

### Frontend
- **Framework** : Vue.js
- **Langage** : JavaScript, HTML, CSS

### Infrastructure
- **Outils** : Docker, Docker Compose

### Conteneurs :
- **Backend** : Express.js
- **Base de données** : MySQL
- **Frontend** : Vue.js

## 📋 Tâches réalisées

### 1. Mise en place de la structure du projet
- **Dockerfile** pour l'environnement de développement.
- **Vue.js** pour la partie front-end.
- **API Express.js** pour la partie back-end (anciennement Sails.js).
- **Docker Compose** pour gérer les services (API, base de données, etc.).
- **PhpMyAdmin** pour la gestion de la base de données MySQL.
- **MySQL** comme base de données.

### 2. Conception de la base de données
- La structure de la base de données a été définie et mise en place. Cette base de données permet de stocker les informations des champions de *League of Legends*, telles que les statistiques, les sorts, les skins, et plus encore.

#### Schéma de la base de données
![Schéma de la base de données](assets/MCD2.png)

### 3. Récupération des données via l'API Riot
- Récupération des informations des champions (nom, titre, histoire, etc.) depuis l'API de Riot Games.
- Pour chaque champion, récupération des données détaillées (passifs, skins, statistiques, sorts, etc.).
- Insertion des données dans la base de données MySQL pour chaque champion, incluant :
  - Description du champion.
  - Passifs et sorts associés avec leurs statistiques.
  - Skins, y compris l'image du skin par défaut et les autres skins disponibles.
  - Statistiques du champion (points de vie, mana, armure, etc.).

### 4. Maquette du site web
- Début de la création de la maquette du site web sur **Figma**.

#### Maquette du site web
![Maquette du site web](assets/MaquetteV1.png)

### 5. Ajout de Swagger à l'API
- Intégration de **Swagger** pour documenter l'API et rendre l'interaction avec les différentes routes plus intuitive. Swagger permet de générer une documentation interactive de l'API pour faciliter les tests et l'intégration avec d'autres services.

### 6. Mise en place des routes pour afficher les différentes données de la base de données
- Ajout des routes permettant d'afficher les différentes données liées aux champions, notamment :
  - **Statistiques** : Récupérer les statistiques d'un champion spécifique.
  - **Sorts** : Récupérer les sorts d'un champion.
  - **Skins** : Récupérer les skins disponibles pour un champion.
  - **Passifs** : Récupérer les passifs d'un champion.

Ces routes permettent désormais de récupérer les informations détaillées des champions, comme les statistiques, les sorts, et les skins, directement depuis la base de données.

## 📝 À faire plus tard

- Finaliser la création de la base de données avec toutes les données supplémentaires comme les astuces et les relations entre champions.
- Ajouter la fonctionnalité pour interagir avec les données via l'interface utilisateur (choix du champion, ajustement des niveaux, etc.).
- Implémenter la gestion dynamique des tags et de leur association avec les sorts.
- **Frontend avec Vue.js** : Développer la partie frontend pour interagir avec l'API et afficher les données dynamiquement. Cela inclut l'affichage dynamique des statistiques et des dégâts des sorts en fonction du niveau du champion, allant de niveau 1 à 18.

---

## **Changements récents dans le projet**

### **Passage de Sails.js à Express.js**
La structure de l'API a été complètement refaite en utilisant **Express.js** au lieu de **Sails.js**. Ce changement a été effectué après plusieurs problèmes techniques rencontrés avec Sails.js qui ne permettaient pas de faire fonctionner correctement l'application.

### **Reconfiguration complète de l'environnement Docker**
L'environnement Docker a été totalement refait afin de rendre l'application fonctionnelle avec **Express.js** et **MySQL**. Cela inclut des modifications dans les fichiers Dockerfile et docker-compose.yml pour assurer une intégration correcte et une gestion fluide des conteneurs.

### **Première fonctionnalité de l'API : Affichage des champions**
L'API Express.js fonctionne actuellement et permet d'afficher la liste de tous les champions disponibles dans la base de données. La route permettant d'afficher cette liste est maintenant opérationnelle.

### **Ajout de Swagger pour la documentation API**
Swagger a été ajouté à l'API pour générer automatiquement la documentation de toutes les routes disponibles. Cela permet une meilleure gestion et exploration de l'API via une interface visuelle interactive.

### **Ajout des routes pour les données des champions**
Les routes permettant d'afficher les différentes données des champions, telles que les statistiques, les sorts, les skins, et les passifs, sont maintenant fonctionnelles. Cela permet d'accéder facilement aux informations détaillées de chaque champion depuis la base de données.

---

## **Problèmes connus / Points à améliorer**
- **Astuces** : Les astuces des champions ne sont pas récupérées pour l'instant. Il faudra les ajouter dans une prochaine étape.
- **Tags et Tag_Sorts** : La gestion des tags et leur association avec les sorts n'a pas encore été implémentée. Cela nécessitera de récupérer et associer les tags automatiquement.
- **Implémentation des contrôleurs et routes supplémentaires** : Actuellement, seule la route permettant d'afficher les champions est fonctionnelle. D'autres routes pour récupérer les détails des champions (stats, sorts, skins) doivent encore être développées.
- **Frontend** : La partie frontend pour l'affichage dynamique des statistiques et des dégâts des sorts du niveau 1 à 18 sera réalisée dans une prochaine étape.

---

## **Commentaires supplémentaires**

Cette mise à jour de l'application ajoute un backend robuste capable de structurer et stocker les données essentielles des champions de *League of Legends* dans une base de données relationnelle. L'intégration de **Swagger** permet maintenant de documenter et tester l'API plus facilement. Les prochaines étapes incluent le développement de la partie **Frontend avec Vue.js** pour afficher dynamiquement les statistiques et les dégâts des sorts en fonction du niveau du champion, ainsi que l'ajout des **routes et contrôleurs** nécessaires pour finaliser l'interaction avec l'utilisateur.
