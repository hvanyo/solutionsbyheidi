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
