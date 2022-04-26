import React, { FC, ComponentType, HTMLProps } from 'react';
import {
  designable,
  DesignableComponentsProps,
  DesignableProps,
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
import { withEditorFullFeatured } from '../Editors';

type FeaturesBlockComponents = {
  Wrapper: ComponentType<any>,
  BlockWrapper: ComponentType<any>,
  SVGImage: ComponentType<any>,
  Title: ComponentType<any>,
  Body: ComponentType<any>,
};

export type Props = DesignableComponentsProps<FeaturesBlockComponents> & HTMLProps<HTMLElement>;

const featuresBlockComponents: FeaturesBlockComponents = {
  Wrapper: Section,
  BlockWrapper: Div,
  SVGImage: Img,
  Title: H4,
  Body: P,
};

const FeaturesBlockClean: FC<DesignableProps> = ({ components }) => {
  const {
    Wrapper,
    BlockWrapper,
    SVGImage,
    Title,
    Body,
  } = components;

  return (
    <Wrapper>
      <BlockWrapper>
        <SVGImage />
        <Title />
        <Body />
        </BlockWrapper>
    </Wrapper>
  );
};

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
      withEditorFullFeatured('title', 'Insert Title'),
      addClasses('text-xl font-bold leading-snug tracking-tight mb-1 text-center'),
    ),
    Body: flowHoc(
      withEditorFullFeatured('body', 'Insert Summary'),
      addClasses('text-gray-600 text-center'),
    ),
  }),
);

const FeaturesBlock = asFeaturesBlock(FeaturesBlockClean);

export default FeaturesBlock;
