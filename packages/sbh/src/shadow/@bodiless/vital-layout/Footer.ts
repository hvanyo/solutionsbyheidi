import { addProps, replaceWith } from '@bodiless/fclasses';
import { vitalFooterBase, asFooterToken } from '@bodiless/vital-layout';
import { asPageContainer } from '../../../components/Elements.token';

const Default = asFooterToken({
  ...vitalFooterBase.Default,
  Components: {
    ...vitalFooterBase.Default.Components,
    FooterMenuWrapper: replaceWith(() => null),
    FooterMenu: replaceWith(() => null),
    MenuRow: replaceWith(() => null),
  },
  Layout: {
    Column2Wrapper: asPageContainer,
  },
  Spacing: {
    CopyrightRow: 'py-8 md:py-16',
    Column2Wrapper: 'px-8',
  },
  Theme: {
    CopyrightRow: 'flex items-center justify-between border-t border-gray-200',
    Wrapper: 'bg-gray-200',
  },
  Behavior: {
    Wrapper: addProps({ 'data-shadowed-by': '__vital__:Footer' }),
  },
});

export default {
  ...vitalFooterBase,
  Default,
};
