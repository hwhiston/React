import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass"]
};

export default config;
