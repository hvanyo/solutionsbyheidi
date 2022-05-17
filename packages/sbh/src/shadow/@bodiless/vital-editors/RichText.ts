import {
  asFluidToken, vitalColor, vitalTextDecoration, vitalTypography
} from '@bodiless/vital-elements';
import { vitalRichTextBase } from '@bodiless/vital-editors';
import { addProps } from '@bodiless/fclasses';
import omit from 'lodash/omit';

const Default = asFluidToken({
  ...vitalRichTextBase.Default,
  Compose: {
    ...(vitalRichTextBase.Default.Compose || {}),
    WithShadowedBy: addProps({ 'data-shadowed-by': '__vitalstarter_:RichText' }),
  },
  // TODO -- omit... not working
  Core: {
    ...omit(vitalRichTextBase.Default.Core, 'H4'),
    ...omit(vitalRichTextBase.Default.Core, 'H5'),
  },
  Components: {
    ...omit(vitalRichTextBase.Default.Components, 'H4'),
    ...omit(vitalRichTextBase.Default.Components, 'H5'),
  },
  Theme: {
    paragraph: vitalColor.TextPrimaryBodyCopy,
    Bold: vitalTextDecoration.Bold,
    Underline: vitalTextDecoration.Underline,
    SuperScript: vitalTextDecoration.Superscript,
    H1: vitalTypography.H1,
    H2: vitalTypography.H2,
    H3: vitalTypography.H3,
    Link: vitalTypography.Link,
  },
});

export default {
  ...vitalRichTextBase,
  Default,
};
