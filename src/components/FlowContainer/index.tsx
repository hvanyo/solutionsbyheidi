import { flowHoc } from '@bodiless/fclasses';
import { withMandatoryCategories } from '@bodiless/layouts';
import { FlowContainer } from '@bodiless/layouts-ui';
import withCardVariations from './withCardVariations';
import withRichTextVariations from './withRichTextVariations';
import withImageVariations from './withImageVariations';
import { asFlowContainerWithMargins } from './token';

// Order of includes currently dictates order in Component Picker
// thus recommend putting more frequently used components toward top for quicker access.
const FlowContainerDefault = flowHoc(
  withRichTextVariations,
  withImageVariations,
  withCardVariations,
  asFlowContainerWithMargins,
  withMandatoryCategories(['Orientation', 'Type']),
)(FlowContainer);

// eslint-disable-next-line import/prefer-default-export
export { FlowContainerDefault };
