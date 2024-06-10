
-- Creation de la base de donnees
CREATE DATABASE IF NOT EXISTS test;


CREATE TABLE utilisateur (
    id_utilisateur INT PRIMARY KEY,
    avatar VARCHAR(20),
    email VARCHAR(254),
    password VARCHAR(300),
    sexe VARCHAR(1),
    nom VARCHAR(15),
    prenom VARCHAR(15),
    date_naissance DATE,
    taille INT(3),
    taux_activite_physique INT(1)
);

CREATE TABLE suivi_quotidien (
    id_suivi INT PRIMARY KEY,
    id_utilisateur INT,
    date DATE,
    calories_calculees INT(5),
    poids_du_jour INT(3)
);

CREATE TABLE produit (
    id_produit INT PRIMARY KEY,
    id_suivi INT,
    date_ajout DATE,
    libelle_produit VARCHAR(50),
    type_produit VARCHAR(30),
    proteines INT(3),
    glucides INT(3),
    lipides INT(3),
    calories_produit INT(5),
    grammage_produit INT(5)
);

-- Ajout des cles etrangères après la creation des tables
ALTER TABLE suivi_quotidien
ADD FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur);

-- Ajout de la clé étrangère id_suivi dans la table produit
ALTER TABLE produit
ADD FOREIGN KEY (id_suivi) REFERENCES suivi_quotidien(id_suivi);
