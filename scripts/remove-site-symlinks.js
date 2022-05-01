const fs = require('fs');
const path = require('path');

/**
 * This script will remove all symlinks to the folders given as arguments
 * inside the node_modules folder of each site.
 *
 * This means that, if you provide "@bodiless" as an argument for
 * this script, it will go into each folder inside "<repository root>/sites",
 * and will search for a "@bodiless" symlink inside the node_modules folder
 * of each of these sites.
 *
 * If any argument given to this script doesn't exist inside node_modules,
 * if the path is a file, or if the path is a folder, it will be ignored.
 *
 * This script was created because `npm install` won't produce idempotent
 * installations if it finds unexpected symlinks inside a workspace package.
 * Since some Bodiless scripts can create symlinks npm won't expect, we remove
 * these symlinks before installation, so npm and package builds can create
 * them again afterwards as needed.
 */

const cleanSymlink = path => {
  const link = fs.lstatSync(path, { throwIfNoEntry: false });

  if (link && link.isSymbolicLink()) {
    fs.unlinkSync(path);
  }
};

const removeSymlinksFromSites = () => {
  const sites = fs.readdirSync(path.join('.', 'sites'));
  const symlinksToRemove = process.argv.slice(2);

  if (!sites.length || !symlinksToRemove.length) return;

  sites.forEach(site => {
    symlinksToRemove.forEach(folder => {
      cleanSymlink(path.resolve(path.join('.', 'sites', site, 'node_modules', folder)));
    });
  });
};

removeSymlinksFromSites();
