module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
  },
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: "QU209g8M0UK8bMaYRwiszACgE9xMx4xe_3rweJvmEI4",
      sites: [
        {
          name: "consume-strapi-api",
          id: "208dd0fc-e560-4f1d-a0c2-6983f304c4f8",
          buildHook:
            "https://api.netlify.com/build_hooks/6435e736b4cf740e203f6b4b",
          branch: "master", // optional
        },
      ],
    },
  },
});
