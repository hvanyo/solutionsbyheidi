/* eslint-disable no-console */
const { copySync, existsSync, mkdirpSync } = require('fs-extra');
const path = require('path');
const { spawn } = require('child_process');
const home = require('os').homedir();

const args = process.argv.filter(arg => !arg.match(/^--/));
const destDir = args[2] || path.resolve(home, 'gatsby-starter-bodiless');
const src = args[3] || 'starter';
const noInstall = process.argv.find(arg => arg === '--no-install');
const srcDir = path.resolve('.', 'sites', src);

try {
  if (existsSync(destDir)) {
    console.error(`${destDir} already exists. Stopping.`);
    process.exit(1);
  }
  mkdirpSync(destDir);

  copySync(srcDir, destDir, {
    filter: name => !name.match(/node_modules/) && !name.match(/\.git\//),
  });
} catch (e) {
  console.error(`Unable to copy ${srcDir} to ${destDir}`);
  console.error(e);
  process.exit(1);
}

process.chdir(destDir);

const child = spawn('git', ['init'], {
  stdio: 'inherit',
  shell: true,
});
child.on('close', (code) => {
  if (noInstall) process.exit(code);

  const child$ = spawn('npm', ['install'], {
    stdio: 'inherit',
    shell: true,
  });

  child$.on('close', code => {
    console.log();
    if (code) {
      console.error(`npm install exited with code ${code}`);
      process.exit(code);
    }
    console.log('Installation successful.');
    console.log(`Use "cd ${destDir} && npm start" to launch the editor.`);
  });
});
