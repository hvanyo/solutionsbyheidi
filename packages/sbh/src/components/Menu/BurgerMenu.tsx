import { asStatic } from '@bodiless/core';
import { flowHoc } from '@bodiless/fclasses';
import { withBurgerMenuWrapper, BurgerMenuDefaultToggler } from '@bodiless/navigation';

import { $withBurgerMenuStyles, $withTogglerStyles } from './BurgerMenu.token';
import { $asMenuBase } from './Menu';

const BurgerMenuToggler = flowHoc(
  $withTogglerStyles,
)(BurgerMenuDefaultToggler);

const BurgerMenu = flowHoc(
  $asMenuBase,
  withBurgerMenuWrapper,
  $withBurgerMenuStyles,
  asStatic,
)('ul');

export default BurgerMenu;
export {
  BurgerMenuToggler,
};
