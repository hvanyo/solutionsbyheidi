const { getDisabledPages } = require('@bodiless/components/node-api');

const express = require('express');

const disablePageList = getDisabledPages();
const disabledPages = Object.keys(disablePageList).filter(
  item => disablePageList[item].pageDisabled === true || disablePageList[item].indexingDisabled,
);

// Gatsby plugins list.
const plugins = [
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
      icon: 'src/images/solutionsbyheidifavicon.png',
    },
  },
  {
    resolve: 'gatsby-plugin-canonical-urls',
    options: {
      siteUrl: 'http://solutionsbyheidi.com/',
    },
  },
  {
    resolve: 'gatsby-plugin-advanced-sitemap',
    options: { exclude: disabledPages },
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
  },  
  {
    resolve:'gatsby-plugin-postcss',
    options: {
      postCssPlugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        'UA-2669341-1', // Google Analytics / GA
      ],
    },
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
