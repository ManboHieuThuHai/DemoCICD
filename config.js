// Configuration file for MyProject

const config = {
  appName: 'MyProject',
  version: '1.0.0',
  environment: 'production',
  api: {
    baseURL: 'https://api.myproject.com',
    timeout: 5000
  },
  features: {
    authentication: true,
    logging: true
  }
};

module.exports = config;
