import type { GatsbyConfig } from "gatsby";
// import sanitiyConfig from "./sanity-config"
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `CIFUP`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'blogs',
        engine: 'flexsearch',
        engineOptions: 'speed',
        query: `
        {
          allSanityBlog {
            nodes {
              id
              title
              publishedAt
              slug {
                current
              }
              coverImage {
                asset {
                  gatsbyImageData
                }
              }
            }
          }

        } 
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'publishedAt', 'slug', 'coverImage'],
        normalizer: ({ data }) =>
          data.allSanityBlog.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            publishedAt: node.publishedAt,
            slug: node.slug,
            coverImage: node.coverImage,
          })),
      }
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `authors`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityAuthor {
            nodes{
              id
              name
              slug {
                current
              }
              profileImage {
                asset{
                  gatsbyImageData
                }
              }
            }
          }
        } 
        `,
        ref: 'id',
        index: ['name'],
        store: ['id', 'name', 'slug', 'profileImage'],
        normalizer: ({ data }) =>
          data.allSanityAuthor.nodes.map((node) => ({
            id: node.id,
            name: node.name,
            slug: node.slug,
            profileImage: node.profileImage,
          })),
      },
    },
    {
    resolve: 'gatsby-source-sanity',
    options: {
      dataset: "production",
      projectId: "ihd1obi1",
    }
  },{
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "CIFUP",
      short_name: "CIFUP",
      start_url: "/",
      // background_color: "#6b37bf",
      // theme_color: "#6b37bf",
      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: "standalone",
      icon: "src/images/icon.png", // This path is relative to the root of the site.
      // An optional attribute which provides support for CORS check.
      // If you do not provide a crossOrigin option, it will skip CORS for manifest.
      // Any invalid keyword or empty string defaults to `anonymous`
      // crossOrigin: `use-credentials`,
    },
  },
   "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components"]
};

export default config;
