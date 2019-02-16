#!/usr/bin/env bash
SCRIPT_HOME=$(cd $(dirname $0) && pwd)
cd $SCRIPT_HOME

npm ci
ng build --prod && firebase deploy
