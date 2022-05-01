import { FlowContainer } from '@bodiless/layouts-ui';
import {
  withTitle,
  withDesc,
} from '@bodiless/layouts';
import {
  addClasses,
  varyDesign,
  replaceWith,
  withDesign,
  flowHoc,
} from '@bodiless/fclasses';
import FeatureBlock from './FeatureBlock';

const featureBlockVariation = {
  FeatureBlock: flowHoc(
    replaceWith(FeatureBlock),
    withTitle('FeatureBlock'),
    withDesc('Feature Block'),
  ),
};

const withFeatureBlockVariation = withDesign(varyDesign(
  featureBlockVariation,
)());

const asFeatureBlockFlowContainer = withDesign({
  Wrapper: addClasses('flex flex-row items-center '),
  ComponentWrapper: addClasses(' '),
});

/*
const options = getSnapFrom(
  withTailwindClasses(resolveConfig(tailWindConfig))('w-full lg:w-1/3'),
);

const withStrictSnapSize = Component => props => (
  <Component
    {...props}
    // snapData={options}
  />
);
*/

const FeatureBlockFlowContainer = flowHoc(
  // withStrictSnapSize,
  withFeatureBlockVariation,
  asFeatureBlockFlowContainer,
)(FlowContainer);

export default FeatureBlockFlowContainer;
