import React, { FC, ComponentType, HTMLProps, useState, useRef, useEffect } from 'react';
import { flow } from 'lodash';
import {
  designable,
  DesignableComponentsProps,
  DesignableProps,
  Div,
  withDesign,
  addClasses,
  P,
  H2,
  Section,
  replaceWith,
} from '@bodiless/fclasses';
import { withEditorFullFeatured } from '../Editors';
import FeatureTab from './FeatureTab';

type FeaturesComponents = {
  Wrapper: ComponentType<any>,
  Title: ComponentType<any>,
  Summary: ComponentType<any>,
  TabbedArea: ComponentType<any>,
};

export type Props = DesignableComponentsProps<FeaturesComponents> & HTMLProps<HTMLElement>;

const featuresComponents: FeaturesComponents = {
  Wrapper: Section,
  Title: H2,
  Summary: P,
  TabbedArea: Div,
};

const FeaturesClean: FC<DesignableProps> = ({ components }) => {
  const {
    Wrapper,
    Title,
    Summary,
    TabbedArea,
  } = components;

  return (
    <Wrapper>

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
  
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <Title /> 
            <Summary /> 
          </div>

          {/* Section content */}
          <TabbedArea /> 
          
        </div >
      </div >
    </Wrapper>
  );
};

/* TODO add data-aos="zoom-y-out" to Title */

const asFeatures = flow(
  designable(featuresComponents, 'Features'),
  withDesign({
    Wrapper: addClasses('relative'),    
    Title: flow(
      withEditorFullFeatured({ nodeKey: 'feature_sectiontitle' }, 'Insert Section Title'),
      addClasses('h2 mb-4'),
    ),
    Summary: flow(
      withEditorFullFeatured({ nodeKey: 'feature_sectionsummary' }, 'Insert Summary'),
      addClasses('text-xl text-gray-600'),
    ),
    TabbedArea: flow(
      replaceWith(FeatureTab),
      addClasses('md:grid md:grid-cols-12 md:gap-6'),
    ),
  }),
);

const Features = asFeatures(FeaturesClean);

export default Features;
