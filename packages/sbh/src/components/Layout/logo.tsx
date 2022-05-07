import React, { FC, ComponentType, HTMLProps } from 'react';
import { Link } from 'gatsby';
import {
  designable,
  DesignableComponentsProps,
  Div,
  Img,
  replaceWith,
  withDesign,
  addClasses,
  flowHoc,
  as,
} from '@bodiless/fclasses';
import { vitalImage } from '@bodiless/vital-image';
import { withNodeKey } from '@bodiless/core';

type LogoComponents = {
  SiteReturn: ComponentType<any>,
  SiteLogo: ComponentType<any>,
  SiteLink: ComponentType<any>,
};
export type Props = DesignableComponentsProps<LogoComponents> & HTMLProps<HTMLElement>;

// SiteLink uses Gatsby Link, so we can benefit from gatsby performance that page doesn't reload.
const logoComponents:LogoComponents = {
  SiteReturn: Div,
  SiteLogo: Img,
  SiteLink: Link,
};
const LogoClean: FC<Props> = ({ components }) => {
  const {
    SiteReturn,
    SiteLogo,
    SiteLink,
  } = components;

  return (
    <SiteReturn>
      <SiteLink to="/">
        <SiteLogo />
      </SiteLink>
    </SiteReturn>
  );
};

// Override asEditableImage nodekey to store in site nodeCollection.
const LogoImg = as(
  vitalImage.Default,
  withNodeKey({ nodeKey: 'image', nodeCollection: 'site' }),
)(Img);

const asLogo = flowHoc(
  designable(logoComponents, 'Logo'),
  withDesign({
    SiteLogo: flowHoc(
      replaceWith(LogoImg),
      addClasses('max-w-15'),
    ),
  }),
);

const Logo = asLogo(LogoClean);
export default Logo;
