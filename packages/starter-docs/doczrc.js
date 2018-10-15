import * as path from "path";
import externalLinks from "remark-external-links";

const modifyBundlerConfig = config => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    "@devlaunch": path.resolve(__dirname, "../"),
    "@docs": path.resolve(__dirname, "docs")
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
    },
    logo: {
      src:
        "https://raw.githubusercontent.com/smooth-code/smooth-ui/master/resources/smooth-ui-logo-horizontal.png",
      width: 200
    }
  }
};
