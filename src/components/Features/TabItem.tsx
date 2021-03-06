import React, { FC, ComponentType, HTMLProps, useState, useRef, useEffect } from 'react';
import { flow } from 'lodash';
import {
  designable,
  DesignableComponentsProps,
  DesignableProps,
  Div,
  withDesign,
  addClasses,
  P,
  A,
} from '@bodiless/fclasses';
import { withEditorFullFeatured } from '../Editors';
import { SquareImage } from '../Image';
import { asEditableLink } from '../Elements.token';

type TabItemComponents = {
  Wrapper: ComponentType<any>,
  Title: ComponentType<any>,
  Summary: ComponentType<any>,
  SVGImageWrapper: ComponentType<any>,
  SVGImage: ComponentType<any>,
};

export type Props = DesignableComponentsProps<TabItemComponents> & HTMLProps<HTMLElement>;

const tabItemComponents: TabItemComponents = {
  Wrapper: Div,
  TabLink: A,
  Title: Div,
  Summary: P,
  SVGImgWrapper: Div,
  SVGImage: SquareImage,
};

const TabItemClean: FC<DesignableProps> = ({ components }) => {
  const {
    Wrapper,
    TabLink,
    Title,
    Summary,
    SVGImgWrapper,
    SVGImage,
  } = components;

  return (
    <Wrapper>
      <TabLink>
        <div>
          <Title /> 
          <Summary /> 
        </div>
        <SVGImgWrapper> 
          <SVGImage />
        </SVGImgWrapper> 
      </TabLink>
    </Wrapper>
  );
};

const asTabItem = flow(
  designable(tabItemComponents, 'TabItem'),
  withDesign({
    Wrapper: addClasses('relative'),    
    Title: flow(
      withEditorFullFeatured('tab_title', 'Insert Title'),
      addClasses('font-bold leading-snug tracking-tight mb-1'),
    ),
    Summary: flow(
      withEditorFullFeatured('tab_summary', 'Insert Summary'),
      addClasses('text-gray-600'),
    ),
    SVGImgWrapper: addClasses('flex justify-center items-center w-8 h-8 bg-brandRed-300 text-white rounded-full shadow flex-shrink-0 ml-3'),
    TabLink: flow(
      asEditableLink('tablink'),
      addClasses('flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3'),
    )
      // TO DO 
      // className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
      // </Wrapper>href="#0"
      // onClick={(e) => { e.preventDefault(); setTab(1); }}
  }),
);

const TabItem = asTabItem(TabItemClean);

export default TabItem;
