'use strict';

var _server = require('./server.js');

var _server2 = _interopRequireDefault(_server);

var _client = require('./redis/client.js');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('env2')('./config.env');


var client = (0, _client2.default)();
var server = (0, _server2.default)(client);

server.start(function (err) {
  if (err) {
    console.log('server error: ', err);
  } else {
    console.log('server listening on port: ' + server.info.port);
  }
});