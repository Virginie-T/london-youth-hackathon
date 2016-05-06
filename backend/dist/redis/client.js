'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bluebird2.default.promisifyAll(_redis2.default.RedisClient.prototype);
_bluebird2.default.promisifyAll(_redis2.default.Multi.prototype);

exports.default = function (opts) {

  var config = {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    db: process.env.REDIS_DB || 0
  };

  if (opts && opts.env === 'TEST') config.db = 5;

  return _redis2.default.createClient(config);
};