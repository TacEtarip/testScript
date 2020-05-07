#!/usr/bin/env node

//npm link

const cp = require('child_process');

cp.spawn('explorer', ["https://google.com"]);

console.log('This is a testScript');