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
  Layout: {
    Wrapper: 'w-full max-w-15',
  },
  Components: {
    Image: vitalImage.Default,
  },
  Behavior: {
    Image: vitalImage.WithEager,
  },
  Schema: {
    Image: withNodeKey({ nodeKey: 'SiteLogo', nodeCollection: 'site' }),
    // @todo should this be a vital-link?
    // @todo can we separate sidecar nodekeys from editors?
    Link: withSidecarNodes(
      asBodilessLink({ nodeKey: 'SiteLink', nodeCollection: 'site' }, { href: '/' }),
    ),
    _: withNode,
  },
});

export default {
  Default,
};
