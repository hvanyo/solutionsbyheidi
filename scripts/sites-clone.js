const { copySync } = require('fs-extra');
const rimraf = require('rimraf');

const site = process.argv[2] || 'test-site';
rimraf.sync(`./sites-test/${site}`);
copySync(`./sites/${site}`, `./sites-test/${site}`, {
  filter: name => !name.match(/node_modules/),
});
