import React, { FC } from 'react';
import {
  designable,
  ComponentOrTag,
  DesignableComponentsProps,
  withDesign,
  addClasses,
  Div,
  Section,
  H4,
  P,
  flowHoc,
  Img,
  as,
} from '@bodiless/fclasses';
import { withNode } from '@bodiless/core';
import { vitalImage } from '@bodiless/vital-image';
import { withEditorRich } from '@bodiless/vital-editors';

type FeaturesBlockComponents = {
  Wrapper: ComponentOrTag<any>,
  BlockWrapper: ComponentOrTag<any>,
  SVGImage: ComponentOrTag<any>,
  Title: ComponentOrTag<any>,
  Body: ComponentOrTag<any>,
};

export type FeaturesBlockProps = DesignableComponentsProps<FeaturesBlockComponents>;

const featuresBlockComponents: FeaturesBlockComponents = {
  Wrapper: Section,
  BlockWrapper: Div,
  SVGImage: Img,
  Title: H4,
  Body: P,
};

const FeaturesBlockClean: FC<FeaturesBlockProps> = ({ components: C, ...rest }) => (
  <C.Wrapper {...rest}>
    <C.BlockWrapper>
      <C.SVGImage />
      <C.Title />
      <C.Body />
    </C.BlockWrapper>
  </C.Wrapper>
);

const asFeaturesBlock = flowHoc(
  designable(featuresBlockComponents, 'FeaturesBlock'),
  withNode,
  withDesign({
    Wrapper: addClasses('shadow-xl m-3 mb-6 bg-white rounded p-3'),
    BlockWrapper: addClasses(' '),
    SVGImage: flowHoc(
      as(vitalImage.Default),
      addClasses('w-16 h-16 p-1 -mt-1 mb-2 mx-auto'),
    ),
    Title: flowHoc(
      withEditorRich('title', 'Insert Title'),
      addClasses('text-xl font-bold leading-snug tracking-tight mb-1 text-center'),
    ),
    Body: flowHoc(
      withEditorRich('body', 'Insert Summary'),
      addClasses('text-gray-600 text-center'),
    ),
  }),
);

const FeaturesBlock = asFeaturesBlock(FeaturesBlockClean);

export default FeaturesBlock;
