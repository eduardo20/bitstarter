#!/usr/bin/env node
buf = new Buffer(256);
var fs = require('fs');
fs.readFile('index.html', 'utf8', function (err, data) {
// buf.write(data);

     if (err) throw err;

//len = buf.write(data,'\u00bd + \u00bc = \u00be', 0);
//console.log(len + " bytes: " + buf.toString('utf8', 0, len));

  console.log(data);
});

