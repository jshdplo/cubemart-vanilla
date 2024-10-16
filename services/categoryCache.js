const Category = require('../models/Category');
const cacheManager = require('./cacheManager');

const categoryCache = cacheManager(Category, {
  ttl: 60 * 60 * 1000, // 1 hour
  maxCacheSize: 25
});

module.exports = categoryCache;