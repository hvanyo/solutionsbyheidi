import React, { FC } from 'react';
import {
  designable,
  ComponentOrTag,
  DesignableComponentsProps,
  Div,
  P,
  Span,
  withDesign,
  addClasses,
  flowHoc,
} from '@bodiless/fclasses';
import { withEditorRich } from '@bodiless/vital-editors';
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

const FooterClean: FC<FooterProps> = ({ components: C, ...rest }) => (
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

const asFooterHeader = flowHoc(
  designable(footerComponents, 'Footer'),
  withDesign({
    SiteTitleCopyrightEditable: flowHoc(
      withEditorRich({ nodeKey: 'sitetitle', nodeCollection: 'site' }, 'Insert Site Title'),
      addClasses('text-sm text-gray-600 text-left my-3'),
    ),
    SiteCopyright: addClasses('flex items-center justify-between py-4 md:py-8 border-t border-gray-200'),
  }),
);

const Footer = asFooterHeader(FooterClean);
export default Footer;
