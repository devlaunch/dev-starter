// base-styles.js
import { injectGlobal } from 'styled-components';
import reboot from 'styled-reboot';
import colors from 'modules/theme/openColors';

const options = {
  fontFamilyBase:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  fontSizeBase: '1rem',
  fontWeightBase: 'normal',
  lineHeightBase: 1.5,
  bodyColor: colors.gray[7],
  bodyBg: colors.white,
  headingsMarginBottom: '.5rem',
  paragraphMarginBottom: '1rem',
  dtFontWeight: 'bold',
  linkColor: colors.gray[7],
  linkDecoration: 'none',
  linkHoverColor: colors.blue[4],
  linkHoverDecoration: 'underline',
  tableCellPadding: '.75rem',
  textMuted: colors.gray[6],
};

const rebootCss = reboot(options);

const baseStyles = () => injectGlobal`
  ${rebootCss}
  /* other styles */
`;

export default baseStyles;
