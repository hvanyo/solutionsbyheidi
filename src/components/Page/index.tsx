import { asToken } from '@bodiless/fclasses';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import { withPageDimensionsContext, BreakpointsType } from '@bodiless/components';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../site.tailwind.config';

const getTailwindBreakpoints = (): BreakpointsType => {
  const { theme: { screens } } = resolveConfig(tailwindConfig);
  const breakpoints = { ...screens };

  Object.keys(breakpoints).forEach(key => {
    breakpoints[key] = breakpoints[key].replace(/\D+/g, '');
  });

  return breakpoints;
};

const breakpoints: BreakpointsType = getTailwindBreakpoints();

const asResponsivePage = asToken(
  withPageDimensionsContext({ breakpoints }),
)(Page);

export default asResponsivePage;
export {
  breakpoints,
};
