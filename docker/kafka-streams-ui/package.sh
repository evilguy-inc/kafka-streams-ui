#!/usr/bin/env bash

rm -rf ./include/angular-app/
mkdir -p ./include/angular-app/

cp ./../../*.js ./include/angular-app/
cp ./../../.angular-cli.json ./include/angular-app/
cp ./../../*.json ./include/angular-app/
cp -R ./../../src ./include/angular-app/
cp -R ./../../e2e ./include/angular-app/
