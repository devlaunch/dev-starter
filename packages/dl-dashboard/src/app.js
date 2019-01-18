import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';

import { store, history } from './redux/store';
import Boot from './redux/boot';
import PublicRoutes from './router';
import AppLocale from './languageProvider';
import config, { getCurrentLanguage } from './containers/LanguageSwitcher/config';
import themes from 'settings/themes';
import { themeConfig } from 'settings';
import DevTools from 'components/utility/devtools';
import StyledApp from './app.style';

const devTools = process.env.NODE_ENV === 'development' ? <DevTools /> : null;

const currentAppLocale = AppLocale[getCurrentLanguage(config.defaultLanguage || 'english').locale];

const DashApp = () => (
  <LocaleProvider locale={currentAppLocale.antd}>
    <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <StyledApp>
          <Provider store={store}>
            <div>
              <PublicRoutes history={history} />
              {/* If this slows down the app in dev disable it and enable when required  */}
              {devTools}
            </div>
          </Provider>
        </StyledApp>
      </ThemeProvider>
    </IntlProvider>
  </LocaleProvider>
);
Boot()
  .then(() => DashApp())
  .catch(error => console.error(error));

export default DashApp;
export { AppLocale };
