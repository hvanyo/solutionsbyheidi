import React, { FC, ComponentType, HTMLProps } from 'react';
import { Link } from "gatsby";
import {
  designable,
  DesignableComponentsProps,
  DesignableProps,
  Div,
  P,
  Span,
  withDesign,
  addClasses,
  flowHoc,
} from '@bodiless/fclasses';
import { withEditorRich } from '@bodiless/vital-editors';


const MySocialLinks = () => {
  return (
    <div>
      <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0 justify-center">
        <li>
          <Link to="http://twitter.com/hejeva" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
            </svg>
          </Link>
        </li>
        <li className="ml-4">
          <Link to="https://github.com/hvanyo" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
            </svg>
          </Link>
        </li>
        <li className="ml-4">
          <Link to="http://www.linkedin.com/pub/heidi-vanyo/5/1bb/12b" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="LinkedIn">
            <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
            </svg>
          </Link>
        </li>
      </ul>
    </div>  
  );
};  

type FooterComponents = {
  Wrapper: ComponentType<any>,
  Container: ComponentType<any>,
  SiteTitleCopyright: ComponentType<any>,
  SiteTitleCopyrightEditable: ComponentType<any>,
  SiteCopyright: ComponentType<any>,
  SiteCopyrightEditable: ComponentType<any>,
  SocialLinks: ComponentType<any>,
};

export type Props = DesignableComponentsProps<FooterComponents> & HTMLProps<HTMLElement>;

const footerComponents:FooterComponents = {
  Wrapper: Div,
  Container: Div,
  SiteTitleCopyright: P,
  SiteTitleCopyrightEditable: Span,
  SiteCopyright: P,
  SiteCopyrightEditable: Span,
  SocialLinks: MySocialLinks,
};

const FooterClean: FC<DesignableProps> = ({ components }) => {
  const {
    Wrapper,
    Container,
    SiteTitleCopyright,
    SiteTitleCopyrightEditable,
    SiteCopyright,
    SiteCopyrightEditable,
    SocialLinks,
  } = components;

  return (
    <Wrapper>
      <Container>
        <SiteTitleCopyright>
          <SiteCopyright>
          <SiteTitleCopyrightEditable />
          <SocialLinks />
          </SiteCopyright>
        </SiteTitleCopyright>
      </Container>
    </Wrapper>
  );
};

const asFooterHeader = flowHoc(
  designable(footerComponents, 'Footer'),
  withDesign({
    SiteTitleCopyrightEditable: flowHoc(
      withEditorRich({ nodeKey: 'sitetitle', nodeCollection: 'site' }, 'Insert Site Title', 'site'),
      addClasses('text-sm text-gray-600 text-left my-3'),
    ),
    SiteCopyright: addClasses('flex items-center justify-between py-4 md:py-8 border-t border-gray-200'),
  }),
);

const Footer = asFooterHeader(FooterClean);
export default Footer;
