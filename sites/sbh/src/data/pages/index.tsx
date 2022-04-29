import React from 'react';
import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import Layout from '../../components/Layout';
import FeaturesBlocks from '../../components/FeatureBlocks';
import Features from '../../components/Features';
import Testimonials from '../../components/Testimonials';
import HeroHome from '../../components/HeroHome';

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
  }
`;
