import React, { ComponentType, Fragment, FC } from 'react';
import {
  Div, designable, DesignableComponentsProps, asToken, Token,
} from '@bodiless/fclasses';
import { useNode } from '@bodiless/core';
import { withBurgerMenuProvider } from '@bodiless/navigation';
import FullHeader from './header';
import Footer from './footer';
import SeoHelmet from './meta';

import { asSiteHeader, asSiteFooter } from './token';

const SiteHeader = asSiteHeader(FullHeader);
const SiteFooter = asSiteFooter(Footer);

const Container = asToken(

)(Div);

const SiteProviders = asToken(
  withBurgerMenuProvider,
)(Fragment);

type LayoutComponents = {
  Breadcrumbs: ComponentType<any>,
};

type LayoutProps = DesignableComponentsProps<LayoutComponents>;

const BaseLayout: FC<LayoutProps> = ({ children, components }) => {
  const { Breadcrumbs } = components;
  return (
    <>
      <SeoHelmet />
      <SiteProviders>
        <SiteHeader />
        <Container >
          { Breadcrumbs && <Breadcrumbs />}
          {children}
        </Container>
      </SiteProviders>
      <SiteFooter />
    </>
  );
};

const isHomePage = () => useNode().node.pagePath === '/';

const Layout = designable({
  /*
  Breadcrumbs: asToken(
    withNodeKey({ nodeKey: 'MainMenu', nodeCollection: 'site' }),
    addClasses('pt-2'),
    // hide breadcrumbs on home page
    flowIf(isHomePage)(replaceWith(React.Fragment)),
  )(BreadcrumbsBase),
*/
})(BaseLayout);

export default Layout;
