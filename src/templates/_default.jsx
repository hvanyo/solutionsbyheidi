import React from 'react';

import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import Layout from '../components/Layout';
import { FlowContainerDefault } from '../components/FlowContainer';
import { withEditorSimple } from '../components/Editors';
import { addClasses, H1, flowHoc } from '@bodiless/fclasses';
import { asHeader1 } from '../components/Elements.token';

const HeaderTitle = flowHoc(
  withEditorSimple('header', 'H1 Title'),
  addClasses('py-6 text-center'),
  asHeader1,
)(H1);

export default props => (
  <Page {...props}>
    <Layout>
      <div className='px-2 mt-16 container mx-auto'>
        <HeaderTitle nodeKey='title' />
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
    ...PageQuery,
    ...SiteQuery
  }
`;
