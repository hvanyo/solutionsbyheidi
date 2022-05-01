import React, { FC } from 'react';
import {
  designable,
  ComponentOrTag,
  DesignableComponentsProps,
  Div,
  withDesign,
  addClasses,
  P,
  H2,
  Section,
  replaceWith,
  flowHoc,
} from '@bodiless/fclasses';
import { withEditorRich } from '@bodiless/vital-editors';
import FeatureTab from './FeatureTab';

type FeaturesComponents = {
  Wrapper: ComponentOrTag<any>,
  GrayBackground: ComponentOrTag<any>,
  GrayLine: ComponentOrTag<any>,
  Title: ComponentOrTag<any>,
  Summary: ComponentOrTag<any>,
  TabbedArea: ComponentOrTag<any>,
};

export type FeaturesProps = DesignableComponentsProps<FeaturesComponents>;

const featuresComponents: FeaturesComponents = {
  Wrapper: Section,
  GrayBackground: Div,
  GrayLine: Div,
  Title: H2,
  Summary: P,
  TabbedArea: Div,
};

const FeaturesClean: FC<FeaturesProps> = ({ components: C, ...rest }) => (
  <C.Wrapper {...rest}>

    {/* Section background (needs .relative class on parent and next sibling elements) */}
    <C.GrayBackground />
    <C.GrayLine />

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-12 md:pt-20">

        {/* Section header */}

        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <C.Title />
          <C.Summary />
        </div>

        {/* Section content */}
        <C.TabbedArea />

      </div>
    </div>
  </C.Wrapper>
);

/* TODO add data-aos="zoom-y-out" to Title */

const asFeatures = flowHoc(
  designable(featuresComponents, 'Features'),
  withDesign({
    Wrapper: addClasses('relative'),
    // TODO add aria-hidden="true" to GrayBackground
    GrayBackground: addClasses('absolute inset-0 bg-gray-100 pointer-events-none mb-16'),
    GrayLine: addClasses('absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2'),
    Title: flowHoc(
      withEditorRich('feature_sectiontitle', 'Insert Section Title'),
      addClasses('h2 mb-4'),
    ),
    Summary: flowHoc(
      withEditorRich('feature_sectionsummary', 'Insert Summary'),
      addClasses('text-xl text-gray-600'),
    ),
    TabbedArea: flowHoc(
      replaceWith(FeatureTab),
      addClasses('md:grid md:grid-cols-12 md:gap-6'),
    ),
  }),
);

const Features = asFeatures(FeaturesClean);

export default Features;
