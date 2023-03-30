#!/usr/bin/env node 
const { execSync } = require('child_process');

if (process.argv.length != 3) {
    console.error('Must provide package name.');
    process.exit(1);
  }

const package = process.argv[2];

try{
execSync(`npm uninstall ${package}`);
execSync(`npm install -D ${package}`);
console.log(`Package ${package} has been devified.`);
}
catch(error){
    console.log(`Couldn't devify. Make sure ${package} is a valid package name.`)
}

