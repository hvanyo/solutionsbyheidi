import { addClasses, flowHoc, removeClasses } from '@bodiless/fclasses';

/* Page Structure */
const asPageContainer = addClasses('container mx-auto');

/* Responsive design */
const asMobileOnly = addClasses('lg:hidden');
const asDesktopOnly = flowHoc(
  addClasses('hidden lg:flex'),
  removeClasses('flex'),
);

export {
  asDesktopOnly,
  asPageContainer,
  asMobileOnly,
};
