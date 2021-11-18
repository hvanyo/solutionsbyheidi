import { flow } from 'lodash';
import { addClasses, asToken, Token } from '@bodiless/fclasses';
import {
  asBodilessLink,
  asEditable as asEditableCore,
} from '@bodiless/components';
import { asBodilessImage } from '@bodiless/components-ui';
import {
  asResponsive21By9Embed,
  asResponsive16By9Embed,
  asResponsive4By3Embed,
  asResponsive1By1Embed,
} from '@bodiless/organisms';
import {
  asAlignCenter,
  asAlignRight,
  asAlignLeft,
  asUnderline,
  asAlignJustify,
} from './ElementDefault.token';

export const withCategory = <P extends object>(category?: string) => (...hocs: Token[]) => (
  asToken(
    {}, // see https://github.com/microsoft/TypeScript/issues/28010
    ...hocs,
    category ? asToken.meta.term('Category')(category) : undefined,
  )
);

/* Page Structure */
const asBlockItem = addClasses('p-1 w-full');
const asPageContainer = addClasses('container mx-auto');
const asXMargin = addClasses('mx-2');
const asYMargin = addClasses('my-2');
const asNegXMargin = addClasses('-mx-1');
const asNegYMargin = addClasses('-my-1');
const withPadding1 = addClasses('py-1');
const withPadding3 = addClasses('p-3');
const withPadding5 = addClasses('p-5');

/* Responsive design */
const asMobileOnly = addClasses('lg:hidden');
const asDesktopOnly = addClasses('hidden lg:flex');

/* Primary coloring */
const asPrimaryColorBackground = addClasses('bg-gray-200');
const asTextColorPrimary = addClasses('text-black');
const asTextWhite = addClasses('text-white');

/* Coloring */
const asTealBackground = addClasses('bg-teal-600');

/* Typography */
const asBold = addClasses('');
const asItalic = addClasses('');
const asLink = addClasses('text-brandRed-400 underline');
const asSuperScript = addClasses('');

const asHeader1 = flow(addClasses('text-4xl'), asTextColorPrimary);
const asHeader2 = addClasses('text-2xl');
const asHeader3 = addClasses('text-xl');

/* BlockQuote */
const asBlockQuote = addClasses('block mx-4');

/* Image component */
const asImage = addClasses('');
const asEditableImage = asBodilessImage;
const asImageRounded = addClasses('rounded-lg');

/* Link component */
const asEditableLink = asBodilessLink;

/* Edit component */
const asEditable = asEditableCore;

// Tout Components
const asCta = addClasses('bg-brandRed-400 hover:bg-brandRed-600 text-center text-white p-2 rounded');

/* Utility Classes */
const asDisabled = addClasses('pointer-events-none');

export {
  asBold,
  asItalic,
  asUnderline,
  asLink,
  asAlignLeft,
  asAlignRight,
  asAlignCenter,
  asAlignJustify,
  asDesktopOnly,
  asHeader1,
  asHeader2,
  asHeader3,
  asCta,
  asDisabled,
  asBlockItem,
  asPageContainer,
  asPrimaryColorBackground,
  asTealBackground,
  asImage,
  asEditableImage,
  asEditableLink,
  asEditable,
  asImageRounded,
  asMobileOnly,
  asSuperScript,
  asTextColorPrimary,
  asTextWhite,
  asXMargin,
  asYMargin,
  asNegXMargin,
  asNegYMargin,
  asBlockQuote,
  withPadding1,
  withPadding3,
  withPadding5,
  asResponsive21By9Embed,
  asResponsive16By9Embed,
  asResponsive4By3Embed,
  asResponsive1By1Embed,
};
