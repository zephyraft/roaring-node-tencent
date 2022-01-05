const isTencent = require('./lib/is-tencent')

module.exports = require(isTencent ? './lib/roaring-tencent/RoaringBitmap32Iterator' : 'roaring/RoaringBitmap32Iterator')
