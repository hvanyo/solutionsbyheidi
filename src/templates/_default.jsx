/**
 * Copyright © 2019 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { flow } from 'lodash';
import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import Layout from '../components/Layout';
import { FlowContainerDefault } from '../components/FlowContainer';
import { withEditorSimple } from '../components/Editors';
import { addClasses, H1 } from '@bodiless/fclasses';
import { asHeader1 } from '../components/Elements.token';

const HeaderTitle = flow(
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
