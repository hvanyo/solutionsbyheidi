import React, { FC } from 'react';
import {
  designable,
  ComponentOrTag,
  DesignableComponentsProps,
  withDesign,
  addClasses,
  Section,
  Div,
  P,
  H2,
  replaceWith,
  flowHoc,
} from '@bodiless/fclasses';
import { withEditorRich } from '@bodiless/vital-editors';
import { withNodeKey } from '@bodiless/core';
import FeatureBlockFlowContainer from './FeatureBlockContainer';

type FeaturesBlocksComponents = {
  Wrapper: ComponentOrTag<any>,
  GrayBackground: ComponentOrTag<any>,
  GrayLine: ComponentOrTag<any>,
  Featured: ComponentOrTag<any>,
  Title: ComponentOrTag<any>,
  Summary: ComponentOrTag<any>,
};

export type FeaturesBlocksProps = DesignableComponentsProps<FeaturesBlocksComponents>;

const featuresBlocksComponents: FeaturesBlocksComponents = {
  Wrapper: Section,
  GrayBackground: Div,
  GrayLine: Div,
  Featured: Div,
  Title: H2,
  Summary: P,
};

const FeaturesBlocksClean: FC<FeaturesBlocksProps> = ({ components: C, ...rest }) => (

  <C.Wrapper {...rest}>

    {/* Section background (needs .relative class on parent and next sibling elements) */}
    <C.GrayBackground />
    <C.GrayLine />

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <C.Title />
          <C.Summary />
        </div>
        <C.Featured />

      </div>
    </div>

  </C.Wrapper>
);

const asFeaturesBlocks = flowHoc(
  designable(featuresBlocksComponents, 'FeaturesBlocks'),
  withDesign({
    Wrapper: addClasses('relative'),
    // TODO add aria-hidden="true" to GrayBackground
    GrayBackground: addClasses('absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-700 pointer-events-none'),
    GrayLine: addClasses('absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2'),
    Title: flowHoc(
      withEditorRich('sectiontitle', 'Insert Section Title'),
      addClasses('h2 mb-4'),
    ),
    Summary: flowHoc(
      withEditorRich('sectionsummary', 'Insert Summary'),
      addClasses('text-xl text-gray-600'),
    ),
    Featured: flowHoc(
      replaceWith(FeatureBlockFlowContainer),
      withNodeKey('FeatureBlocksFlowContainer'),
    ),
  }),
);

const FeaturesBlocks = asFeaturesBlocks(FeaturesBlocksClean);

export default FeaturesBlocks;
