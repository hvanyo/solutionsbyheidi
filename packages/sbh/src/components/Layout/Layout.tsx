import React, { ComponentType, Fragment, FC } from 'react';
import {
  Div, designable, DesignableComponentsProps, flowHoc,
} from '@bodiless/fclasses';
import { withBurgerMenuProvider } from '@bodiless/navigation';
import FullHeader from './header';
import Footer from './footer';
import SeoHelmet from './meta';

import { asSiteHeader, asSiteFooter } from './token';

const SiteHeader = asSiteHeader(FullHeader);
const SiteFooter = asSiteFooter(Footer);

const Container = flowHoc(

)(Div);

const SiteProviders = flowHoc(
  withBurgerMenuProvider,
)(Fragment);

type LayoutComponents = {
  Breadcrumbs: ComponentType<any>,
};

type LayoutProps = DesignableComponentsProps<LayoutComponents>;

// @ts-ignore
const BaseLayout: FC<LayoutProps> = ({ children, components }) => {
  const { Breadcrumbs } = components;
  return (
    <>
      <SeoHelmet />
      <SiteProviders>
        <SiteHeader />
        <Container>
          { Breadcrumbs && <Breadcrumbs />}
          {children}
        </Container>
      </SiteProviders>
      <SiteFooter />
    </>
  );
};

export const Layout = designable({})(BaseLayout);
