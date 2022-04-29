import {
  addClasses,
  withDesign,
  flowHoc,
} from '@bodiless/fclasses';
import {
  asPageContainer,
} from '../Elements.token';

const asDefaultLogoStyle = withDesign({
  SiteReturn: addClasses('flex-shrink px-2 order-0'),
  SiteLogo: addClasses('h-126 lg:h-16 max-w-1'),
});

const asSiteHeader = withDesign({
  Container: flowHoc(
    asPageContainer,
    addClasses('flex justify-between h-16 lg:h-auto items-center flex-wrap lg:bg-transparent px-4 lg:px-0'),
  ),
  MenuContainer: addClasses('flex lg:order-1'),
  SiteLogoReturn: asDefaultLogoStyle,
  SiteNav: addClasses('flex flex-grow justify-end'),
});

const asSiteFooter = withDesign({
  Wrapper: addClasses('bg-gray-200'),
  Container: flowHoc(asPageContainer, addClasses('p-3')),
});

export {
  asSiteHeader,
  asDefaultLogoStyle,
  asSiteFooter,
};
