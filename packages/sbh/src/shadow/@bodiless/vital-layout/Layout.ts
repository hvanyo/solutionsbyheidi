import {
  vitalLayoutBase, asLayoutToken, vitalHeader, vitalFooter,
} from '@bodiless/vital-layout';
import { addProps } from '@bodiless/fclasses';

const Default = asLayoutToken(vitalLayoutBase.Base, {
  Components: {
    Header: vitalHeader.Default,
    Footer: vitalFooter.Default,
  },
  Behavior: {
    OuterContainer: addProps({ 'data-shadowed-by': '__vital__:Layout' }),
  },
});

export default {
  ...vitalLayoutBase,
  Default,
};
