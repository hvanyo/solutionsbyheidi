import { asElementToken, vitalColor, vitalTypographyBase } from '@bodiless/vital-elements';
import { as } from '@bodiless/fclasses';

export default {
  ...vitalTypographyBase,
  H1: asElementToken(vitalTypographyBase.H1, {
    Theme: {
      _: as('text-4xl', vitalColor.TextPrimaryHeaderCopy),
    },
  }),
  H2: asElementToken(vitalTypographyBase.H2, {
    Theme: {
      _: as('text-2xl', vitalColor.TextPrimaryHeaderCopy),
    },
  }),
  H3: asElementToken(vitalTypographyBase.H3, {
    Theme: {
      _: as('text-xl', vitalColor.TextPrimaryHeaderCopy),
    },
  }),
  Link: asElementToken(vitalTypographyBase.H3, {
    Theme: {
      _: as('underline', vitalColor.TextPrimaryInteractive),
    },
  }),
};
