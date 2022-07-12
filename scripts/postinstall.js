/* eslint-disable no-console,max-len */
const fs = require('fs');

const asyncExists = path => new Promise(resolve => fs.exists(path, exists => resolve(exists)));

const copyDefaults = async package => {
  // Gatsby does not respect .env, just .env.development or .env.production.
  const envPath = package === 'sites/test-site' ? `${package}/.env.development` : `${package}/.env`;
  // Using the "global" defaults found in the project root.
  const defaults = '.env.local';

  // If .env file exists already, show an error.
  if (await asyncExists(package) && (await asyncExists(envPath))) {
    const err = `\u001B[96m> Package ${package} .env file exists already.\u001B[0m`;
    console.error(err);
    return;
  }

  // If package exists without .env file, copy from the default .enf file if present.
  if (await asyncExists(package) && !(await asyncExists(envPath)) && await asyncExists(defaults)) {
    fs.copyFile(defaults, envPath, err => { if (err) throw new Error(err); });
  }
};

const packages = ['packages/bodiless-backend', 'sites/test-site'];
packages.forEach(package => copyDefaults(package));
