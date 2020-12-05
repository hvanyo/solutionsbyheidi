import React, { FC, ComponentType, HTMLProps } from 'react';
import { flow } from 'lodash';
import {
  designable,
  DesignableComponentsProps,
  DesignableProps,
  Div,
  H1,
  withDesign,
  addClasses,
} from '@bodiless/fclasses';
import { withEditorFullFeatured } from '../Editors';


type HeroComponents = {
  Wrapper: ComponentType<any>,
  Title: ComponentType<any>,
};

export type Props = DesignableComponentsProps<HeroComponents> & HTMLProps<HTMLElement>;

const heroComponents: FooterComponents = {
  Wrapper: Div,
  Title: H1,
};

const HeroClean: FC<DesignableProps> = ({ components }) => {
  const {
    Wrapper,
    Title,
  } = components;

  return (
    <section className="relative">

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
        <div className="pt-32 pb-12 md:pt-64 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <Title />
          </div>
        </div>
      </div>

    </section >
  );
};

/* TODO add data-aos="zoom-y-out" to Title */

const asHero = flow(
  designable(heroComponents, 'Footer'),
  withDesign({
    Title: flow(
      withEditorFullFeatured({ nodeKey: 'herotitle' }, 'Insert Hero Title'),
      addClasses('text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 z-30'),
    ),
    Wrapper: addClasses(''),
  }),
);

const HeroHome = asHero(HeroClean);

export default HeroHome;
