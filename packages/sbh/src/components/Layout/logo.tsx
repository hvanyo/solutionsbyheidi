import React, { FC, HTMLProps } from 'react';
import {
  ComponentOrTag,
  designable,
  DesignableComponentsProps,
  Span,
  Img,
  A,
} from '@bodiless/fclasses';
import { asVitalTokenSpec } from '@bodiless/vital-elements';

type LogoComponents = {
  Wrapper: ComponentOrTag<any>,
  Image: ComponentOrTag<any>,
  Link: ComponentOrTag<any>,
};
type LogoProps = DesignableComponentsProps<LogoComponents> & HTMLProps<HTMLElement>;

const logoComponents: LogoComponents = {
  Wrapper: Span,
  Image: Img,
  Link: A,
};

const LogoBase: FC<LogoProps> = ({ components: C }) => (
  <C.Wrapper>
    <C.Link>
      <C.Image />
    </C.Link>
  </C.Wrapper>
);

/**
 * Crete a logo token.
 */
const asLogoToken = asVitalTokenSpec<LogoComponents>();

/**
  * Clean component to be used for the site logo
  */
const LogoClean = designable(logoComponents, 'Logo')(LogoBase);

export default LogoClean;
export { asLogoToken };
