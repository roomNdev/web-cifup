import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}
  </Layout>
);

// export const onRenderBody = ({ setPostBodyComponents }) => {
//   setPostBodyComponents([
//     <script
//       key="your-script"
//       src="https://cdn.lightwidget.com/widgets/lightwidget.js"
//       async
//     />,
//   ]);
// };