import {
  addClasses,
  withDesign,
} from '@bodiless/fclasses';

const asFlowContainerWithMargins = withDesign({
  Wrapper: addClasses('md:-m-5 py-5'),
  ComponentWrapper: addClasses('md:p-5'),
});

const asFlowContainerFullWidth = withDesign({
  Wrapper: addClasses('w-full'),
  ComponentWrapper: addClasses('w-full md:w-1/3'),
});

export {
  asFlowContainerWithMargins,
  asFlowContainerFullWidth,
};
