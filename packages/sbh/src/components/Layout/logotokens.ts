import {
  withNode,
  withNodeKey,
  withSidecarNodes,
} from '@bodiless/core';
import { asBodilessLink } from '@bodiless/components-ui';
import {
  vitalImage
} from '@bodiless/vital-image';
import { asLogoToken } from './logo';

const Default = asLogoToken({
  Components: {
    Image: vitalImage.Plain,
  },
  Behavior: {
    Image: vitalImage.WithEager,
  },
  Schema: {
    Image: withNodeKey({ nodeKey: 'SiteLogo', nodeCollection: 'site' }),
    Link: withSidecarNodes(
      asBodilessLink({ nodeKey: 'SiteLink', nodeCollection: 'site' }, { href: '/' }),
    ),
    _: withNode,
  },
  Theme: {
    Image: 'h-126 lg:h-16 max-w-1 max-w-15',
  }
});

export default {
  Default,
};
