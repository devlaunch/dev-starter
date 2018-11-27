export default {
  apiUrl: "http://yoursite.com/api/"
};

const siteConfig = {
  siteName: "DASH",
  siteIcon: "ion-flash",
  footerText: "Dash ©2018 Created by DevLaunch, Org"
};
const themeConfig = {
  topbar: "themedefault",
  sidebar: "themedefault",
  layout: "themedefault",
  theme: "themedefault"
};
const language = "english";

const jwtConfig = {
  fetchUrl: "/api/",
  secretKey: "secretKey"
};

export { siteConfig, language, themeConfig, jwtConfig };
