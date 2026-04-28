module.exports = {
  apps: [
    {
      name: "syllabri",
      script: "npm",
      args: "start",
      cwd: "/opt/syllabri",
      env: {
        NODE_ENV: "production",
        PORT: 3010,
        INCOMING_MODE: "true",
      },
    },
  ],
};
