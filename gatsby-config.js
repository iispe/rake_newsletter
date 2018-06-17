module.exports = {
    siteMetadata: {
        title: `Tehy Kymenlaakso Rake`,
    },
    plugins: [`gatsby-plugin-styled-components`, 
            {
                resolve: `gatsby-plugin-typography`,
                options: {
                    pathToConfigModule: `src/utils/typography.js`,
                },
            },
        ],
};