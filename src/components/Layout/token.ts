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

import { flow } from 'lodash';
import {
  addClasses,
  withDesign,
} from '@bodiless/fclasses';
import {
  asPageContainer,
} from '../Elements.token';

const asDefaultLogoStyle = withDesign({
  SiteReturn: addClasses('block'),
  SiteLogo: addClasses('h-16 max-w-1'),
  // Do not addClasses to SiteLink as by default its Gatsby Link and not designable.
});


const asSiteHeader = withDesign({
  Wrapper: addClasses('fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out'),
  Container: addClasses('max-w-6xl mx-auto px-5 sm:px-6'),
  MenuContainer: asPageContainer,
  SiteBranding: addClasses('flex-shrink-0 mr-4'),
  SiteLogoReturn: asDefaultLogoStyle,
  SiteLogoContainer: addClasses("flex items-center justify-between h-16 md:h-20"),
  SiteNav: addClasses('flex flex-grow justify-end'),
});

const asSiteFooter = withDesign({
  Wrapper: addClasses('bg-gray-200'),
  Container: flow(asPageContainer, addClasses('p-3')),
});

export {
  asSiteHeader,
  asDefaultLogoStyle,
  asSiteFooter,
};
