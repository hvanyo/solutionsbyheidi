import { flowHoc } from '@bodiless/fclasses';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import { withPageDimensionsContext, BreakpointsType } from '@bodiless/components';
import resolvedConfigs from
  '@bodiless/fclasses/src/tailwindcss/resolveConfig';

const getTailwindBreakpoints = (): BreakpointsType => {
  const { theme: { screens } } = resolvedConfigs;
  const breakpoints = { ...screens };

  Object.keys(breakpoints).forEach(key => {
    breakpoints[key] = breakpoints[key].replace(/\D+/g, '');
  });

  return breakpoints;
};

const breakpoints: BreakpointsType = getTailwindBreakpoints();

const asResponsivePage = flowHoc(
  withPageDimensionsContext({ breakpoints }),
)(Page);

export default asResponsivePage;
export {
  breakpoints,
};
