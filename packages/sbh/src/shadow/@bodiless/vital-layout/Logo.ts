import { vitalLogoBase, asLogoToken } from '@bodiless/vital-layout';
import { addProps } from '@bodiless/fclasses';

const Default = asLogoToken({
  ...vitalLogoBase.Default,
  Layout: {
    Image: 'h-126 lg:h-16 max-w-1 max-w-15',
  },
  Spacing: {},
  Behavior: {
    Wrapper: addProps({ 'data-shadowed-by': '__vital__:Logo' }),
  },
});

export default {
  ...vitalLogoBase,
  Default,
};
