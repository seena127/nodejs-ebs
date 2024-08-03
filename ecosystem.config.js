module.exports = {
  apps: [
    {
      name: 'scalable-node-app',
      script: './app.js',
      instances: 'max', // Or a specific number of instances
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      }
    }
  ]
};

