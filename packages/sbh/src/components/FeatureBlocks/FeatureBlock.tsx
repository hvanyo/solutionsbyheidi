import { withNodeKey } from '@bodiless/core';
import {
  as, on, replaceWith, Div
} from '@bodiless/fclasses';
import { CardClean, asCardToken } from '@bodiless/vital-card';
import { EditorPlainClean, vitalEditorPlain } from '@bodiless/vital-editors';
import { vitalImage } from '@bodiless/vital-image';

const asFeatureCard = asCardToken({
  Components: {
    Wrapper: replaceWith(Div),
    Image: vitalImage.Default,
    EyebrowWrapper: replaceWith(() => null),
    Eyebrow: replaceWith(() => null),
  },
  Editors: {
    Title: on(EditorPlainClean)(vitalEditorPlain.Default),
    Description: on(EditorPlainClean)(vitalEditorPlain.Default),
  },
  Layout: {
    Wrapper: 'flex h-full flex-col',
    ContentWrapper: 'flex-grow',
    ImageWrapper: 'w-16 h-16 mx-auto',
  },
  Spacing: {
    ContentWrapper: 'p-4',
    TitleWrapper: 'mb-1',
    ImageWrapper: 'p-1 -mt-1 mb-2',
    Wrapper: 'm-3 mb-6 p-3',
  },
  Theme: {
    Wrapper: 'shadow-xl bg-white rounded',
    TitleWrapper: 'text-xl font-bold leading-snug tracking-tight text-center',
    ContentWrapper: 'text-gray-600 text-center',
  },
  Schema: {
    Title: withNodeKey('title'),
    Description: withNodeKey('body'),
    Image: withNodeKey('image'),
  },
});

const FeatureBlock = as(asFeatureCard)(CardClean);

export default FeatureBlock;
