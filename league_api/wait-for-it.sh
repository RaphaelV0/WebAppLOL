#!/bin/bash
# wait-for-db.sh : Script pour attendre que la base de données soit prête

echo "Waiting for the database to be ready..."
until nc -z -v -w30 mysql 3306; do
  echo "Waiting for database to be ready..."
  sleep 5
done

echo "Database is up, starting the API..."
node api.js
