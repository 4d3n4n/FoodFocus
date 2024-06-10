# 🍌 FoodFocus

Application Symfony + Twig pour la gestion de diète, liée à l'API OpenFoodFacts afin d'obtenir des informations sur les aliments pour le calcul des macros.

<br>

## 📜 Description

FoodFocus permet aux utilisateurs de créer un profil et de le remplir avec des informations biométriques pour calculer les calories à consommer chaque jour en fonction de leur activité physique. Les utilisateurs peuvent rechercher des aliments ou des plats grâce à une barre de recherche connectée à l'API OpenFoodFacts. En ajoutant des aliments avec le grammage consommé, l'application suit la consommation calorique et les macros journalières.

<br>

### Fonctionnalités

- **Profil Utilisateur** : Remplissez votre profil avec des informations biométriques pour des recommandations personnalisées.
- **Recherche d'Aliments** : Recherchez des aliments ou des plats grâce à l'API OpenFoodFacts.
- **Suivi des Consommations** : Ajoutez des aliments consommés et suivez votre consommation calorique.
- **Graphiques de Suivi** : Visualisez votre consommation sur une semaine, un mois et une année.
- **Suivi des Macros** : Obtenez un aperçu des macros consommées chaque jour.
- **Mise à Jour Quotidienne** : Ajoutez vos aliments chaque jour pour un suivi précis.

<br>

## 🛠️ Stack Technique

- **PHP Symfony 7**
- **MySQL**
- **Doctrine ORM**
- **Twig Template**
- **JavaScript**
- **CSS**
- **HTML**

<br>

## 📽️ Démo

L'application n'est pas encore terminée. Une vidéo de démonstration.

https://github.com/4d3n4n/FoodFocus/assets/140979426/378ea507-fc46-4b4c-abe7-ab25dd8de1ef


<br>

## 🚀 Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/FoodFocus.git
   cd FoodFocus
   ```
<br>
   
2. Installez les dépendances :
   ```bash
   composer install
   npm install
   ```
<br>

3. Configurez la base de données dans le fichier .env :
   ```env
   DATABASE_URL="mysql://user:password@127.0.0.1:3306/foodfocus"
   ```
<br>

4. Créez la base de données et exécutez les migrations :
   ```bash
   php bin/console doctrine:database:create
   php bin/console doctrine:migrations:migrate
   ```
<br>

5. Démarrez le serveur Symfony :
   ```bash
   symfony serve
   ```
<br>

  L'application devrait maintenant être accessible localement dans votre navigateur web à l'adresse http://localhost:8000.

<br>

---
Merci d'utiliser FoodFocus ! 🍽️📊
