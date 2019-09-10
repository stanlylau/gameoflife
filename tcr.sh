#!/usr/bin/env bash

npm test && git commit -am "working" || git reset --hard