import { vitalHeaderBase, asHeaderToken, } from '@bodiless/vital-layout';
import { addProps, as, replaceWith } from '@bodiless/fclasses';
import { asPageContainer } from '../../../components/Elements.token';

const Default = asHeaderToken({
  ...vitalHeaderBase.Default,
  Behavior: {
    Wrapper: addProps({ 'data-shadowed-by': '__vital__:Header' }),
  },
  Components: {
    ...vitalHeaderBase.Default.Components,
    DesktopSearch: replaceWith(() => null),
    MobileSearch: replaceWith(() => null),
    WhereToBuy: replaceWith(() => null),
    SearchToggler: replaceWith(() => null),
  },
  Theme: {
    Wrapper: 'bg-white shadow-lg',
    // Wrapper: flowHoc(
    // withIsTop(),
    // TODO Not quite working
    // addClassesIf(isNotTop)('bg-white blur shadow-lg'),
    // addClassesIf(isNotTop)('bg-white shadow-lg'),
    // ),
    // Logo: 'flex-shrink px-2 order-0',
  },
  Layout: {
    MenuContainer: 'flex justify-end',
    MenuToggler: 'flex justify-center items-center',
    MenuTogglerWrapper: 'flex md:hidden',
    Menu: 'hidden md:flex',
    Container: as(
      'flex justify-between h-16 md:h-auto items-center flex-wrap md:bg-transparent px-4 md:px-0',
      asPageContainer,
    ),
  },
  Spacing: {
    MenuToggler: 'w-6 h-6',
    MenuTogglerWrapper: 'my-4',
  },
});

export default {
  ...vitalHeaderBase,
  Default,
};
