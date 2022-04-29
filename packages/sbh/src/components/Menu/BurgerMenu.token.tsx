import { withAppendChild } from '@bodiless/core';
import {
  Div, flowHoc, replaceWith, startWith, withDesign, addClasses, withoutProps, removeClassesIf, addClassesIf,
} from '@bodiless/fclasses';
import {
  asBurgerMenu, withMenuDesign, BurgerMenuDefaultToggler, asSlideLeft, useIsBurgerMenuVisible,
} from '@bodiless/navigation';

import { $withTitleEditors } from './Menu.token';
import Logo from '../Layout/logo';
import { asDefaultLogoStyle } from '../Layout/token';
import {
  asTealBackground, asMobileOnly, asBold,
} from '../Elements.token';

/**
 * Tokens
 * ===========================================
 */
const $withTogglerStyles = flowHoc(
  withDesign({
    Button: flowHoc(asMobileOnly),
    Wrapper: flowHoc(
      replaceWith(Div),
      asMobileOnly,
      addClasses('flex'),
    ),
  }),
);

const $withBurgerMenuHeaderStyles = flowHoc(
  asDefaultLogoStyle,
  withDesign({
    SiteReturn: flowHoc(
      withoutProps('design'),
      withAppendChild(BurgerMenuDefaultToggler, 'MenuToggler'),
      asTealBackground,
      withDesign({
        MenuToggler: $withTogglerStyles,
      }),
      addClasses('flex items-center justify-between'),
    ),
  }),
);

const $withBoldAccordionTitleStyles = withDesign({
  OuterWrapper: withDesign({
    Title: withDesign({
      Label: asBold,
    }),
  }),
});

const $withBaseSubMenuStyles = withDesign({
  Item: addClasses('pl-4'),
});

const $withColumnSubMenuStyles = withDesign({
  Item: addClasses('pl-8'),
});

const $withMenuStyles = flowHoc(
  asBurgerMenu('List', 'Columns', 'Cards'),
  withMenuDesign()($withTitleEditors),
  withMenuDesign(['List', 'Columns', 'Cards'])($withBaseSubMenuStyles, $withBoldAccordionTitleStyles),
  withMenuDesign('Columns')($withColumnSubMenuStyles),
);

const withRemoveOverflow = withDesign({
  Wrapper: flowHoc(
    removeClassesIf(useIsBurgerMenuVisible)('overflow-y-scroll'),
  ),
  Nav: addClasses('bg-gray-200'),
});

const $withBurgerMenuStyles = flowHoc(
  withDesign({
    Menu: $withMenuStyles,
    Nav: addClasses('p-3'),
    Header: flowHoc(
      startWith(Logo),
      $withBurgerMenuHeaderStyles,
    ),
  }),
  asSlideLeft,
  withRemoveOverflow,
);

export {
  $withBurgerMenuStyles,
  $withTogglerStyles,
};
