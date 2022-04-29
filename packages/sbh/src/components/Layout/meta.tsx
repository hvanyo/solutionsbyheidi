import { flowRight } from 'lodash';
import Helmet from 'react-helmet';
import {
  withMeta,
  withTitle,
  withMetaStatic,
  withMetaHtml,
  asBodilessHelmet,
  withMetaForm,
} from '@bodiless/components';
import {
  useMenuOptionUI,
  useEditContext,
} from '@bodiless/core';

const withMetaPageTitle = withTitle({
  name: 'title',
  label: 'Title',
  placeholder: 'Rec 30-65 char',
});

const withMetaPageDescription = withMeta({
  name: 'description',
  useFormElement: () => useMenuOptionUI().ComponentFormTextArea,
  label: 'Description',
  placeholder: 'Rec < 160 char',
});

const withMetaPageType = withMeta({
  name: 'pagetype',
  label: 'Page Type',
});

const withMetaBrand = withMetaStatic({
  name: 'bl-brand',
});

const withMetaCountry = withMetaStatic({
  name: 'bl-country',
});

const useMenuOptions = () => {
  const context = useEditContext();

  return ([
    {
      name: 'seo',
      isHidden: () => !context.isEdit,
      icon: 'category',
      label: 'SEO',
    },
  ]);
};

const seoFormHeader = {
  title: 'SEO Data Management',
  description: `Enter the page level data used for SEO. 
  This is metadata needed for SEO that will go in the page header.`,
};

const SeoHelmet = flowRight(
  withMetaForm(useMenuOptions, seoFormHeader),
  asBodilessHelmet('meta'),
  withMetaPageTitle('page-title', ''),
  withMetaPageDescription('description', ''),
  withMetaPageType('page-type'),
  withMetaBrand({ nodeKey: 'brand', nodeCollection: 'site' }),
  withMetaCountry({ nodeKey: 'country', nodeCollection: 'site' }),
  withMetaHtml('en', '', ''),
)(Helmet);

export default SeoHelmet;
