import { vitalListBase, asListToken } from '@bodiless/vital-list';

const WithBullets = asListToken(vitalListBase.WithBullets, {
  Layout: {
    Wrapper: 'list-disc',
  },
  Spacing: {
    Wrapper: 'pl-10',
    Item: 'mb-2',
  },
});

export default {
  ...vitalListBase,
  WithBullets,
};
