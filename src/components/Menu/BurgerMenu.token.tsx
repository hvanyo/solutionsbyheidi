import { withAppendChild } from '@bodiless/core';
import {
  Div, asToken, replaceWith, startWith, withDesign, addClasses, withoutProps,
} from '@bodiless/fclasses';
import {
  asBurgerMenu, withMenuDesign, BurgerMenuDefaultToggler, asSlideLeft,
} from '@bodiless/navigation';

import { $withTitleEditors } from './Menu.token';
import Logo from '../Layout/logo';
import { asDefaultLogoStyle } from '../Layout/token';
import {
  asTealBackground, asTextWhite, asMobileOnly, asBold,
} from '../Elements.token';

/**
 * Tokens
 * ===========================================
 */
const $withTogglerStyles = asToken(
  withDesign({
    Button: asToken(asTextWhite, asMobileOnly),
    Wrapper: asToken(
      replaceWith(Div),
      asMobileOnly,
      addClasses('flex'),
    ),
  }),
);

const $withBurgerMenuHeaderStyles = asToken(
  asDefaultLogoStyle,
  withDesign({
    SiteReturn: asToken(
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

const $withMenuStyles = asToken(
  asBurgerMenu('List', 'Columns', 'Cards'),
  withMenuDesign()($withTitleEditors),
  withMenuDesign(['List', 'Columns', 'Cards'])($withBaseSubMenuStyles, $withBoldAccordionTitleStyles),
  withMenuDesign('Columns')($withColumnSubMenuStyles),
);

const $withBurgerMenuStyles = asToken(
  withDesign({
    Menu: $withMenuStyles,
    Nav: addClasses('p-3'),
    Header: asToken(
      startWith(Logo),
      $withBurgerMenuHeaderStyles,
    ),
  }),
  asSlideLeft,
);

export {
  $withBurgerMenuStyles,
  $withTogglerStyles,
};
