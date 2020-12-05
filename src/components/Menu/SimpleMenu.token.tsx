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
import { withDesign, addClasses } from '@bodiless/fclasses';
import { withSimpleMenuDesign } from '@bodiless/organisms';

/**
 * Base Menu Styles
 * ===========================================
 */
const withBaseMenuStyles = withDesign({
  Wrapper: addClasses('flex flex-grow justify-end flex-wrap items-center'),
  Item: addClasses(''),  
  Title: addClasses('font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out'),
});

/**
 * Base Sub Menu Styles
 * ===========================================
 */
const withBaseSubMenuStyles = withDesign({
  Title: addClasses('font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out'),
});

/**
 * Simple Menu Styles
 * ===========================================
 */
const withSimpleMenuStyles = flow(
  withSimpleMenuDesign(withBaseSubMenuStyles),
  withBaseMenuStyles,
);

export default withSimpleMenuStyles;
export {
  withBaseMenuStyles,
  withBaseSubMenuStyles,
};
