#!/bin/zsh

set -e

# Verbose deploy script for mytaste-server

echo "[1/6] Pulling latest code from git..."
git pull

echo "[2/6] Installing dependencies..."
npm ci

echo "[3/6] Building the project..."
npm run build

echo "[4/6] Deploying with pm2 (name: mytaste-server)..."

# Check if pm2 process exists, reload if so, otherwise start
if pm2 list | grep -q 'mytaste-server'; then
  echo "[5/6] Reloading existing pm2 process..."
  pm2 reload mytaste-server
else
  echo "[5/6] Starting new pm2 process..."
  pm2 start build-node/src/server.js --name mytaste-server
fi

echo "[6/6] Deployment complete!"

