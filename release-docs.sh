#!/bin/sh
npm run docs
cd examples
npx webpack -c webpack.config.js
cd ..
