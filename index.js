const AGClientSocket = require('./lib/agclientsocket');
const factory = require('./lib/factory');
const version = '1.0.1';

module.exports.factory = factory;
module.exports.AGClientSocket = AGClientSocket;

module.exports.create = function (options) {
  return factory.create({...options, version});
};

module.exports.version = version;
