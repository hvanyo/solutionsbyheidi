import {
  addClasses,
  withDesign,
  asToken,
  remove,
} from '@bodiless/fclasses';
import {
  asCardVertical as asBCardVertical,
  asCardHorizontal as asBCardHorizontal,
  asCardNoTitle as asCardNoTitle$,
  asCardNoBody as asCardNoBody$,
  asCardNoCta as asCardNoCta$,
  asCardOverlayTitle as asCardOverlayTitle$,
  asCardOverlayCta as asCardOverlayCta$,
  asCardNoBodyNoTitle as asCardNoBodyNoTitle$,
} from '@bodiless/card';
import {
  asImageRounded,
  asCta,
  asHeader2,
  asBlockItem,
  asTextColorPrimary,
  withCategory,
} from '../Elements.token';

const asCardHorizontal$ = asToken(
  withDesign({
    Title: addClasses('p-2'),
    Body: addClasses('p-2'),
    Link: addClasses('md:mx-2'),
  }),
  asBCardHorizontal,
);
const asCardVertical$ = asToken(
  withDesign({
    Title: addClasses('p-2'),
    Body: addClasses('p-2'),
  }),
  asBCardVertical,
);

const asCardDefaultStyle$ = withDesign({
  Wrapper: asToken(
    asTextColorPrimary,
    addClasses('shadow p-2'),
  ),
  Image: asImageRounded,
  Title: asHeader2,
  Link: asCta,
});

const asCardWithPaddings$ = withDesign({
  Wrapper: asBlockItem,
});

const asCardTextWhite$ = withDesign({
  Title: addClasses('text-white'),
  Body: addClasses('text-white'),
});

const asRtlCard$ = withDesign({
  Title: addClasses('rtl:text-right'),
  Body: addClasses('rtl:text-right'),
});


const asNoImage = withDesign({
  Image: remove,
  ImageLink: remove,
  ImageWrapper: remove,
});

const asCardHorizontal = withCategory('Orientation')(asCardHorizontal$);
const asCardVertical = withCategory('Orientation')(asCardVertical$);
const asCardNoTitle = withCategory('Structure')(asCardNoTitle$);
const asCardNoBody = withCategory('Structure')(asCardNoBody$);
const asCardNoCta = withCategory('Structure')(asCardNoCta$);
const asCardDefaultStyle = withCategory('Appearance')(asCardDefaultStyle$);
const asCardOverlayTitle = withCategory('Layout')(asCardOverlayTitle$);
const asCardOverlayCta = withCategory('Layout')(asCardOverlayCta$);
const asCardNoBodyNoTitle = withCategory('Structure')(asCardNoBodyNoTitle$);
const asCardWithPaddings = withCategory('Layout')(asCardWithPaddings$);
const asCardTextWhite = withCategory('Appearance')(asCardTextWhite$);
const asRtlCard = withCategory('Appearance')(asRtlCard$);
const withMenuCardStyles = asToken(
  asCardTextWhite,
  asCardWithPaddings,
  asCardDefaultStyle,
  asCardHorizontal,
  asRtlCard,
);

export {
  asCardHorizontal,
  asCardVertical,
  asCardNoTitle,
  asCardNoBody,
  asCardNoCta,
  asCardDefaultStyle,
  asCardOverlayTitle,
  asCardOverlayCta,
  asCardNoBodyNoTitle,
  asCardWithPaddings,
  asCardTextWhite,
  withMenuCardStyles,
  asNoImage,
};
