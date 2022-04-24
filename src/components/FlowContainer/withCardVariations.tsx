import {
  withFacet,
  withDesc,
} from '@bodiless/layouts';
import {
  varyDesigns,
  extendDesign,
  replaceWith,
  withDesign,
  flowHoc,
} from '@bodiless/fclasses';
import Card from '../Card';
import {
  asCardHorizontal,
  asCardVertical,
  asCardNoTitle,
  asCardNoCta,
  asCardNoBody,
  asCardNoBodyNoTitle,
  asCardDefaultStyle,
  asNoImage,
} from '../Card/token';
import { withType } from './Categories';

export const withStructureFacet = withFacet('Card Structure');
export const withOrientationFacet = withFacet('Orientation');

const baseVariation = {
  Card: flowHoc(
    replaceWith(Card),
    withDesc('A way to promote a Call to Action.\n'),
    withType('Card')(asCardDefaultStyle),
  ),
};

// Lets make Card version that are Vertical and vary the fields that are used
const verticalVariations = varyDesigns(
  {
    Vertical: withOrientationFacet('Vertical')(asCardVertical),
  },
  {
    WithTitleBody: withStructureFacet('With Title and Body')(),
    NoTitle: withStructureFacet('No Title')(asCardNoTitle),
    NoBody: withStructureFacet('No Body')(asCardNoBody),
    NoTitleBody: withStructureFacet('No Title and Body')(asCardNoBodyNoTitle),
    NoImage: withStructureFacet('No Image')(asNoImage),
  },
);
// Lets make Card version that are Horizontal and vary the fields that are used
const horizontalVariations = varyDesigns(
  {
    Horizontal: withOrientationFacet('Horizontal')(asCardHorizontal),
  },
  {
    WithTitleBody: withStructureFacet('With Title and Body')(),
    NoTitle: withStructureFacet('No Title')(asCardNoTitle),
    NoBody: withStructureFacet('No Body')(asCardNoBody),
  },
);
// Lets combine the Vertical and Horizontal
const orientationVariations = extendDesign(
  horizontalVariations,
  verticalVariations,
);

const ctaVariations = {
  WithCTA: withStructureFacet('With CTA')(),
  NoCTA: withStructureFacet('No CTA')(asCardNoCta),
};

export default withDesign(varyDesigns(
  baseVariation,
  orientationVariations,
  ctaVariations,
));
