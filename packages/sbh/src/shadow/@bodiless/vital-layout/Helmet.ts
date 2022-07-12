import { vitalHelmetBase } from '@bodiless/vital-layout';
import { asFluidToken } from '@bodiless/vital-elements';
import { addProps } from '@bodiless/fclasses';

const Default = asFluidToken(vitalHelmetBase.Default, {
  Behavior: {
    BodyHelmet: addProps({ 'data-shadowed-by': '__vital__:Helmet' }),
  },
});

export default {
  ...vitalHelmetBase,
  Default,
};
