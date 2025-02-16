const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 300 }); // 5 minutos

const cacheMiddleware = async (resolve, root, args, context, info) => {
  const key = `${info.fieldName}:${JSON.stringify(args)}`;
  
  const cached = cache.get(key);
  if (cached) return cached;

  const result = await resolve(root, args, context, info);
  cache.set(key, result);
  return result;
};

module.exports = { cache, cacheMiddleware }; 