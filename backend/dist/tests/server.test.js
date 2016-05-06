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

tests('Check server running', function (t) {
  server.inject({ method: 'GET', url: '/' }, function (res) {
    var actual = res.statusCode;
    var expected = 200;
    t.equal(actual, expected, 'Assert successful response');
  });

  server.inject({ method: 'GET', url: '/app.js' }, function (res) {
    var actual = res.headers['content-type'].indexOf('javascript') > -1;
    t.ok(actual, 'Assert app.js loaded');
  });

  t.end();
});