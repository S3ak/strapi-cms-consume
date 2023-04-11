module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1338),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  vercel: {
    // Required
    token: env("VERCEL_TOKEN"),
    // Required
    projectId: env("VERCEL_PROJECT_ID"),
    // Required (hooks)
    triggers: {
      production: env("VERCEL_TRIGGER_PRODUCTION"),
    },
    // Optional
    config: {
      // Number of latest deployments
      deployments: 10,
    },
  },
});
