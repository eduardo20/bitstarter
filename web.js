#!/usr/bin/env node

var fs = require('fs');
var data =fs.readFileSync('index.html');
console.log( data.toString('utf8'));

//  console.log(data);


