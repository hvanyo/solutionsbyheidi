/**
 * Copyright © 2020 Johnson & Johnson
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
import {
  Div, designable, addClasses, replaceWith,
} from '@bodiless/fclasses';
import { useNode, withNodeKey, ifToggledOn } from '@bodiless/core';
import FullHeader from './header';
import Footer from './footer';
import SeoHelmet from './meta';

import MenuBreadcrumbs from '../Breadcrumbs/MenuBreadcrumbs';

import { asSiteHeader, asSiteFooter } from './token';

const SiteHeader = asSiteHeader(FullHeader);
const SiteFooter = asSiteFooter(Footer);

const Container = flow(
  
)(Div);

const BaseLayout = ({ children, components }) => {
  const { Breadcrumbs } = components;
  return (
    <>
      <SeoHelmet />
      <SiteHeader />
      <Container className="flex flex-col min-h-screen overflow-hidden">
        { Breadcrumbs && <Breadcrumbs />}
        {children}
      </Container>
      <SiteFooter />
    </>
  );
};

const isHomePage = () => useNode().node.pagePath === '/';

const Layout = designable({
  /*
  Breadcrumbs: flow(
    withNodeKey({ nodeKey: 'MainMenu', nodeCollection: 'site' }),
    addClasses('pt-2'),
    // hide breadcrumbs on home page
    ifToggledOn(isHomePage)(replaceWith(React.Fragment)),
  )(MenuBreadcrumbs),
*/
})(BaseLayout);

export default Layout;
