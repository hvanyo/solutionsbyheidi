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

import React, { FC, ComponentType, HTMLProps, useState, useEffect, useContext } from 'react';
import { flow } from 'lodash';
import {
  designable,
  DesignableComponentsProps,
  withDesign,
  Div,
  Header,
  addClassesIf,
} from '@bodiless/fclasses';
import { withNodeKey } from '@bodiless/core';
import { SimpleMenu } from '../Menu';
import Logo from './logo';

const IsTopContext = React.createContext({
  top: false,
});

const withIsTop = () => (Component: any) => (props: any) => {
  const [top, setTop] = useState(true);
  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]); 
  return (
    <Component {...props} />
  );
};

const useIsTopContext = () => useContext(IsTopContext);

const isTop = () => useIsTopContext().top;
const isNotTop = () => !(useIsTopContext().top);

type HeaderComponents = {
  Wrapper: ComponentType<any>,
  Container: ComponentType<any>,
  SiteLogoContainer: ComponentType<any>,
  MenuContainer: ComponentType<any>,
  SiteNav: ComponentType<any>,
  Menu: ComponentType<any>,
  SiteBranding: ComponentType<any>,
  SiteLogoReturn: ComponentType<any>,  
};
export type Props = DesignableComponentsProps<HeaderComponents> & HTMLProps<HTMLElement>;

const headerComponents:HeaderComponents = {
  Wrapper: Header,
  Container: Div,
  SiteLogoContainer: Div,
  SiteNav: Div,
  Menu: SimpleMenu,
  SiteBranding: Div,
  SiteLogoReturn: Logo,
};
const HeaderClean: FC<Props> = ({ components }) => {
  const {
    Wrapper,
    Container,
    SiteLogoContainer,
    SiteNav,
    Menu,
    SiteBranding,
    SiteLogoReturn,
  } = components;

  return (
    <Wrapper>
      <Container>
        <SiteLogoContainer>
          <SiteBranding>
            <SiteLogoReturn />
          </SiteBranding>
          <SiteNav>
            <Menu />
          </SiteNav>
        </SiteLogoContainer>
      </Container>
    </Wrapper>
  );
};

const asSiteHeader = flow(
  designable(headerComponents, 'Header'),
  withDesign({
    Menu: withNodeKey({ nodeKey: 'MainMenu', nodeCollection: 'site' }),
    Wrapper: flow(
      withIsTop(),
      // TODO Not quite working 
      addClassesIf(isNotTop)('bg-white blur shadow-lg'),
    ),
  }),
);

const FullHeader = asSiteHeader(HeaderClean);
export default FullHeader;
