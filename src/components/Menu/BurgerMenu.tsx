import { asStatic } from '@bodiless/core';
import { asToken } from '@bodiless/fclasses';
import { withBurgerMenuWrapper, BurgerMenuDefaultToggler } from '@bodiless/navigation';

import { $withBurgerMenuStyles, $withTogglerStyles } from './BurgerMenu.token';
import { $asMenuBase } from './Menu';

const BurgerMenuToggler = asToken(
  $withTogglerStyles,
)(BurgerMenuDefaultToggler);

const BurgerMenu = asToken(
  $asMenuBase,
  withBurgerMenuWrapper,
  $withBurgerMenuStyles,
  asStatic,
)('ul');

export default BurgerMenu;
export {
  BurgerMenuToggler,
};
