#!/usr/bin/env node 
const { execSync } = require('child_process');

if (process.argv.length != 3) {
    console.error('Must provide package name.');
    process.exit(1);
  }

const package = process.argv[2];

try{
execSync(`npm uninstall -D  ${package}`);
execSync(`npm install ${package}`);
console.log(`Package ${package} has been undevified.`);
}
catch(error){
    console.log(`Couldn't undevify. Make sure ${package} is a valid package name.`)
}

