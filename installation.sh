#!/bin/bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash

nvm install node

nvm use node

npm install npm@latest -g

npm install -g codeceptjs webdriverio

npm install frisby --save-dev