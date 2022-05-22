import {
  replaceWith,
} from '@bodiless/fclasses';
import { vitalLayout, asLayoutToken } from '@bodiless/vital-layout';
import Header from './header';
import Footer from './footer';

const SBHLayout = asLayoutToken({
  ...vitalLayout.Default,
  Components: {
    ...vitalLayout.Default.Components,
    Header: replaceWith(Header),
    Footer: replaceWith(Footer),
  },
});

export default SBHLayout;
