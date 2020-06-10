require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.default = {
  siteMetadata: {
    title: `GatsbyJS`,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `Blazing fast modern site generator for React`,
    twitter: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-theme-gatsbyjs-website`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/../docs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gatsby-core`,
        path: `${__dirname}/../packages/gatsby/`,
        ignore: [`**/dist/**`],
      },
    },
  ],
}
