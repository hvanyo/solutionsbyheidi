import { getPackageDocs } from '@bodiless/cli';

export const getDocs = (nameSpace) => getPackageDocs({
  resolver: p => require.resolve(p),
  nameSpace
});
