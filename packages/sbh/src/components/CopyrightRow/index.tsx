import { replaceWith } from '@bodiless/fclasses';
import { vitalCopyrightRow, asCopyrightRowToken } from '@bodiless/vital-layout';
import { MySocialLinks } from '../SocialLinks';

const Default = asCopyrightRowToken({
  ...vitalCopyrightRow.Default,
  Components: {
    SocialLinks: replaceWith(MySocialLinks),
  },
});

export default {
  ...vitalCopyrightRow,
  Default,
};
