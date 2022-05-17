import { withAppendChild } from '@bodiless/core';
import {
  Div, flowHoc, replaceWith, withDesign, addClasses, withoutProps, removeClassesIf, as,
} from '@bodiless/fclasses';
import {
  asBurgerMenu, withMenuDesign, BurgerMenuDefaultToggler, asSlideLeft, useIsBurgerMenuVisible,
} from '@bodiless/navigation';

import { vitalColor, vitalTextDecoration } from '@bodiless/vital-elements';
import { $withTitleEditors } from './Menu.token';
// import LogoClean from '../Layout/logo';
// import sbhLogo from '../Layout/logotokens';
import { asDefaultLogoStyle } from '../Layout/token';
import { asMobileOnly } from '../Elements.token';

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
      as(vitalColor.BgPrimaryCard),
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
      Label: vitalTextDecoration.Bold,
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

// const Logo = on(LogoClean)(sbhLogo.Default);

const $withBurgerMenuStyles = flowHoc(
  withDesign({
    Menu: $withMenuStyles,
    Nav: addClasses('p-3'),
    Header: flowHoc(
      // startWith(Logo),
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
