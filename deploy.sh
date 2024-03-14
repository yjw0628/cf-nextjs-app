#!/bin/bash

git add .
git commit -m 'fix: fixbug'
git push

npm run deploy

open https://0rz.fun