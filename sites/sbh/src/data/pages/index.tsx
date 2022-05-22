import React from 'react';
import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import { LayoutClean } from '@bodiless/vital-layout';
import { as } from '@bodiless/fclasses';
import { SBHLayout } from '../../components/Layout';
import FeaturesBlocks from '../../components/FeatureBlocks';
import Features from '../../components/Features';
import Testimonials from '../../components/Testimonials';
import HeroHome from '../../components/HeroHome';

const Layout = as(SBHLayout)(LayoutClean);

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
