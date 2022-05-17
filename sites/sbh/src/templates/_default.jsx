import React from 'react';

import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import { withEditorPlain } from '@bodiless/vital-editors';
import { vitalTypography } from '@bodiless/vital-elements';
import {
  addClasses, H1, flowHoc, as
} from '@bodiless/fclasses';
import { vitalFlowContainer, FlowContainerClean } from '@bodiless/vital-flowcontainer';
import { Layout } from '../../../../packages/sbh/src/components/Layout';

const HeaderTitle = flowHoc(
  withEditorPlain('header', 'H1 Title'),
  addClasses('py-6 text-center'),
  vitalTypography.H1,
)(H1);

const FlowContainerDefault = as(
  vitalFlowContainer.Default,
)(FlowContainerClean);

export default props => (
  <Page {...props}>
    <Layout>
      <div className="px-2 mt-16 container mx-auto">
        <HeaderTitle nodeKey="title" />
        <div className="flex flex-wrap my-3 flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/4 sm:pr-3 lg:pr-5">
            <FlowContainerDefault nodeKey="sidebar_l" />
          </div>
          <div className="w-full md:w-1/2 ">
            <FlowContainerDefault nodeKey="page" />
          </div>
          <div className="w-full md:w-1/4 sm:pl-3 lg:pl-5">
            <FlowContainerDefault nodeKey="sidebar_r" />
          </div>
        </div>

      </div>
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
