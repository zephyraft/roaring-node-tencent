const isTencent = require('./lib/is-tencent')

module.exports = require(isTencent ? './lib/roaring-tencent/index' : 'roaring')

module.exports.isTencent = isTencent
