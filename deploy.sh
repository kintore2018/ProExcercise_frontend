#!/usr/bin/env bash
SCRIPT_HOME=$(cd $(dirname $0) && pwd)
cd $SCRIPT_HOME

yarn ci
ng build --prod && firebase deploy
