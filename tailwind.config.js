/* eslint-disable */
// This file is generated automatically, please don't change it
const {
  mergeConfigs,
  getPackageRoot,
} = require('@bodiless/gatsby-theme-bodiless/dist/tailwindcss');
const siteConfig = require('./site.tailwind.config');

const bodilessCanvasxConfigs = [
  {
    root: getPackageRoot(require.resolve('@bodiless/layouts')),
    tailwindConfig: require('@bodiless/layouts/site.tailwind.config'),
  },
  {
    root: getPackageRoot(require.resolve('/Users/heidivanyo/slate/solutionsbyheidi/node_modules/@bodiless/accordion')),
    tailwindConfig: require('/Users/heidivanyo/slate/solutionsbyheidi/node_modules/@bodiless/accordion/site.tailwind.config'),
  },
  {
    root: getPackageRoot(require.resolve('/Users/heidivanyo/slate/solutionsbyheidi/node_modules/@bodiless/card')),
    tailwindConfig: require('/Users/heidivanyo/slate/solutionsbyheidi/node_modules/@bodiless/card/site.tailwind.config'),
  },
  {
    root: getPackageRoot(require.resolve('/Users/heidivanyo/slate/solutionsbyheidi/node_modules/@bodiless/navigation')),
    tailwindConfig: require('/Users/heidivanyo/slate/solutionsbyheidi/node_modules/@bodiless/navigation/site.tailwind.config'),
  },
  {
    root: getPackageRoot(require.resolve('@bodiless/organisms')),
    tailwindConfig: require('@bodiless/organisms/site.tailwind.config'),
  }];

module.exports = mergeConfigs(siteConfig, bodilessCanvasxConfigs);
