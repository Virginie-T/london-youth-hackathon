'use strict';

var tape = require('wrapping-tape');
var createClient = require('../../dist/redis/client.js').default;
var createServer = require('../../dist/server.js').default;

var client = null;
var server = null;

var tests = tape({
  setup: function setup(t) {
    client = createClient({ env: 'TEST' });
    server = createServer(client);
    t.end();
  },

  teardown: function teardown(t) {
    server.stop();
    client.quit();
    t.end();
  }
});

tests('Check auth is working', function (t) {
  server.inject({ method: 'GET', url: '/login-with-twitter' }, function (res) {
    var actual = res.statusCode;
    var expected = 302;
    t.equal(expected, actual, 'Assert login with twitter route initiates a redirect');

    actual = res.headers.hasOwnProperty('set-cookie');
    t.ok(actual, 'Assert cookie is being set');
  });
  t.end();
});