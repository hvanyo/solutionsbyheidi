import React, { FC, ComponentType, HTMLProps, useState, useRef, useEffect } from 'react';
import {
  designable,
  DesignableComponentsProps,
  DesignableProps,
  Div,
  withDesign,
  addClasses,
  P,
  flowHoc,
  Section,
} from '@bodiless/fclasses';
import { withEditorRich } from '@bodiless/vital-editors';
import Transition from '../utils/Transition.js';
import TabItem from './TabItem';

type FeaturesTabComponents = {
  Wrapper: ComponentType<any>,
  Title: ComponentType<any>,
  Summary: ComponentType<any>,
};

export type Props = DesignableComponentsProps<FeaturesTabComponents> & HTMLProps<HTMLElement>;

const featuresTabComponents: FeaturesTabComponents = {
  Wrapper: Section,
  Title: Div,
  Summary: P,
};

const FeaturesTabClean: FC<DesignableProps> = ({ components }) => {
  const {
    Wrapper,
    Title,
    Summary,
  } = components;

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <Wrapper>

      {/* Section content */}
      <div className="md:grid md:grid-cols-12 md:gap-6">

        {/* Content */}
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
          {/* Tabs buttons */}
          <div className="mb-8 md:mb-0">

            {/*  <TabItem nodekey="tab1" /> */}

            <a
              className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
              href="#0"
              onClick={(e) => { e.preventDefault(); setTab(1); }}
            >
              <div>
                <div className="font-bold leading-snug tracking-tight mb-1">Technical Business Analyst</div>
                <div className="text-gray-600">Providing service to analyze and develop web-base services based on business requirements.</div>
              </div>
              <div className="flex justify-center items-center w-8 h-8 bg-brandRed-300 text-white rounded-full shadow flex-shrink-0 ml-3">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                </svg>
              </div>
            </a>
            <a
              className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
              href="#0"
              onClick={(e) => { e.preventDefault(); setTab(2); }}
            >
              <div>
                <div className="font-bold leading-snug tracking-tight mb-1">Website Development</div>
                <div className="text-gray-600">Developing and Building websites using different architectures.</div>
              </div>
              <div className="flex justify-center items-center w-8 h-8 bg-brandRed-300 text-white rounded-full shadow flex-shrink-0 ml-3">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                </svg>
              </div>
            </a>
            <a
              className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
              href="#0"
              onClick={(e) => { e.preventDefault(); setTab(3); }}
            >
              <div>
                <div className="font-bold leading-snug tracking-tight mb-1">Technical Product Owner</div>
                <div className="text-gray-600">Works in the agile process for defining and prioritizing project.</div>
              </div>
              <div className="flex justify-center items-center w-8 h-8 bg-brandRed-300 text-white rounded-full shadow flex-shrink-0 ml-3">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fillRule="nonzero" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Tabs items */}
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
          <div className="relative flex flex-col text-left pl-8">
            {/* Item 1 */}
            <Transition
              show={tab === 1}
              appear={true}
              className="w-full"
              enter="transition ease-in-out duration-700 transform order-first"
              enterStart="opacity-0 translate-y-16"
              enterEnd="opacity-100 translate-y-0"
              leave="transition ease-in-out duration-300 transform absolute"
              leaveStart="opacity-100 translate-y-0"
              leaveEnd="opacity-0 -translate-y-16"
            >
              <div className="relative inline-flex flex-col">
                <ul>
                  <li>Bullets Coming Soon</li>
                </ul>
              </div>
            </Transition>
            {/* Item 2 */}
            <Transition
              show={tab === 2}
              appear={true}
              className="w-full"
              enter="transition ease-in-out duration-700 transform order-first"
              enterStart="opacity-0 translate-y-16"
              enterEnd="opacity-100 translate-y-0"
              leave="transition ease-in-out duration-300 transform absolute"
              leaveStart="opacity-100 translate-y-0"
              leaveEnd="opacity-0 -translate-y-16"
            >
              <div className="relative inline-flex flex-col">
                <ul>
                  <li>Bullets Coming Soon</li>
                </ul>
              </div>
            </Transition>
            {/* Item 3 */}
            <Transition
              show={tab === 3}
              appear={true}
              className="w-full"
              enter="transition ease-in-out duration-700 transform order-first"
              enterStart="opacity-0 translate-y-16"
              enterEnd="opacity-100 translate-y-0"
              leave="transition ease-in-out duration-300 transform absolute"
              leaveStart="opacity-100 translate-y-0"
              leaveEnd="opacity-0 -translate-y-16"
            >
              <div className="relative inline-flex flex-col">
                <ul>
                  <li>Bullets Coming Soon</li>
                </ul>
              </div>
            </Transition>
          </div>
        </div >

      </div >
    </Wrapper>
  );
};

/* TODO add data-aos="zoom-y-out" to Title */

const asFeaturesTab = flowHoc(
  designable(featuresTabComponents, 'FeaturesTab'),
  withDesign({
    Wrapper: addClasses('relative'),    
    Title: flowHoc(
      withEditorRich('feature_sectiontitle', 'Insert Section Title'),
      addClasses('h2 mb-4'),
    ),
    Summary: flowHoc(
      withEditorRich('feature_sectionsummary', 'Insert Summary'),
      addClasses('text-xl text-gray-600'),
    ),  
  }),
);

const FeaturesTab = asFeaturesTab(FeaturesTabClean);

export default FeaturesTab;
