import React, {
  FC, useState, useEffect, useContext
} from 'react';
import {
  designable,
  ComponentOrTag,
  DesignableComponentsProps,
  Div,
  Header,
  addClassesIf,
  flowHoc,
  as,
} from '@bodiless/fclasses';
import { withNode, withNodeKey } from '@bodiless/core';
import ResponsiveMenu, { BurgerMenuToggler } from '../Menu';
import LogoClean from './logo';
import sbhLogo from './logotokens';
import { asVitalTokenSpec } from '@bodiless/vital-elements';

const IsTopContext = React.createContext({
  top: false,
});

const withIsTop = () => (Component: any) => (props: any) => {
  const [top, setTop] = useState(true);
  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);
  return (
    <Component {...props} />
  );
};

const useIsTopContext = () => useContext(IsTopContext);

// const isTop = () => useIsTopContext().top;
const isNotTop = () => !(useIsTopContext().top);

type HeaderComponents = {
  Wrapper: ComponentOrTag<any>,
  Container: ComponentOrTag<any>,
  SiteLogoContainer: ComponentOrTag<any>,
  MenuContainer: ComponentOrTag<any>,
  Menu: ComponentOrTag<any>,
  MenuToggler: ComponentOrTag<any>,
  SiteBranding: ComponentOrTag<any>,
  SiteLogoReturn: ComponentOrTag<any>,
};
export type HeaderProps = DesignableComponentsProps<HeaderComponents>;

const headerComponents:HeaderComponents = {
  Wrapper: Header,
  Container: Div,
  SiteLogoContainer: Div,
  MenuContainer: Div,
  Menu: ResponsiveMenu,
  MenuToggler: BurgerMenuToggler,
  SiteBranding: Div,
  SiteLogoReturn: LogoClean,
};

const HeaderBase: FC<HeaderProps> = ({ components: C, ...rest }) => (
  <C.Wrapper {...rest}>
    <C.Container>
      <C.SiteLogoReturn />
      <C.MenuContainer>
        <C.MenuToggler />
        <C.Menu />
      </C.MenuContainer>
    </C.Container>
  </C.Wrapper>
);

export const HeaderClean = as(
  designable(headerComponents, 'Footer'),
  withNode,
)(HeaderBase);

export const asHeaderToken = asVitalTokenSpec<HeaderComponents>();

const headerTokens = asHeaderToken({
  Components: {
    SiteLogoReturn: sbhLogo.Default,
  },
  Theme: {
    Wrapper: flowHoc(
      withIsTop(),
      // TODO Not quite working
      // addClassesIf(isNotTop)('bg-white blur shadow-lg'),
      addClassesIf(isNotTop)('bg-white shadow-lg'),
    ),
  },
  Schema: {
    Menu: withNodeKey({ nodeKey: 'MainMenu', nodeCollection: 'site' }),
    _: withNode,
  },
});

const FullHeader = as(headerTokens)(HeaderClean);

export default FullHeader;
