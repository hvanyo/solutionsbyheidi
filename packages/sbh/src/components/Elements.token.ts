import { addClasses, flowHoc, removeClasses } from '@bodiless/fclasses';

/* Page Structure */
const asBlockItem = addClasses('p-1 w-full');
const asPageContainer = addClasses('container mx-auto');
const asXMargin = addClasses('mx-2');
const asYMargin = addClasses('my-2');
const asNegXMargin = addClasses('-mx-1');
const asNegYMargin = addClasses('-my-1');
const withPadding1 = addClasses('py-1');
const withPadding3 = addClasses('p-3');
const withPadding5 = addClasses('p-5');

/* Responsive design */
const asMobileOnly = addClasses('lg:hidden');
const asDesktopOnly = flowHoc(
  addClasses('hidden lg:flex'),
  removeClasses('flex'),
);

/* Utility Classes */
const asDisabled = addClasses('pointer-events-none');

export {
  asDesktopOnly,
  asDisabled,
  asBlockItem,
  asPageContainer,
  asMobileOnly,
  asXMargin,
  asYMargin,
  asNegXMargin,
  asNegYMargin,
  withPadding1,
  withPadding3,
  withPadding5,
};
