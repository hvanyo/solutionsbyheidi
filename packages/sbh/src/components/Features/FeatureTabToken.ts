import { addProps, as } from '@bodiless/fclasses';
import { asFeatureTabsToken } from './FeatureTab';

const tabitem = as(
  'nav-item flex items-center text-lg p-5 rounded border transition duration-300',
  'ease-in-out mb-3',
  //active 'bg-white shadow-md border-gray-200 hover:shadow-lg',
  'bg-gray-200 border-transparent', 
);

// const oldtabitem = 'nav-link block border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent';

const Default = asFeatureTabsToken({
  Layout: {
    Wrapper: 'relative md:grid md:grid-cols-12 md:gap-6',
    FullTabWrapper: 'max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6',
    TabWrapper: 'flex items-start',
    TabUL: 'nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4',
    TabLI: 'nav-item flex-grow text-left',
    TabA_1: as('nav-link', tabitem),
    TabA_2: as('nav-link', tabitem),
    TabA_3: as('nav-link', tabitem),
    TabContent: 'tab-content max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1',
    TabC_1: 'tab-pane fade show active',
    TabC_2: 'tab-pane fade',
    TabC_3: 'tab-pane fade',
  },
  Behavior: {
    TabUL: addProps({id: 'tabs-tabVertical', role: 'tablist'}),
    TabLI: addProps({role: 'presentation'}),
    TabA_1: addProps({
      id: 'tabs-home-tabVertical',
      'data-bs-toggle': 'pill',
      'data-bs-target': '#tabs-homeVertical',
      role: 'tab',
      'aria-controls': 'tabs-homeVertical',
      'aria-selected': 'true',
      href: '#tabs-homeVertical',
    }),
    TabA_2: addProps({
      id: 'tabs-profile-tabVertical',
      'data-bs-toggle': 'pill',
      'data-bs-target': '#tabs-profileVertical',
      role: 'tab',
      'aria-controls': 'tabs-profileVertical',
      'aria-selected': 'false',
      href: '#tabs-profileVertical',
    }),
    TabA_3: addProps({
      id: 'tabs-messages-tabVertical',
      'data-bs-toggle': 'pill',
      'data-bs-target': '#tabs-messagesVertical',
      role: 'tab',
      'aria-controls': 'tabs-messagesVertical',
      'aria-selected': 'false',
      href: '#tabs-messagesVertical',
    }),
    TabContent: addProps({id: 'tabs-tabContentVertical'}),
    TabC_1: addProps({
      id: 'tabs-homeVertical',
      role: 'tabpanel',
      'aria-labelledby': 'tabs-home-tabVertical',
      children: 'Tab 1 content vertical Heidi',
    }),
    TabC_2: addProps({
      id: 'tabs-profileVertical',
      role: 'tabpanel',
      'aria-labelledby': 'tabs-profile-tabVertical',
      children: 'Tab 2 content vertical Heidi',
    }),
    TabC_3: addProps({
      id: 'tabs-messagesVertical',
      role: 'tabpanel',
      'aria-labelledby': 'tabs-messages-tabVertical',
      children: 'Tab 3 content vertical Heidi',
    }),
  }
});

export default {
  Default,
};
