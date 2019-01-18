import axios from "axios";

export default {
  siteRoot: "https://phaneendra.github.io",
  basePath: "urbanrunners",
  plugins: [
    "react-static-plugin-styled-components",
    "react-static-plugin-react-router"
  ],
  getSiteData: () => ({
    title: "UrbanRunners"
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return [
      {
        path: "/blog",
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: "src/containers/Post",
          getData: () => ({
            post
          })
        }))
      }
    ];
  }
};
