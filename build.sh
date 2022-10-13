#!/bin/bash -e

if ! type fastlane > /dev/null 2>&1; then
  if type brew > /dev/null 2>&1; then
    brew install fastlane
  else
    sudo gem install fastlane -NV
  fi
fi
fastlane add_plugin versioning
script_path=$(cd $(dirname ${0}); pwd)
cp -r ${script_path}/fastlane ./
fastlane bump