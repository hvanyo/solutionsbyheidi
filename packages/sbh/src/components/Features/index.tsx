import React, { FC } from 'react';
import {
  designable,
  ComponentOrTag,
  DesignableComponentsProps,
  Div,
  addClasses,
  P,
  H2,
  Section,
  as,
  on,
} from '@bodiless/fclasses';
import { withNode, withNodeKey } from '@bodiless/core';
import { asVitalTokenSpec } from '@bodiless/vital-elements';
import { RichTextClean, vitalRichText } from '@bodiless/vital-editors';
import FeatureTabs from './FeatureTabToken';
import { FeatureTabsClean } from './FeatureTab';

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

const FeaturesBase: FC<FeaturesProps> = ({ components: C, ...rest }) => (
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

const FeaturesClean = as(
  designable(featuresComponents, 'Features'),
  withNode,
)(FeaturesBase);

const asFeaturesToken = asVitalTokenSpec<FeaturesComponents>();

const featureTokens = asFeaturesToken({
  Components: {
    TabbedArea: on(FeatureTabsClean)(FeatureTabs.Default),
  },
  Layout: {
    Wrapper: addClasses('relative'),
  },
  Theme: {
    GrayBackground: addClasses('absolute inset-0 bg-gray-100 pointer-events-none mb-16'),
    GrayLine: addClasses('absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2'),
    Title: 'h2 mb-4',
    Summary: 'text-xl text-gray-600',
    TabbedArea: 'md:grid md:grid-cols-12 md:gap-6',
  },
  Editors: {
    Title: on(RichTextClean)(vitalRichText.Default),
    Summary: on(RichTextClean)(vitalRichText.Default),
  },
  Schema: {
    Title: withNodeKey('feature_sectiontitle'),
    Summary: withNodeKey('feature_sectionsummary'),
  },
});

const Features = as(featureTokens)(FeaturesClean);

export default Features;

export { FeaturesClean, asFeaturesToken };
