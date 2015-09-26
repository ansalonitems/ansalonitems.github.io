#!/usr/bin/env bash

npm run build
git checkout master
ls * | grep -v public | xargs rm -rf
cp -rp public/* .
git add -A
git commit -m "New build push `date`"
