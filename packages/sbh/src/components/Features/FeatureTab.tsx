import React from 'react';
import {
  ComponentOrTag,
  designable,
  DesignableComponentsProps,
  Div,
  P,
  Section,
  Ul,
  Li,
  A,
} from '@bodiless/fclasses';
import {
  asVitalTokenSpec,
} from '@bodiless/vital-elements';

type FeatureTabComponents = {
  Wrapper: ComponentOrTag<any>,
  Title: ComponentOrTag<any>,
  Summary: ComponentOrTag<any>,
  TabWrapper: ComponentOrTag<any>,
  TabUL: ComponentOrTag<any>,
  TabLI: ComponentOrTag<any>,
  TabA_1: ComponentOrTag<any>,
  TabA_2: ComponentOrTag<any>,
  TabA_3: ComponentOrTag<any>,
  TabContent: ComponentOrTag<any>,
  TabC_1: ComponentOrTag<any>,
  TabC_2: ComponentOrTag<any>,
  TabC_3: ComponentOrTag<any>,
  FullTabWrapper: ComponentOrTag<any>,
};

export type FeaturesTabProps = DesignableComponentsProps<FeatureTabComponents>;

const featureTabComponents: FeatureTabComponents = {
  Wrapper: Section,
  Title: Div,
  Summary: P,
  TabWrapper: Div,
  TabUL: Ul,
  TabLI: Li,
  TabA_1: A,
  TabA_2: A,
  TabA_3: A,
  TabContent: Div,
  TabC_1: Div,
  TabC_2: Div,
  TabC_3: Div,
  FullTabWrapper: Div,
};

const Tab1 = (props: any) => (
  <>
    <div {...props}>
      <div className="font-bold leading-snug tracking-tight mb-1">Technical Business Analyst</div>
      <div className="text-gray-600">Providing service to analyze and develop web-base services based on business requirements.</div>
    </div>
    <div className="flex justify-center items-center w-8 h-8 bg-brandRed-300 text-white rounded-full shadow flex-shrink-0 ml-3">
      <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
      </svg>
    </div>
  </>
);
const Tab2 = (props: any) => (
  <>
    <div {...props}>
      <div className="font-bold leading-snug tracking-tight mb-1">Website Development</div>
      <div className="text-gray-600">Developing and Building websites using different architectures.</div>
    </div>
    <div className="flex justify-center items-center w-8 h-8 bg-brandRed-300 text-white rounded-full shadow flex-shrink-0 ml-3">
      <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
      </svg>
    </div>
  </>
);
const Tab3 = (props: any) => (
  <>
    <div {...props}>
      <div className="font-bold leading-snug tracking-tight mb-1">Technical Product Owner</div>
      <div className="text-gray-600">Works in the agile process for defining and prioritizing project.</div>
    </div>
    <div className="flex justify-center items-center w-8 h-8 bg-brandRed-300 text-white rounded-full shadow flex-shrink-0 ml-3">
      <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fillRule="nonzero" />
      </svg>
    </div>
  </>
);
const TabContent1 = (props: any) => (
  <div>
    Coming Soon! 1
  </div>
);
const TabContent2 = (props: any) => (
  <div>
    Coming Soon! 2
  </div>
);
const TabContent3 = (props: any) => (
  <div>
    Coming Soon! 3
  </div>
);

const FeatureTabsBase = (props: FeaturesTabProps) => {
  const { components: C, ...rest } = props;

  return (
    <C.Wrapper {...rest}>
      <C.FullTabWrapper>
        <C.TabWrapper>
          <C.TabUL>
            <C.TabLI>
              <C.TabA_1>
                <Tab1 />
              </C.TabA_1>
            </C.TabLI>
            <C.TabLI>
              <C.TabA_2>
                <Tab2 />
              </C.TabA_2>
            </C.TabLI>
            <C.TabLI>
              <C.TabA_3>
                <Tab3 />
              </C.TabA_3>
            </C.TabLI>
          </C.TabUL>
        </C.TabWrapper>
        <C.TabContent>
          <C.TabC_1>
            <TabContent1 />
          </C.TabC_1>
          <C.TabC_2>
            <TabContent2 />
          </C.TabC_2>
          <C.TabC_3>
            <TabContent3 />
          </C.TabC_3>
        </C.TabContent>
      </C.FullTabWrapper>
    </C.Wrapper>
  );
};

/* TODO add data-aos="zoom-y-out" to Title */

const asFeatureTabsToken = asVitalTokenSpec<FeatureTabComponents>();

const FeatureTabsClean = designable(featureTabComponents, 'FeatureTabs')(FeatureTabsBase);

export default FeatureTabsClean;

export { FeatureTabsClean, asFeatureTabsToken };
