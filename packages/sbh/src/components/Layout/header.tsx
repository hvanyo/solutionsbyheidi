import React, {
  FC, useState, useEffect, useContext
} from 'react';
import {
  designable,
  ComponentOrTag,
  DesignableComponentsProps,
  withDesign,
  Div,
  Img,
  Header,
  addClassesIf,
  flowHoc,
} from '@bodiless/fclasses';
import { withNodeKey } from '@bodiless/core';
import ResponsiveMenu, { BurgerMenuToggler } from '../Menu';
// import Logo from './logo';

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
  SiteLogoReturn: Img,
};

const HeaderClean: FC<HeaderProps> = ({ components: C, ...rest }) => (
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

const asSiteHeader = flowHoc(
  designable(headerComponents, 'Header'),
  withDesign({
    Menu: withNodeKey({ nodeKey: 'MainMenu', nodeCollection: 'site' }),
    Wrapper: flowHoc(
      withIsTop(),
      // TODO Not quite working
      // addClassesIf(isNotTop)('bg-white blur shadow-lg'),
      addClassesIf(isNotTop)('bg-white shadow-lg'),
    ),
  }),
);

const FullHeader = asSiteHeader(HeaderClean);
export default FullHeader;
