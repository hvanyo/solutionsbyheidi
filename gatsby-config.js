const express = require('express');

// Gatsby plugins list.
const plugins = [
  'gatsby-plugin-root-import',
  '@bodiless/gatsby-theme-bodiless',
  {
    resolve: 'gatsby-plugin-compile-es6-packages',
    options: {
      modules: ['@bodiless/gatsby-theme-bodiless'],
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/favicon.png',
    },
  },
  {
    resolve: 'gatsby-plugin-canonical-urls',
    options: {
      siteUrl: 'http://solutionsbyheidi.com/',
    },
  },
  {
    resolve: 'gatsby-plugin-sitemap',
  },
];

module.exports = {
  developMiddleware: app => {
    app.use('/___docs', express.static('doc'));
  },
  siteMetadata: {
    siteUrl: 'http://solutionsbyheidi.com/',
  },
  plugins,
};
