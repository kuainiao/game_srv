// file http-client.js
var https = require('https');
var fs = require('fs');

var options = {
  hostname: "www.wsserver.com",
  port: 8082,
  path: '/toppage_handler',
  methed: 'GET',
  key: fs.readFileSync('./client.key'),
  cert: fs.readFileSync('./client.crt'),
  ca: [fs.readFileSync('./ca.crt')]
};

options.agent = new https.Agent(options);

var req = https.request(options, function(res) {
  res.setEncoding('utf-8');
  res.on('data', function(d) {
    console.log(d);
  });
});
req.end();

req.on('error', function(e) {
  console.log(e);
});
