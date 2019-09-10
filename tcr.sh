#!/usr/bin/env bash

npm test && git add . && git commit -ma "working" # || (git clean -fx; git reset --hard)