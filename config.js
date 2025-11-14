// Configuration file for MyProject

const config = {
  appName: 'MyProject Demo',
  version: '2.0.0',
  environment: 'development',
  api: {
    baseURL: 'http://localhost:3000/api',
    timeout: 10000
  },
  features: {
    authentication: true,
    logging: true,
    debugMode: true
  }
};

module.exports = config;
