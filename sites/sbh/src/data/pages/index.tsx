import React from 'react';
import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
/*
import {
  Layout, FeaturesBlocks, Features, Testimonials, HeroHome
} from '@sbh/sbh';
*/
import { Layout } from '../../../../../packages/sbh/src/components/Layout';
import { FeaturesBlocks } from '../../../../../packages/sbh/src/components/FeatureBlocks';
import { Features } from '../../../../../packages/sbh/src/components/Features';
import { Testimonials } from '../../../../../packages/sbh/src/components/Testimonials';
import { HeroHome } from '../../../../../packages/sbh/src/components/HeroHome';

export default (props: any) => (
  <Page {...props}>
    <Layout>
      <HeroHome />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
    </Layout>
  </Page>
);

export const query = graphql`
  query($slug: String!) {
    ...PageQuery
    ...SiteQuery
    ...DefaultContentQuery
    allSite(filter: {pathPrefix: {eq: $slug}}) {
      edges {
        node {
          buildTime
        }
      }
    }
  }
`;
