import { PortableText } from '@portabletext/react';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark';
import { getImage, getImageDimensions } from '@sanity/asset-utils';
import { GatsbyImage } from 'gatsby-plugin-image';
import ParagraphText from './typography/ParagraphText';
import { Title } from './typography/Title';
import sanityConfig from '../../sanity-config';
import { getSanityImageData } from '../utils/getSanityImageData';
import PortableTextStyles from '../styles/PortableTextStyles';

const myPortableTextComponents = {
  block: {
    normal: ({ children }) => <ParagraphText>{children}</ParagraphText>,
    h1: ({ children }) => <Title tag={'h1'}>{children}</Title>,
  },
  marks: {
    code: ({ children }) => (
      <SyntaxHighlighter className="bodyCode">
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ),
  },
  // [
  //   { title: 'Bullet', value: 'bullet' },
  //   { title: 'Number', value: 'number' },
  // ],
  types: {
    span: (props) => {
      console.log(props);
    return <ParagraphText>{props.value.text}</ParagraphText>},
    customCode: ({ value }) => (
      <SyntaxHighlighter
        // style={theme}
        language={value.code.language}
        className="bodyCode"
      >
        {String(value.code.code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ),
    customImage: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset;
      const { width, height } = getImageDimensions(value);

      const image = {
        url: imageData.url,
        width,
        height,
      };

      const gatsbyImageData = getSanityImageData({
        image,
        layout: 'constrained',
      });

      return (
        <GatsbyImage
          image={gatsbyImageData}
          alt={value.alt}
          className="bodyImage"
        />
      );
    },
  },
};

function MyPortableText({ value, ...rest}) {
  console.log(value);
  return <PortableTextStyles><PortableText value={value} components={myPortableTextComponents} /></PortableTextStyles>;
}

export default MyPortableText;
