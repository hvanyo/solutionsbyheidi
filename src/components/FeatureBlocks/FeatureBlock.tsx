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
import { withNodeKey } from '@bodiless/core';
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
  withDesign({
    Wrapper: addClasses(''),
    BlockWrapper: addClasses('relative flex flex-col items-center p-6 bg-white rounded shadow-xl'),
    SVGImage: flow(
      replaceWith(imgRequirements),
    ),
    Title: flow(
      withEditorFullFeatured({ nodeKey: 'title' }, 'Insert Title'),
      addClasses('text-xl font-bold leading-snug tracking-tight mb-1'),
    ),
    Body: flow(
      withEditorFullFeatured({ nodeKey: 'body' }, 'Insert Summary'),
      addClasses('text-gray-600 text-center'),
    ),
  }),
  withNodeKey({ nodeKey: 'FeatureBlock' }),
);

const FeaturesBlock = asFeaturesBlock(FeaturesBlockClean);

export default FeaturesBlock;
