/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';

export const onRenderBody = (
  { setPostBodyComponents },
) => {
  setPostBodyComponents([
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap"
      rel="stylesheet"
    />,
    <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
  ]);
};
