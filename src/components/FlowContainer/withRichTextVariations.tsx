import {
  withTitle,
  withDesc,
  ifComponentSelector,
} from '@bodiless/layouts';
import {
  varyDesign,
  replaceWith,
  withDesign,
  asToken,
} from '@bodiless/fclasses';
import { asPreview } from '@bodiless/richtext';

import {
  EditorBasic,
  EditorFullFeatured,
  EditorSimple,
} from '../Editors';
import { withType } from './Categories';

const richTextVariation = {
  EditorSimple: asToken(
    replaceWith(EditorSimple),
    ifComponentSelector(asPreview),
    withType('Rich Text')(),
    withTitle('Simple Rich Text'),
    withDesc('Adds a block of text for a Title.\n'),
  ),
  EditorBasic: asToken(
    replaceWith(EditorBasic),
    ifComponentSelector(asPreview),
    withType('Rich Text')(),
    withTitle('Basic Rich Text'),
    withDesc('Adds a block of text with basic formatting.\n'),
  ),
  EditorFullFeatured: asToken(
    replaceWith(EditorFullFeatured),
    ifComponentSelector(asPreview),
    withType('Rich Text')(),
    withTitle('Full Rich Text'),
    withDesc('Adds a block of text for more complex HTML.\n'),
  ),
};

export default withDesign(varyDesign(
  richTextVariation,
)());
