#!/usr/bin/env bash

npm test && git add . && git commit -am "working" || git reset --hard