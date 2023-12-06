module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  cache: {
    enabled: true,
    models: ['lajmet', 'shpalljet'], // List the models you want to cache
    stores: ['memory'], // Use in-memory cache
    max: 100, // Max number of items in the cache
    ttl: 60 * 10, // Cache TTL in seconds (e.g., 10 minutes)
  },
});
