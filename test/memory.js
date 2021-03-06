
'use strict';

var allTransportTests = require('./all_transports');
var graft             = require('../graft');

describe('in-memory graft', function() {

  allTransportTests(function createServer() {
    return graft();
  }, function createClient(server) {
    return server;
  });
});
