'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('env2')('config.env');

var JWT_SECRET = process.env.JWT_SECRET;
exports.default = {
  method: 'GET',
  path: '/user-request',
  config: {
    auth: 'session',
    handler: function handler(request, reply) {
      if (request.auth.isAuthenticated) {
        var decodedData = _jsonwebtoken2.default.verify(request.auth.credentials.twitterCookie, JWT_SECRET);
        reply('user can make request with tokens');
      } else {
        reply.redirect('/login-with-twitter');
      }
    }
  }
};