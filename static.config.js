import path from 'path'
import axios from 'axios'

export default {

  // resolves an array of route objects 
  getRoutes: async () => {

    // this is where you can make requests for data that will be needed for all
    // routes or multiple routes - values returned can then be reused in route objects below

    // starter template has a request to an endpoint that retrieves an array of fake blog posts
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )

    return [
      // route object
      {
        // React Static looks for files in src/pages (see plugins below) and matches them to path
        path: '/blog',
        // function that returns data for this specific route
        getData: () => ({
          posts,
        }),
        // an array of children routes
        // in this case we are mapping through the blog posts from the post variable above
        // and setting a custom route for each one based off their post id
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          // location of template for child route
          template: 'src/containers/Post',
          // passing the individual post data needed
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  // basic template default plugins
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
