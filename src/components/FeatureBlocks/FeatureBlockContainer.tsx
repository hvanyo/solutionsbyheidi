/**
 * Copyright © 2019 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import { flow } from 'lodash';
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
} from '@bodiless/fclasses';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailWindConfig from '../../../site.tailwind.config';
import FeatureBlock from './FeatureBlock';
import { withType } from '../FlowContainer/Categories';

const featureBlockVariation = {
  FeatureBlock: flow(
    replaceWith(FeatureBlock),
    withType('Block')(),
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

const options = getSnapFrom(
  withTailwindClasses(resolveConfig(tailWindConfig))('w-full lg:w-1/3'),
);

const withStrictSnapSize = Component => props => (
  <Component
    {...props}
    snapData={options}
  />
);

const FeatureBlockFlowContainer = flow(
  withStrictSnapSize,
  withFeatureBlockVariation,
  asFeatureBlockFlowContainer
)(FlowContainer);

export default FeatureBlockFlowContainer;