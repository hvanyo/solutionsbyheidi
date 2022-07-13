import React, { FC } from 'react';
import {
  designable,
  ComponentOrTag,
  DesignableComponentsProps,
  Div,
  H1,
  Span,
  addClasses,
  as,
} from '@bodiless/fclasses';
import { withEditorPlain } from '@bodiless/vital-editors';
import { asVitalTokenSpec } from '@bodiless/vital-elements';
import { withNode } from '@bodiless/core';

type HeroComponents = {
  Wrapper: ComponentOrTag<any>,
  TitleWrapper: ComponentOrTag<any>,
  TitlePre: ComponentOrTag<any>,
  TitleColored: ComponentOrTag<any>,
  TitlePost: ComponentOrTag<any>,
};

export type HeroProps = DesignableComponentsProps<HeroComponents>;

const heroComponents: HeroComponents = {
  Wrapper: Div,
  TitleWrapper: H1,
  TitlePre: Span,
  TitleColored: Span,
  TitlePost: Span,
};

const HeroBase: FC<HeroProps> = ({ components: C, ...rest }) => (

  <section className="relative" {...rest}>

    {/* Illustration behind hero content */}
    <div className="absolute left-1/2 top-2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
      <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
            <stop stopColor="#FFF" offset="0%" />
            <stop stopColor="#EAEAEA" offset="77.402%" />
            <stop stopColor="#DFDFDF" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="url(#illustration-01)" fillRule="evenodd">
          <circle cx="1232" cy="128" r="128" />
          <circle cx="155" cy="443" r="64" />
        </g>
      </svg>
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
      {/* Hero content */}
      <div className="pt-32 pb-12 md:pt-64 md:pb-32">
        {/* Section header */}
        <div className="text-center pb-12 md:pb-16">
          <C.TitleWrapper>
            <C.TitlePre />
            <C.TitleColored />
            <C.TitlePost />
          </C.TitleWrapper>
        </div>
      </div>
    </div>

  </section>
);

/* TODO add data-aos="zoom-y-out" to Title */
/* TODO

.bg-clip-text {
    background-clip: text;
    -webkit-background-clip: text;
}
*/

const HeroClean = as(
  designable(heroComponents, 'Hero'),
  withNode,
)(HeroBase);

const asHeroToken = asVitalTokenSpec<HeroComponents>();

const heroTokens = asHeroToken({
  Editors: {
    TitlePre: withEditorPlain('herotitlepre', 'Insert Pre Title'),
    TitlePost: withEditorPlain('herotitlepost', 'Insert Post Color'),
    TitleColored: withEditorPlain('herotitlehighlighted', 'Insert Highlighted Color'),
  },
  Theme: {
    TitleWrapper: addClasses('text-4xl lg:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 z-30 flex flex-wrap justify-center'),
    TitleColored: addClasses('bg-clip-text text-transparent bg-gradient-to-r from-brandRed-400 via-brandRed-700 to-brandRed-400 bg-clip-text'),
  },
});

const HeroHome = as(heroTokens)(HeroClean);

export default HeroHome;

export { HeroClean, asHeroToken };
