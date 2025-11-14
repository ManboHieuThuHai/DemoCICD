// Configuration file for MyProject

const config = {
  appName: 'MyProject - Unified Config',
  version: '2.1.0',
  environment: process.env.NODE_ENV || 'development',
  api: {
    baseURL: process.env.API_URL || 'http://localhost:3000/api',
    timeout: 8000
  },
  features: {
    authentication: true,
    logging: true,
    debugMode: process.env.NODE_ENV === 'development'
  }
};

module.exports = config;
