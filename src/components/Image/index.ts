import { ComponentType } from 'react';
import {
  withChild,
  withSidecarNodes,
} from '@bodiless/core';
import flowRight from 'lodash/flowRight';
import {
  withImagePlaceholder,
  withDefaultImageContent,
  AsBodilessImage,
} from '@bodiless/components';
import {
  asBodilessLink,
  asBodilessImage,
} from '@bodiless/components-ui';
import {
  GatsbyImagePresets,
  withGatsbyImagePreset,
  withoutGatsbyImageProps,
} from '@bodiless/gatsby-theme-bodiless';
import {
  flowHoc,
  stylable,
  A,
  Img,
} from '@bodiless/fclasses';
// @ts-ignore Cannotfind module
import landscapeImage from './landscape_image.png';

export const asBaseEditableImagePlain: AsBodilessImage = (nodeKey?, placeholder?, useOverrides?) => flowHoc(
  flowHoc.meta.term('Component')('Image'),
  flowHoc.meta.term('Category')('Editors'),
  stylable,
  asBodilessImage(nodeKey, undefined, useOverrides),
  withImagePlaceholder(placeholder),
);

/**
 * util function to build a hoc for rendering a non-responsive image.
 */
export const asEditableImagePlain: AsBodilessImage = (
  nodeKey?, placeholder?, useOverrides?,
) => flowHoc(
  withoutGatsbyImageProps,
  asBaseEditableImagePlain(nodeKey, placeholder, useOverrides),
  asBaseEditableImagePlain(nodeKey, placeholder, useOverrides).meta,
);

/**
 * util function to build a hoc for rendering a responsive image.
 */
const asEditableImage = withGatsbyImagePreset(GatsbyImagePresets.FluidWithWebp)(asBaseEditableImagePlain);

// Allows to set default content for image based component.
const asContentfulImage = withDefaultImageContent(asEditableImage);

const DEFAULT_IMAGE_NODE_KEY = 'image';
const DEFAULT_LINK_NODE_KEY = 'link';

const asEditableImageWithPlaceholder = (placeholder: string) => (nodeKey: string) => flowRight(
  withImagePlaceholder({ src: placeholder }),
  asEditableImagePlain(nodeKey),
);

const asLinkableImage = (ImageComponent: ComponentType<any>) => (nodeKey: string) => flowRight(
  withSidecarNodes(
    asBodilessLink(nodeKey),
  ),
  withChild(ImageComponent),
);

const asSquareImage = asEditableImagePlain;
const SquareImage = asSquareImage(DEFAULT_IMAGE_NODE_KEY)(Img);
const SquareLinkableImage = asLinkableImage(SquareImage)(DEFAULT_LINK_NODE_KEY)(A);
const asLandscapeImage = asEditableImageWithPlaceholder(landscapeImage);
const LandscapeImage = asLandscapeImage(DEFAULT_IMAGE_NODE_KEY)(Img);
const LandscapeLinkableImage = asLinkableImage(LandscapeImage)(DEFAULT_LINK_NODE_KEY)(A);

export {
  SquareImage,
  LandscapeImage,
  SquareLinkableImage,
  LandscapeLinkableImage,
  asContentfulImage,
  asLandscapeImage,
  asEditableImageWithPlaceholder,
  asLinkableImage,
  asEditableImage,
};
