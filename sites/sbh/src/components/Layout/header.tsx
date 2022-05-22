import React, {
  FC, useState, useEffect, useContext,
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
  on,
  A,
  Fragment,
  replaceWith,
} from '@bodiless/fclasses';
import { withChild, withNode } from '@bodiless/core';
import { asVitalTokenSpec, vitalTextDecoration } from '@bodiless/vital-elements';
import {
  asBurgerMenuToggler,
  vitalBurgerMenu,
  BurgerMenuClean,
  asBurgerMenuToken,
  vitalMenu,
  MenuClean,
  asMenuToken,
} from '@bodiless/vital-navigation';
import LogoClean from './logo';
import sbhLogo from './logotokens';
import { asPageContainer } from '../Elements.token';
import BurgerIcon from './assets/BurgerIcon';

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
  LogoWrapper: ComponentOrTag<any>,
  SiteLogoContainer: ComponentOrTag<any>,
  MenuContainer: ComponentOrTag<any>,
  Menu: ComponentOrTag<any>,
  MenuTogglerWrapper: ComponentOrTag<any>,
  MenuToggler: ComponentOrTag<any>,
  BurgerMenuWrapper: ComponentOrTag<any>,
  BurgerMenu: ComponentOrTag<any>,
  SiteBranding: ComponentOrTag<any>,
  SiteLogoReturn: ComponentOrTag<any>,
};
export type HeaderProps = DesignableComponentsProps<HeaderComponents>;

const headerComponents:HeaderComponents = {
  Wrapper: Header,
  Container: Div,
  LogoWrapper: Div,
  SiteLogoContainer: Div,
  MenuContainer: Div,
  Menu: MenuClean,
  MenuTogglerWrapper: Div,
  MenuToggler: A,
  BurgerMenuWrapper: Fragment,
  BurgerMenu: BurgerMenuClean,
  SiteBranding: Div,
  SiteLogoReturn: Div,
};

const HeaderBase: FC<HeaderProps> = ({ components: C, ...rest }) => (
  <C.Wrapper {...rest}>
    <C.Container>
      <C.LogoWrapper>
        <C.SiteLogoReturn />
      </C.LogoWrapper>
      <C.MenuContainer>
        <C.MenuTogglerWrapper>
          <C.MenuToggler />
        </C.MenuTogglerWrapper>
        <C.Menu />
        <C.BurgerMenuWrapper>
          <C.BurgerMenu />
        </C.BurgerMenuWrapper>
      </C.MenuContainer>
    </C.Container>
  </C.Wrapper>
);

export const HeaderClean = as(
  designable(headerComponents, 'Header'),
  withNode,
)(HeaderBase);

export const asHeaderToken = asVitalTokenSpec<HeaderComponents>();

const SBHBurgerMenu = asBurgerMenuToken(vitalBurgerMenu.Default, {
  Components: {
    UtilityMenu: replaceWith(() => null),
    WhereToBuy: replaceWith(() => null),
  },
});

const SBHTopNavMenu = asMenuToken({
  ...vitalMenu.TopNav,
  Theme: {
    Item: 'relative group',
    Title: as(
      'text-lg font-medium text-gray-600 hover:text-gray-900',
      vitalTextDecoration.Uppercase,
      'whitespace-nowrap cursor-pointer',
    ),
  },
});

const headerTokens = asHeaderToken({
  Core: {
    MenuToggler: asBurgerMenuToggler,
  },
  Components: {
    SiteLogoReturn: on(LogoClean)(sbhLogo.Default),
    BurgerMenu: as(SBHBurgerMenu),
    Menu: as(SBHTopNavMenu),
  },
  Theme: {
    Wrapper: flowHoc(
      withIsTop(),
      // TODO Not quite working
      // addClassesIf(isNotTop)('bg-white blur shadow-lg'),
      addClassesIf(isNotTop)('bg-white shadow-lg'),
      asPageContainer,
    ),
    LogoWrapper: 'flex-shrink px-2 order-0',
    MenuContainer: 'flex md:order-1',
    Container: 'flex justify-between h-16 md:h-auto items-center flex-wrap md:bg-transparent px-4 md:px-0',
  },
  Layout: {
    MenuContainer: 'flex justify-right',
    MenuToggler: 'flex justify-center items-center',
    MenuTogglerWrapper: 'flex md:hidden',
    Menu: 'hidden md:flex'
  },
  Schema: {
    _: withNode,
  },
  Content: {
    MenuToggler: withChild(BurgerIcon),
  },
  Spacing: {
    MenuToggler: 'w-6 h-6',
    MenuTogglerWrapper: 'my-4',
  },
});

const FullHeader = as(headerTokens)(HeaderClean);

export default FullHeader;
