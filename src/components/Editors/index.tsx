import {
  asMark,
  asBlock,
  withKey,
  withButton,
} from '@bodiless/richtext';
import { RichText } from '@bodiless/richtext-ui';
import {
  withDesign,
  addClasses,
  startWith,
  Design,
  flowHoc,
} from '@bodiless/fclasses';
import { GatsbyLink } from '@bodiless/gatsby-theme-bodiless';
import {
  asBold,
  asItalic,
  asLink,
  asUnderline,
  asAlignLeft,
  asAlignRight,
  asAlignCenter,
  asAlignJustify,
  asHeader3,
  asHeader2,
  asHeader1,
  asSuperScript,
  asEditableLink,
} from '../Elements.token';
import withEditor from './withEditor';

const simpleDesign = {
  SuperScript: asSuperScript,
};
const basicDesign = {
  Bold: asBold,
  Italic: asItalic,
  Underline: asUnderline,
  Link: flowHoc(asEditableLink(), asLink),
  ...simpleDesign,
  AlignLeft: asAlignLeft,
  AlignRight: asAlignRight,
  AlignJustify: asAlignJustify,
  AlignCenter: asAlignCenter,
};

export const withQuoteBlockMeta = flowHoc(
  asBlock,
  withButton('format_quote'),
);

const asGradient = flowHoc(
  addClasses('bg-clip-text text-transparent bg-gradient-to-r from-brandRed-400 via-brandRed-700 to-brandRed-400 bg-clip-text'),
  asMark,
  withKey('gradient'),
  withButton('gradient'),
);

const fullFeaturedDesign: Design = {
  Bold: asBold,
  Italic: asItalic,
  Underline: asUnderline,
  Link: flowHoc(asEditableLink(), asLink, startWith(GatsbyLink)),
  SuperScript: asSuperScript,
  Gradient: asGradient,
  AlignLeft: asAlignLeft,
  AlignRight: asAlignRight,
  AlignJustify: asAlignJustify,
  AlignCenter: asAlignCenter,
  H1: asHeader1,
  H2: asHeader2,
  H3: asHeader3,
};

const EditorSimple = withDesign(simpleDesign)(RichText);
const EditorBasic = withDesign(basicDesign)(RichText);
const EditorFullFeatured = withDesign(fullFeaturedDesign)(RichText);
const withEditorBasic = withEditor(EditorBasic);
const withEditorSimple = withEditor(EditorSimple);
const withEditorFullFeatured = withEditor(EditorFullFeatured);
export {
  EditorBasic,
  EditorFullFeatured,
  EditorSimple,
  withEditorBasic,
  withEditorSimple,
  withEditorFullFeatured,
};
