module.exports = {
    siteMetadata: {
      title: "testing out alternative mongodb parser",
    },
    plugins: [
       /* {
        resolve:"gatsby-source-mongo-relationships",
        options: {
            dbName: 'test_relations_gatsby',
            collection: ['categories', 'comments', 'posts', 'users'],
            //collection: `users`,
          },
        
      } */
      {
        resolve: `gatsby-source-mongo-relationships`,
        options: {
          dbName: 'heroku_jgnf32k2',
          collection: ['postcategories', 'postcomments', 'posts', 'users'],
          server: {
            address: 'ds129045.mlab.com',
            port: '29045',
          },
          auth: {
            user: 'heroku_jgnf32k2',
            password: 'dnr2nj3qo69puej1fvrgade7kl',
          },
        },
      }
    ],
  }