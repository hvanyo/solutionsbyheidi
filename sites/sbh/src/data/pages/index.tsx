import React from 'react';
import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import {
  Layout, FeaturesBlocks, Features, Testimonials, HeroHome
} from 'sbh';

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
