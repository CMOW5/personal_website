#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git add build && git commit -m "Initial dist subtree commit"

git subtree push --prefix build production master

# npm run build
# git checkout -b dist
# git commit -m "build folder"
# git subtree push --prefix build production master

# git push production `git subtree split --prefix build dist`:master --force
