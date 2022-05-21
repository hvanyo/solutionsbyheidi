import React from 'react';

import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import { withEditorPlain } from '@bodiless/vital-editors';
import {
  addClasses, H1, flowHoc, as, on
} from '@bodiless/fclasses';
import { vitalFlowContainer, FlowContainerClean } from '@bodiless/vital-flowcontainer';
import { LayoutClean } from '@bodiless/vital-layout';
import { SBHLayout } from 'sbh';

const HeaderTitle = flowHoc(
  withEditorPlain('header', 'H1 Title'),
  addClasses('text-4xl py-6 text-center'),
)(H1);

const FlowContainerDefault = as(
  vitalFlowContainer.Default,
)(FlowContainerClean);

const Layout = as(SBHLayout)(LayoutClean);

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
