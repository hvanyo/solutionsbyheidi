import { vitalBurgerMenuBase, asBurgerMenuToken } from '@bodiless/vital-navigation';
import { addProps, replaceWith } from '@bodiless/fclasses';

const Default = asBurgerMenuToken(vitalBurgerMenuBase.Default, {
  Behavior: {
    Wrapper: addProps({ 'data-shadowed-by': '__vital__:BurgerMenu' }),
  },
  Components: {
    UtilityMenu: replaceWith(() => null),
    WhereToBuy: replaceWith(() => null),
  },
});

export default {
  ...vitalBurgerMenuBase,
  Default,
};
