import { vitalHelmetBase } from '@bodiless/vital-layout';
import { asFluidToken, vitalColor, vitalTextDecoration } from '@bodiless/vital-elements';
import { addProps, as } from '@bodiless/fclasses';

const Default = asFluidToken({
  ...vitalHelmetBase.Default,
  Behavior: {
    BodyHelmet: addProps({ 'data-shadowed-by': '__vital__:Helmet' }),
  },
  Theme: {
    HTMLHelmet: as(
      'font-Inter',
      vitalColor.TextPrimaryBodyCopy,
      vitalTextDecoration.Normal,
    ),
  },
});

export default {
  ...vitalHelmetBase,
  Default,
};
