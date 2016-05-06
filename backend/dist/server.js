'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _serverHelpers = require('./helpers/server-helpers.js');

var _inert = require('inert');

var _inert2 = _interopRequireDefault(_inert);

var _bell = require('bell');

var _bell2 = _interopRequireDefault(_bell);

var _hapiAuthCookie = require('hapi-auth-cookie');

var _hapiAuthCookie2 = _interopRequireDefault(_hapiAuthCookie);

var _Hello = require('./routes/Hello.js');

var _Hello2 = _interopRequireDefault(_Hello);

var _Images = require('./routes/Images.js');

var _Images2 = _interopRequireDefault(_Images);

var _ReactUrls = require('./routes/ReactUrls.js');

var _ReactUrls2 = _interopRequireDefault(_ReactUrls);

var _Scripts = require('./routes/Scripts.js');

var _Scripts2 = _interopRequireDefault(_Scripts);

var _Login = require('./routes/Login.js');

var _Login2 = _interopRequireDefault(_Login);

var _UserRequest = require('./routes/UserRequest.js');

var _UserRequest2 = _interopRequireDefault(_UserRequest);

var _twitterAuthStrategies = require('./authStrategies/twitterAuthStrategies.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('env2')('./config.env');

// helper methods


// server plugins


// server routes


// auth strategies


var Plugins = [_inert2.default, _bell2.default, _hapiAuthCookie2.default];
var Routes = [_Login2.default, _Images2.default, _ReactUrls2.default, _Scripts2.default, _Hello2.default, _UserRequest2.default];

exports.default = function (client) {

  var server = new _hapi2.default.Server();

  server.connection({
    port: process.env.PORT || 4000,
    routes: {
      cors: true
    }
  });

  server.register(Plugins, _serverHelpers.handlePlugins);
  server.auth.strategy('twitter', 'bell', _twitterAuthStrategies.TwitterOauth);
  server.auth.strategy('session', 'cookie', _twitterAuthStrategies.TwitterCookie);
  server.route(Routes);

  return server;
};