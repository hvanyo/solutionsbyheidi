import { ComponentType } from 'react';
import pick from 'lodash/pick';
import { withDesign, replaceWith, asToken } from '@bodiless/fclasses';
import { withResponsiveVariants } from '@bodiless/components';
 
import { breakpoints as allBreakpoints } from '../Page';
import { asDesktopOnly, asMobileOnly } from '../Elements.token';
 
import Menu from './Menu';
import BurgerMenu, { BurgerMenuToggler } from './BurgerMenu';
 
const breakpoints = pick(allBreakpoints, 'lg');
 
const asResponsiveMenu = (DesktopMenu: ComponentType) => asToken(
  withResponsiveVariants({ breakpoints }),
  // Note, it's important to apply responsive CSS to the 2 menus in order to
  // avoid flicker on the static site. The menu for the inactive breakpoint
  // is rendered during SSR and unmounted as a side effect after rehydration.
  withDesign({
    _default: withDesign({ Wrapper: asMobileOnly }),
    lg: asToken(replaceWith(DesktopMenu), asDesktopOnly),
  }),
);
 
const ResponsiveMenu = asResponsiveMenu(Menu)(BurgerMenu);
 
export default ResponsiveMenu;
export {
  BurgerMenuToggler,
};
