import { replaceWith } from '@bodiless/fclasses';
import { vitalCopyrightRowBase, asCopyrightRowToken } from '@bodiless/vital-layout';
import { MySocialLinks } from '../../../components/SocialLinks';

const Default = asCopyrightRowToken({
  ...vitalCopyrightRowBase.Default,
  Components: {
    ...vitalCopyrightRowBase.Default.Components,
    SocialLinks: replaceWith(MySocialLinks),
  },
  Theme: {
    Copyright: 'border-0',
  }
});

export default {
  ...vitalCopyrightRowBase,
  Default,
};
