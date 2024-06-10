-- table 'utilisateur'
INSERT INTO utilisateur (id_utilisateur, avatar, email, password, sexe, nom, prenom, date_naissance, taille, taux_activite_physique)
VALUES
(1, 'woman-3.png', 'user1@example.com', '$2y$13$1el2gtb6VcR8ARgg.3KWKe0EvrioZO60B/HnPqanBcAdeMbAT9E2a', 'F', 'Dupont', 'Alice', '1990-01-01', 170, 2);

-- table 'suivi_quotidien'
INSERT INTO suivi_quotidien (id_suivi, id_utilisateur, date, calories_calculees, poids_du_jour)
VALUES
(1, 1, '2024-04-08', 2000, 60);


-- table 'produit'
INSERT INTO produit (id_produit, id_suivi, date_ajout, libelle_produit, type_produit, proteines, glucides, lipides, calories_produit, grammage_produit)
VALUES
(1, 1, '2024-04-08', 'Pomme', 'en:fruits', 12, 34, 56, 52, 100),
(2, 1, '2024-04-08', 'Poire', 'en:fruits', 10, 10, 10, 10, 200);