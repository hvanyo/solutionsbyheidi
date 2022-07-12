import { vitalMenuBase, asMenuToken } from '@bodiless/vital-navigation';
import { addProps, as } from '@bodiless/fclasses';
import { vitalTextDecoration } from '@bodiless/vital-elements';

const TopNav = asMenuToken({
  ...vitalMenuBase.TopNav,
  Theme: {
    Item: 'relative group',
    Title: as(
      'text-lg font-medium text-gray-600 hover:text-gray-900',
      vitalTextDecoration.Uppercase,
      'whitespace-nowrap cursor-pointer',
    ),
  },
});

const Footer = asMenuToken(vitalMenuBase.Footer, {
  Core: {
    _: addProps({ 'data-shadowed-by': '__vital__Menu_Footer' }),
  },
});

const Utility = asMenuToken(vitalMenuBase.Utility, {
  Core: {
    _: addProps({ 'data-shadowed-by': '__vital__Menu_Utility' }),
  },
});

export default {
  ...vitalMenuBase,
  TopNav,
  Footer,
  Utility,
};
