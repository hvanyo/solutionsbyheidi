/* eslint-disable max-len */
import React, { FC } from 'react';
import {
  designable,
  ComponentOrTag,
  DesignableComponentsProps,
  Div,
  withDesign,
  addClasses,
  P,
  A,
  flowHoc,
  Img,
  as,
} from '@bodiless/fclasses';
import { withEditorRich } from '@bodiless/vital-editors';
import { vitalImage } from '@bodiless/vital-image';
import { vitalLink } from '@bodiless/vital-link';

type TabItemComponents = {
  Wrapper: ComponentOrTag<any>,
  TabLink: ComponentOrTag<any>,
  Title: ComponentOrTag<any>,
  Summary: ComponentOrTag<any>,
  SVGImgWrapper: ComponentOrTag<any>,
  SVGImage: ComponentOrTag<any>,
};

export type TabItemProps = DesignableComponentsProps<TabItemComponents>;

const tabItemComponents: TabItemComponents = {
  Wrapper: Div,
  TabLink: A,
  Title: Div,
  Summary: P,
  SVGImgWrapper: Div,
  SVGImage: Img,
};

const TabItemClean: FC<TabItemProps> = ({ components: C, ...rest }) => (
  <C.Wrapper {...rest}>
    <C.TabLink>
      <div>
        <C.Title />
        <C.Summary />
      </div>
      <C.SVGImgWrapper>
        <C.SVGImage />
      </C.SVGImgWrapper>
    </C.TabLink>
  </C.Wrapper>
);

const asTabItem = flowHoc(
  designable(tabItemComponents, 'TabItem'),
  withDesign({
    Wrapper: addClasses('relative'),
    Title: flowHoc(
      withEditorRich('tab_title', 'Insert Title'),
      addClasses('font-bold leading-snug tracking-tight mb-1'),
    ),
    Summary: flowHoc(
      withEditorRich('tab_summary', 'Insert Summary'),
      addClasses('text-gray-600'),
    ),
    SVGImgWrapper: flowHoc(
      as(vitalImage.Default),
      addClasses('flex justify-center items-center w-8 h-8 bg-brandRed-300 text-white rounded-full shadow flex-shrink-0 ml-3'),
    ),
    TabLink: as(
      vitalLink.Default,
      'flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3',
    )
    // TO DO
    // className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
    // </Wrapper>href="#0"
    // onClick={(e) => { e.preventDefault(); setTab(1); }}
  }),
);

const TabItem = asTabItem(TabItemClean);

export default TabItem;
