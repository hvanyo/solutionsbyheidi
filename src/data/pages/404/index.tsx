import React from 'react';
import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import Layout from '../../../components/Layout';
import { FlowContainerDefault } from '../../../components/FlowContainer';

export default (props: any) => (
  <Page {...props}>
    <Layout>
      <FlowContainerDefault nodeKey="notfound" />
    </Layout>
  </Page>
);

export const query = graphql`
  query($slug: String!) {
    ...PageQuery
    ...SiteQuery
  }
`;
