import React, { FC } from 'react';
import {
  designable,
  ComponentOrTag,
  DesignableComponentsProps,
  Div,
  P,
  Span,
  as,
  on,
} from '@bodiless/fclasses';
import { RichTextClean, vitalRichText } from '@bodiless/vital-editors';
import { withNode, withNodeKey } from '@bodiless/core';
import { asVitalTokenSpec } from '@bodiless/vital-elements';
import { MySocialLinks } from './sociallinks';

type FooterComponents = {
  Wrapper: ComponentOrTag<any>,
  Container: ComponentOrTag<any>,
  SiteTitleCopyright: ComponentOrTag<any>,
  SiteTitleCopyrightEditable: ComponentOrTag<any>,
  SiteCopyright: ComponentOrTag<any>,
  SiteCopyrightEditable: ComponentOrTag<any>,
  SocialLinks: ComponentOrTag<any>,
};

export type FooterProps = DesignableComponentsProps<FooterComponents>;

const footerComponents:FooterComponents = {
  Wrapper: Div,
  Container: Div,
  SiteTitleCopyright: P,
  SiteTitleCopyrightEditable: Span,
  SiteCopyright: P,
  SiteCopyrightEditable: Span,
  SocialLinks: MySocialLinks,
};

const FooterBase: FC<FooterProps> = ({ components: C, ...rest }) => (
  <C.Wrapper {...rest}>
    <C.Container>
      <C.SiteTitleCopyright>
        <C.SiteCopyright>
          <C.SiteTitleCopyrightEditable />
          <C.SocialLinks />
        </C.SiteCopyright>
      </C.SiteTitleCopyright>
    </C.Container>
  </C.Wrapper>
);

export const FooterClean = as(
  designable(footerComponents, 'Footer'),
  withNode,
)(FooterBase);

export const asFooterToken = asVitalTokenSpec<FooterComponents>();

const footerTokens = asFooterToken({
  Editors: {
    SiteTitleCopyrightEditable: on(RichTextClean)(vitalRichText.Default),
  },
  Theme: {
    SiteTitleCopyrightEditable: 'text-sm text-gray-600 text-left my-3',
    SiteCopyright: 'flex items-center justify-between py-4 md:py-8 border-t border-gray-200',
  },
  Schema: {
    SiteTitleCopyrightEditable: withNodeKey({ nodeKey: 'sitetitle', nodeCollection: 'site' }),
    _: withNode,
  },
});

const Footer = as(footerTokens)(FooterClean);

export default Footer;
