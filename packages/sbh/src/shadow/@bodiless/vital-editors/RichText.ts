import { asFluidToken } from '@bodiless/vital-elements';
import { vitalRichTextBase } from '@bodiless/vital-editors';
import { addProps } from '@bodiless/fclasses';
import omit from 'lodash/omit';
import {
  asBold,
  asHeader1,
  asHeader2,
  asHeader3,
  asLink,
  asSuperScript,
  asTextColorPrimary
} from '../../../components/Elements.token';

const Default = asFluidToken({
  ...vitalRichTextBase.Default,
  Compose: {
    ...(vitalRichTextBase.Default.Compose || {}),
    WithShadowedBy: addProps({ 'data-shadowed-by': '__vitalstarter_:RichText' }),
  },
  Core: {
    ...omit(vitalRichTextBase.Default.Core, 'H4'),
    ...omit(vitalRichTextBase.Default.Core, 'H5'),
  },
  Components: {
    ...omit(vitalRichTextBase.Default.Components, 'H4'),
    ...omit(vitalRichTextBase.Default.Components, 'H5'),
  },
  Theme: {
    paragraph: asTextColorPrimary,
    Bold: asBold,
    Underline: 'underline',
    SuperScript: asSuperScript,
    H1: asHeader1,
    H2: asHeader2,
    H3: asHeader3,
    Link: asLink,
  },
});

export default {
  ...vitalRichTextBase,
  Default,
};
