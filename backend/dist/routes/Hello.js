'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  path: '/hello',
  method: 'GET',
  handler: function handler(request, reply) {
    console.log(request.url);
    reply('hello Hapi Server, this is a test route!');
  }
};