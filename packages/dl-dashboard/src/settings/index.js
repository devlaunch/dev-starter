export default {
  VERSION: process.env.VERSION,
  SERVER_API_URL: process.env.SERVER_API_URL,
  AUTH_TOKEN_KEY: 'dl-authenticationToken',
  AUTHORITIES: {
    ADMIN: 'ROLE_ADMIN',
    USER: 'ROLE_USER',
  },
  DATA_ERROR_ALERT: 'Internal Error',
  APP_DATE_FORMAT: 'DD/MM/YY HH:mm',
  APP_TIMESTAMP_FORMAT: 'DD/MM/YY HH:mm:ss',
  APP_LOCAL_DATE_FORMAT: 'DD/MM/YYYY',
  APP_LOCAL_DATETIME_FORMAT: 'YYYY-MM-DDThh:mm',
  APP_WHOLE_NUMBER_FORMAT: '0,0',
  APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT: '0,0.[00]',
};

const siteConfig = {
  siteName: 'DASH',
  siteIcon: 'ion-flash',
  footerText: 'Dash ©2018 Created by DevLaunch, Org',
};
const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault',
};
const language = 'english';

const jwtConfig = {
  fetchUrl: '/api/',
  secretKey: 'secretKey',
};

export { siteConfig, language, themeConfig, jwtConfig };
