import React, { FC, ComponentType, HTMLProps } from 'react';
import { flow } from 'lodash';
import {
  designable,
  DesignableComponentsProps,
  DesignableProps,
  withDesign,
  addClasses,
  Section,
  Div,
  P,
  H2,
  replaceWith,
} from '@bodiless/fclasses';
import { withEditorFullFeatured } from '../Editors';
import { withNodeKey } from '@bodiless/core';
import FeatureBlockFlowContainer from './FeatureBlockContainer';

type FeaturesBlocksComponents = {
  Wrapper: ComponentType<any>,
  Featured: ComponentType<any>,
  Title: ComponentType<any>,
  Summary: ComponentType<any>,
};

export type Props = DesignableComponentsProps<FeaturesBlocksComponents> & HTMLProps<HTMLElement>;

const featuresBlocksComponents: FeaturesBlocksComponents = {
  Wrapper: Section,
  Featured: Div,
  Title: H2,
  Summary: P,
};

const FeaturesBlocksClean: FC<DesignableProps> = ({ components }) => {
  const {
    Wrapper,
    Featured,
    Title,
    Summary,
  } = components;

  return (
    <Wrapper>

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-700 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <Title />
            <Summary />
          </div>
          <Featured />

        </div>
      </div>

    </Wrapper>
  );
};

const asFeaturesBlocks = flow(
  designable(featuresBlocksComponents, 'FeaturesBlocks'),
  withDesign({
    Wrapper: addClasses('relative'),
    Title: flow(
      withEditorFullFeatured('sectiontitle', 'Insert Section Title'),
      addClasses('h2 mb-4'),
    ),
    Summary: flow(
      withEditorFullFeatured('sectionsummary', 'Insert Summary'),
      addClasses('text-xl text-gray-600'),
    ),
    Featured: flow(
      replaceWith(FeatureBlockFlowContainer),
      withNodeKey('FeatureBlocksFlowContainer'),
    ),
  }),
);

const FeaturesBlocks = asFeaturesBlocks(FeaturesBlocksClean);

export default FeaturesBlocks;


