// fonts
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/600.css';
import '@fontsource-variable/inter';

import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const onInitialClientRender = () => {
  const script = document.createElement('script');
  script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
  script.async = true;
  
  document.body.appendChild(script);
};