import React from 'react';
import { stylable } from '@bodiless/fclasses';

const Burger = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18.86"
    height="14"
    {...props}
  >
    <g fill="none" stroke="#212121" strokeLinecap="round" strokeWidth="2">
      <path data-name="Line 254" d="M1 1h16.86" />
      <path data-name="Line 255" d="M1 6.84h16.86" />
      <path data-name="Line 256" d="M1 13h16.86" />
    </g>
  </svg>
);

const BurgerIcon = stylable(Burger);

export default BurgerIcon;
