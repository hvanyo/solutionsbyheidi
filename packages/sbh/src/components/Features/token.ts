import { asFeatureTabsToken } from './FeatureTab';

const Default = asFeatureTabsToken({
  Layout: {
    Wrapper: 'relative md:grid md:grid-cols-12 md:gap-6',
  },
});

export default {
  Default,
};
