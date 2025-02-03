CREATE DATABASE IF NOT EXISTS league_db;
USE league_db;
-- Table Champions
CREATE TABLE IF NOT EXISTS Champions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cle INT UNIQUE NOT NULL,
    nom VARCHAR(255) NOT NULL,
    titre VARCHAR(255),
    histoire TEXT,
    description TEXT,
    roles VARCHAR(255),
    type_ressource VARCHAR(255)
);

-- Table Passifs
CREATE TABLE IF NOT EXISTS Passifs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    champion_id INT NOT NULL,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(255),  -- Champ pour l'image du passif
    FOREIGN KEY (champion_id) REFERENCES Champions(id) ON DELETE CASCADE
);

-- Table Skins
CREATE TABLE IF NOT EXISTS Skins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    champion_id INT NOT NULL,
    skin_id INT NOT NULL UNIQUE,
    nom VARCHAR(255) NOT NULL,
    chromas BOOLEAN DEFAULT FALSE,
    image VARCHAR(255),  -- Champ pour l'image du skin
    FOREIGN KEY (champion_id) REFERENCES Champions(id) ON DELETE CASCADE
);

-- Table Statistiques
CREATE TABLE IF NOT EXISTS Statistiques (
    id INT AUTO_INCREMENT PRIMARY KEY,
    champion_id INT NOT NULL,
    pv FLOAT,
    pv_par_niveau FLOAT,
    mana FLOAT,
    mana_par_niveau FLOAT,
    vitesse_deplacement FLOAT,
    armure FLOAT,
    armure_par_niveau FLOAT,
    resistance_magique FLOAT,
    resistance_magique_par_niveau FLOAT,
    portee_attaque FLOAT,
    regen_pv FLOAT,
    regen_pv_par_niveau FLOAT,
    degats_attaque FLOAT,
    degats_attaque_par_niveau FLOAT,
    vitesse_attaque FLOAT,
    vitesse_attaque_par_niveau FLOAT,
    FOREIGN KEY (champion_id) REFERENCES Champions(id) ON DELETE CASCADE
);

-- Table Sorts
CREATE TABLE IF NOT EXISTS Sorts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    champion_id INT NOT NULL,
    touche VARCHAR(50)NOT NULL,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    tooltip TEXT,
    type_cout VARCHAR(255),
    ressource VARCHAR(255),
    image VARCHAR(255),  -- Champ pour l'image du sort
    FOREIGN KEY (champion_id) REFERENCES Champions(id) ON DELETE CASCADE
);

-- Table Sorts_Stats
CREATE TABLE IF NOT EXISTS Sorts_Stats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sort_id INT NOT NULL,
    niveau INT NOT NULL,
    temps_rechargement FLOAT,
    cout FLOAT,
    portee FLOAT,
    FOREIGN KEY (sort_id) REFERENCES Sorts(id) ON DELETE CASCADE
);

-- Table Tags
CREATE TABLE IF NOT EXISTS Tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL UNIQUE
);

-- Table Tags_Sorts
CREATE TABLE IF NOT EXISTS Tags_Sorts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sort_id INT NOT NULL,
    tag_id INT NOT NULL,
    FOREIGN KEY (sort_id) REFERENCES Sorts(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES Tags(id) ON DELETE CASCADE
);

-- Table Astuces
CREATE TABLE IF NOT EXISTS Astuces (
    id INT AUTO_INCREMENT PRIMARY KEY,
    champion_id INT NOT NULL,
    type VARCHAR(10) NOT NULL,
    astuce TEXT NOT NULL,
    FOREIGN KEY (champion_id) REFERENCES Champions(id) ON DELETE CASCADE
);

-- Table Relations_Champions
CREATE TABLE IF NOT EXISTS Relations_Champions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    champion1_id INT NOT NULL,
    champion2_id INT NOT NULL,
    type_relation VARCHAR(255) NOT NULL,
    FOREIGN KEY (champion1_id) REFERENCES Champions(id) ON DELETE CASCADE,
    FOREIGN KEY (champion2_id) REFERENCES Champions(id) ON DELETE CASCADE
);
