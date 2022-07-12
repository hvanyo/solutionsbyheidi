import { FlowContainerClean, vitalFlowContainer } from '@bodiless/vital-flowcontainer';
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
  as,
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

const FeatureBlockFlowContainer = flowHoc(
  withFeatureBlockVariation,
  asFeatureBlockFlowContainer,
  as(vitalFlowContainer.WithTabletOneThirdConstraint),
)(FlowContainerClean);

export default FeatureBlockFlowContainer;
