import { ComponentType } from 'react';
import { flowHoc } from '@bodiless/fclasses';
import {
  asBodilessMenu, withListSubMenu, withColumnSubMenu, withCardsSubMenu,
} from '@bodiless/navigation';

import $asNavStyles from './Menu.token';

const $asMenuBase = flowHoc(
  asBodilessMenu(),
  withListSubMenu(),
  withColumnSubMenu(),
  withCardsSubMenu(),
);

const Menu = flowHoc(
  $asMenuBase,
  $asNavStyles,
)('ul') as ComponentType<any>;

export default Menu;
export {
  $asMenuBase,
};
