#!/bin/bash

# Chemin vers mysql
MYSQL_BIN="/Applications/MAMP/Library/bin/mysql"

# Définition du port
MYSQL_PORT="8889"
MYSQL_HOST="127.0.0.1" # ou 'localhost'

# Supprimer la base de données si elle existe
"$MYSQL_BIN" -h $MYSQL_HOST -P $MYSQL_PORT -u root -proot -e "DROP DATABASE IF EXISTS test;"

# Créer la bdd
"$MYSQL_BIN" -h $MYSQL_HOST -P $MYSQL_PORT -u root -proot -e "CREATE DATABASE IF NOT EXISTS test;"

# Utiliser la base de données pour exécuter les scripts SQL
"$MYSQL_BIN" -h $MYSQL_HOST -P $MYSQL_PORT -u root -proot test < v1/script_creation_v1.sql
"$MYSQL_BIN" -h $MYSQL_HOST -P $MYSQL_PORT -u root -proot test < v1/script_init_v1.sql

