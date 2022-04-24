import { ComponentType } from 'react';
import { withChild, withNodeKey } from '@bodiless/core';
import {
  addClasses, withoutProps, flowHoc, addProps, HOC,
} from '@bodiless/fclasses';

const withPlaceholder = (
  placeholder?: string,
): HOC|undefined => (placeholder === undefined ? undefined : addProps({ placeholder }));

const withEditor = (Editor:ComponentType<any>) => (nodeKey?: string, placeholder?: string) => (
  flowHoc(
    addClasses('overflow-hidden'),
    withChild(flowHoc(
      withPlaceholder(placeholder),
      withNodeKey(nodeKey),
      withoutProps(['design']),
    )(Editor), 'Editor'),
  )
);
export default withEditor;
export { withPlaceholder };
