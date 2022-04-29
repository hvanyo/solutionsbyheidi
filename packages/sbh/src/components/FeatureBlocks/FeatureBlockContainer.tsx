import React from 'react';
import { FlowContainer } from '@bodiless/layouts-ui';
import { getSnapFrom, withTailwindClasses } from '@bodiless/layouts';
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
import resolveConfig from 'tailwindcss/resolveConfig';
import tailWindConfig from '../../../site.tailwind.config';
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
*/

const withStrictSnapSize = Component => props => (
  <Component
    {...props}
    // snapData={options}
  />
);

const FeatureBlockFlowContainer = flowHoc(
  withStrictSnapSize,
  withFeatureBlockVariation,
  asFeatureBlockFlowContainer,
)(FlowContainer);

export default FeatureBlockFlowContainer;