import React from 'react';
import {
  ComponentOrTag,
  designable,
  DesignableComponentsProps,
  Div,
  P,
  Section,
} from '@bodiless/fclasses';
import {
  asVitalTokenSpec,
} from '@bodiless/vital-elements';

type FeatureTabComponents = {
  Wrapper: ComponentOrTag<any>,
  Title: ComponentOrTag<any>,
  Summary: ComponentOrTag<any>,
};

export type FeaturesTabProps = DesignableComponentsProps<FeatureTabComponents>;

const featureTabComponents: FeatureTabComponents = {
  Wrapper: Section,
  Title: Div,
  Summary: P,
};

const FeatureTabsBase = (props: FeaturesTabProps) => {
  const { components: C, ...rest } = props;

  return (
    <C.Wrapper {...rest}>

      <div className="flex items-start">
        <ul
          className="nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4"
          id="tabs-tabVertical"
          role="tablist"
        >
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-homeVertical"
              className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
          active
        "
              id="tabs-home-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-homeVertical"
              role="tab"
              aria-controls="tabs-homeVertical"
              aria-selected="true"
            >
              Home

            </a>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-profileVertical"
              className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        "
              id="tabs-profile-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profileVertical"
              role="tab"
              aria-controls="tabs-profileVertical"
              aria-selected="false"
            >
              Profile

            </a>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-messagesVertical"
              className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        "
              id="tabs-messages-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-messagesVertical"
              role="tab"
              aria-controls="tabs-messagesVertical"
              aria-selected="false"
            >
              Messages

            </a>
          </li>
        </ul>
        <div className="tab-content" id="tabs-tabContentVertical">
          <div
            className="tab-pane fade show active"
            id="tabs-homeVertical"
            role="tabpanel"
            aria-labelledby="tabs-home-tabVertical"
          >
            Tab 1 content vertical
          </div>
          <div className="tab-pane fade" id="tabs-profileVertical" role="tabpanel" aria-labelledby="tabs-profile-tabVertical">
            Tab 2 content vertical
          </div>
          <div
            className="tab-pane fade"
            id="tabs-messagesVertical"
            role="tabpanel"
            aria-labelledby="tabs-profile-tabVertical"
          >
            Tab 3 content vertical
          </div>
        </div>
      </div>

    </C.Wrapper>
  );
};

/* TODO add data-aos="zoom-y-out" to Title */

/**
 * Crete a logo token.
 */
const asFeatureTabsToken = asVitalTokenSpec<FeatureTabComponents>();

/**
  * Clean component to be used for the site logo
  */
const FeatureTabsClean = designable(featureTabComponents, 'FeatureTabs')(FeatureTabsBase);

export default FeatureTabsClean;
export { asFeatureTabsToken };
