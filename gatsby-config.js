module.exports = {
    // flags: {
    //     PRESERVE_WEBPACK_CACHE: true
    // },
    pathPrefix: '/fdg-maraichage',
    siteMetadata: {
        title: 'Ferme du Gapeau',
        titleTemplate: '%s · FDG',
        image: '/images/logo-avath-maraichage-black.png',
        author: 'La Ferme du Gapeau',
        description: 'Vente de légumes naturels cultivé par nos ouvriers en situation de handicap.',
        url: 'https://fdg-maraichage.netlify.app',
        paginationPageSize: 4, // Amount of posts displayed per listing page.
    },
    plugins: [
        'gatsby-plugin-netlify-cms',
        `gatsby-plugin-stylus`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'projects',
                path: `${__dirname}/content/projects`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/content/posts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'hero',
                path: `${__dirname}/content/sections/hero`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'about',
                path: `${__dirname}/content/sections/about`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'cards',
                path: `${__dirname}/content/sections/cards`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'contact',
                path: `${__dirname}/content/sections/contact`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [{
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            // [Optional] The root of "media_folder" in your config.yml
                            // Defaults to "static"
                            staticFolderName: 'static',
                            // [Optional] Include the following fields, use dot notation for nested fields
                            // All fields are included by default
                            include: ['featured'],
                            // [Optional] Exclude the following fields, use dot notation for nested fields
                            // No fields are excluded by default
                            exclude: ['featured.skip'],
                        },
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    `gatsby-remark-reading-time`,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `FDG - maraichage`,
                short_name: `FDG`,
                start_url: `/`,
                background_color: `#F1B631`,
                theme_color: `#F1B631`,
                display: `minimal-ui`,
                icon: `src/images/logo-avath-maraichage-black.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};