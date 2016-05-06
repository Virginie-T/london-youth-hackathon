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
  method: ['GET', 'POST'],
  path: '/login-with-twitter',
  config: {
    auth: 'twitter',
    handler: function handler(request, reply) {
      if (request.auth.isAuthenticated) {
        var cred = request.auth.credentials;
        var secureData = {
          TOKEN: cred.token,
          TOKEN_SECRET: cred.secret
        };
        var jwToken = _jsonwebtoken2.default.sign(secureData, JWT_SECRET);
        request.cookieAuth.set({ twitterCookie: jwToken });
        reply.redirect('/');
      }
    }
  }
};