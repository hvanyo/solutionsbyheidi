import React, { FC, ComponentType, HTMLProps } from 'react';
import { flow } from 'lodash';
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
  replaceWith,
} from '@bodiless/fclasses';
import { withNode } from '@bodiless/core';
import { SquareImage } from '../Image';
import { withEditorFullFeatured } from '../Editors';
import { imgRequirements } from '../Image/svgimages';

type FeaturesBlockComponents = {
  Wrapper: ComponentType<any>,
  SVGImage: ComponentType<any>,
  Title: ComponentType<any>,
  Body: ComponentType<any>,
};

export type Props = DesignableComponentsProps<FeaturesBlockComponents> & HTMLProps<HTMLElement>;

const featuresBlockComponents: FeaturesBlockComponents = {
  Wrapper: Section,
  BlockWrapper: Div,
  SVGImage: SquareImage,
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

const asFeaturesBlock = flow(
  designable(featuresBlockComponents, 'FeaturesBlock'),
  withNode,  
  withDesign({
    Wrapper: addClasses('shadow-xl m-3 mb-6 bg-white rounded p-3'),
    BlockWrapper: addClasses(' '),
    SVGImage: addClasses('w-16 h-16 p-1 -mt-1 mb-2 mx-auto'),
    Title: flow(
      withEditorFullFeatured('title', 'Insert Title'),
      addClasses('text-xl font-bold leading-snug tracking-tight mb-1 text-center'),
    ),
    Body: flow(
      withEditorFullFeatured('body', 'Insert Summary'),
      addClasses('text-gray-600 text-center'),
    ),
  }),
);

const FeaturesBlock = asFeaturesBlock(FeaturesBlockClean);

export default FeaturesBlock;
