#!/bin/bash

echo "⏳ Waiting for MySQL to be ready..."
until nc -z -v -w30 mysql 3306; do
  echo "⏳ Waiting for database to be ready..."
  sleep 5
done

echo "✅ Database is up! Starting data import..."
node app.js

echo "✅ Data import finished. Exiting..."