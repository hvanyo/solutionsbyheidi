import {
  asToken, withDesign, addClasses, flowIf, addProps,
} from '@bodiless/fclasses';
import {
  asTopNav, useIsActiveTrail, withMenuDesign, withMenuTitleEditors,
} from '@bodiless/navigation';
import { asBold } from '../Elements.token';

/**
 * Colors
 * ===========================================
 */

const withMenuBackground = addClasses('');
const withActiveMenuBackground = addClasses('bg-brandRed-400');
// const withHoverMenuBackground = addClasses('bg-brandRed-400');

/**
 * Title Styles
 * ===========================================
 */

// We need to manually pass title Editors
const $withTitleEditors = withMenuTitleEditors();

const $withTitleStyles = withDesign({
  Title: asToken(
    addClasses('text-lg font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out'),
  ),
});

/*
const withActiveTitleStyles = flowIf(useIsActiveTrail)(
  asUnderline, asBold, withActiveMenuBackground,
);
*/

const withActiveSubTitleStyles = flowIf(useIsActiveTrail)(
  asBold, withActiveMenuBackground,
);

/**
 * Base Menu Styles
 * ===========================================
 */

const $withBaseMenuStyles = withDesign({
  Wrapper: asToken(
    addClasses('flex flex-grow justify-end flex-wrap items-center'),
    addClasses('w-full'),
  ),
  Item: addClasses('leading-loose text-sm'),
  Title: addClasses('text-lg font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out'),
});

/**
 * Base Sub Menu Styles
 * ===========================================
 */

const $withBaseSubMenuStyles = withDesign({
  Wrapper: asToken(
    withMenuBackground,
    addClasses('z-10'),
  ),
  Title: withActiveSubTitleStyles,
  SubmenuIndicator: asToken(
    addClasses('text-sm text-white'),
    withDesign({
      // Example of the Submenu Indicator 'aria-label' suffix.
      // Suffix is appended to the Menu Item Title, usually to indicate
      // that there are more options available. For example if the Menu Title
      // is 'Products' and the Suffix is 'More' then the aria-label of SubmenuIndicator
      // would be 'Products - More'. Defaults to `More`.
      Button: addProps({ ariaLabelSuffix: 'More' }),
    }),
  ),
});

const $withListSubmenuStyles = withDesign({
  Wrapper: addClasses('w-content'),
});

const $withColumnsSublistStyles = withDesign({
  Title: addClasses('pl-6'),
});

const $asNavStyles = asToken(
  asTopNav('Main', 'List', 'Columns', 'Cards'),
  withMenuDesign(['Main', 'List', 'Columns'])($withTitleEditors),
  withMenuDesign()($withTitleStyles),
  withMenuDesign('Main')($withBaseMenuStyles),
  withMenuDesign(['List', 'Columns', 'Cards'])($withBaseSubMenuStyles),
  withMenuDesign('Columns', 2)($withColumnsSublistStyles),
  withMenuDesign('List')($withListSubmenuStyles),
);

export default $asNavStyles;
export {
  $withTitleEditors,
  $withBaseMenuStyles,
  $withBaseSubMenuStyles,
  $withTitleStyles,
  $withListSubmenuStyles,
  $withColumnsSublistStyles,
};