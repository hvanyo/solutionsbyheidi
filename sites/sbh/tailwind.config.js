const requireEsm = require('esm')(module);

const { buildTailwindConfig } = requireEsm(
  '@bodiless/fclasses'
);

const twConfig = {
  content: [
    './src/**/!(*.d).{ts,js,jsx,tsx}',
  ],
};

// Get configs sorted by precedence and/or exclude some packages:
// const getTwConfig = () => getPackageTailwindConfig({
//   pkgJson,
//   twConfig,
//   resolver,
//   prefer: ['@bodiless/test-site', '@bodiless/some-package-name'],
//   exclude: ['@bodiless/organisms', '@bodiless/accordion'],
// });

module.exports = buildTailwindConfig({
  twConfig,
  resolver: pkg => requireEsm.resolve(pkg),
  prefer: ['sbh'],
});
