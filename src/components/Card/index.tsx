import {
  withSidecarNodes,
} from '@bodiless/core';
import {
  CardClean,
} from '@bodiless/card';
import {
  withDesign, startWith, asToken,
} from '@bodiless/fclasses';
import { GatsbyLink } from '@bodiless/gatsby-theme-bodiless';
import {
  asEditableLink,
} from '../Elements.token';
import { asEditableImage } from '../Image';
import {
  withEditorBasic,
  withEditorSimple,
} from '../Editors';

export const withCardEditors = asToken(
  withDesign({
    Image: asEditableImage('image'),
    ImageLink: asToken(
      withSidecarNodes(
        asEditableLink('link'),
      ),
      startWith(GatsbyLink),
    ),
    Title: withEditorSimple('title', 'Card Title Text'),
    Link: asToken(
      withEditorSimple('ctatext', 'CTA'),
      withSidecarNodes(
        asEditableLink('link', undefined, () => ({ groupLabel: 'CTA' })),
      ),
      startWith(GatsbyLink),
    ),
    Body: withEditorBasic('body', 'Card Body Text'),
  }),
);

export const asEditableCard = asToken(
  withCardEditors,
);

const Card = asEditableCard(CardClean);
export default Card;
