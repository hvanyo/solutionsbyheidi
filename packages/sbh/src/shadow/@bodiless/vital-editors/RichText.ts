import {
  asFluidToken, vitalColor, vitalTextDecoration, vitalTypography
} from '@bodiless/vital-elements';
import {
  asMark,
  withButton,
} from '@bodiless/richtext';
import { vitalRichTextBase } from '@bodiless/vital-editors';
import { flowHoc } from '@bodiless/fclasses';

const withGradient = flowHoc(
  asMark,
  withButton('graphic_eq'),
);

const Default = asFluidToken(vitalRichTextBase.Default, {
  Core: {
    Gradient: withGradient,
  },
  Theme: {
    paragraph: vitalColor.TextPrimaryBodyCopy,
    Bold: vitalTextDecoration.Bold,
    Underline: vitalTextDecoration.Underline,
    SuperScript: vitalTextDecoration.Superscript,
    H1: 'text-black text-4xl',
    H2: vitalTypography.H2,
    H3: vitalTypography.H3,
    Gradient: 'bg-clip-text text-transparent bg-gradient-to-r from-brandRed-400 via-brandRed-700 to-brandRed-400 bg-clip-text',
    Link: 'text-brandRed-400 underline hover:text-brandRed-600',
  },
});

export default {
  ...vitalRichTextBase,
  Default,
};
