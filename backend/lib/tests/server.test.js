const tape = require('wrapping-tape')
const createClient = require('../../dist/redis/client.js').default
const createServer = require('../../dist/server.js').default

var client = null
var server = null

const tests = tape({
  setup: (t) => {
    client = createClient({ env: 'TEST' })
    server = createServer(client)
    t.end()
  },

  teardown: (t) => {
    server.stop()
    client.quit()
    t.end()
  }
})

tests('Check server running', (t) => {
  server.inject({ method: 'GET', url: '/' }, (res) => {
    const actual = res.statusCode
    const expected = 200
    t.equal(actual, expected, 'Assert successful response')
  })

  server.inject({ method: 'GET', url: '/app.js' }, (res) => {
    const actual = res.headers['content-type'].indexOf('javascript') > -1
    t.ok(actual, 'Assert app.js loaded')
  })

  t.end()
})
