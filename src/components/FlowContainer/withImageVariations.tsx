import {
  withTitle,
  withDesc,
  withFacet,
} from '@bodiless/layouts';
import {
  replaceWith,
  withDesign,
  flowHoc,
} from '@bodiless/fclasses';
import { withType } from './Categories';
import {
  SquareImage,
  SquareLinkableImage,
  LandscapeImage,
  LandscapeLinkableImage,
} from '../Image';

const withImageFacet = withFacet('Image');

const images = {
  SquareImage: flowHoc(
    replaceWith(SquareImage),
    withType('Image')(),
    withImageFacet('Square')(),
    withTitle('Square Image'),
    withDesc('Adds a square image'),
  ),
  LandscapeImage: flowHoc(
    replaceWith(LandscapeImage),
    withType('Image')(),
    withImageFacet('Landscape')(),
    withTitle('Landscape Image'),
    withDesc('Adds a landscape image'),
  ),
  SquareLinkableImage: flowHoc(
    replaceWith(SquareLinkableImage),
    withType('Image')(),
    withImageFacet('Linkable')(),
    withImageFacet('Square')(),
    withTitle('Square Linkable Image'),
    withDesc('Adds a square linkable image'),
  ),
  LandscapeLinkableImage: flowHoc(
    replaceWith(LandscapeLinkableImage),
    withType('Image')(),
    withImageFacet('Linkable')(),
    withImageFacet('Landscape')(),
    withTitle('Landscape Linkable Image'),
    withDesc('Adds a landscape linkable image'),
  ),
};

export default withDesign(images);
