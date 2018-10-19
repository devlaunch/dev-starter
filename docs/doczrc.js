import * as path from "path";
import externalLinks from "remark-external-links";

const config = path.resolve(__dirname, "./config");
console.log(config);

const modifyBundlerConfig = config => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    "@packages": path.resolve(__dirname, "../packages"),
    "@docs": path.resolve(__dirname, "./"),
    "@public": path.resolve(__dirname, "./public")
  });

  return config;
};

export default {
  title: "Dev Starter",
  description: "Modern UI library for React",
  repository: "https://github.com/devlaunch/dev-starter",
  ordering: "ascending",
  propsParser: true,
  mdPlugins: [externalLinks.default],
  modifyBundlerConfig,
  wrapper: "docs/config/Wrapper.js",
  menu: ["Home", "Getting Started", "Foundation", "Components", "Utilities"],
  themeConfig: {
    repository: "https://github.com/devlaunch/dev-starter",
    colors: {
      primary: "#5e72e4",
      link: "#5e72e4"
    }
    // logo: {
    //   src: "/public/logo.svg",
    //   width: 200
    // }
  }
};
