const ocColors = {
  white: "#ffffff",
  black: "#000000",
  grey: ["#f8f9fa", "#f1f3f5", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#868e96", "#495057", "#343a40", "#212529"],
  red: ["#fff5f5", "#ffe3e3", "#ffc9c9", "#ffa8a8", "#ff8787", "#ff6b6b", "#fa5252", "#f03e3e", "#e03131", "#c92a2a"],
  pink: ["#fff0f6", "#ffdeeb", "#fcc2d7", "#faa2c1", "#f783ac", "#f06595", "#e64980", "#d6336c", "#c2255c", "#a61e4d"],
  grape: ["#f8f0fc", "#f3d9fa", "#eebefa", "#e599f7", "#da77f2", "#cc5de8", "#be4bdb", "#ae3ec9", "#9c36b5", "#862e9c"],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: ["#e7f5ff", "#d0ebff", "#a5d8ff", "#74c0fc", "#4dabf7", "#339af0", "#228be6", "#1c7ed6", "#1971c2", "#1864ab"],
  cyan: ["#e3fafc", "#c5f6fa", "#99e9f2", "#66d9e8", "#3bc9db", "#22b8cf", "#15aabf", "#1098ad", "#0c8599", "#0b7285"],
  teal: ["#e6fcf5", "#c3fae8", "#96f2d7", "#63e6be", "#38d9a9", "#20c997", "#12b886", "#0ca678", "#099268", "#087f5b"],
  green: ["#ebfbee", "#d3f9d8", "#b2f2bb", "#8ce99a", "#69db7c", "#51cf66", "#40c057", "#37b24d", "#2f9e44", "#2b8a3e"],
  lime: ["#f4fce3", "#e9fac8", "#d8f5a2", "#c0eb75", "#a9e34b", "#94d82d", "#82c91e", "#74b816", "#66a80f", "#5c940d"],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: ["#fff4e6", "#ffe8cc", "#ffd8a8", "#ffc078", "#ffa94d", "#ff922b", "#fd7e14", "#f76707", "#e8590c", "#d9480f"]
};

const light = {
  bodytext: ocColors.grey[8],
  menutext: ocColors.grey[7],
  mutedtext: ocColors.grey[6],
  disabledtext: ocColors.grey[5],
  bg: ocColors.white,
  bghoverfocus: ocColors.grey[1],
  bgA: ocColors.grey[0],
  bghoverfocusA: ocColors.grey[2],
  border: ocColors.grey[4],
  bordermuted: ocColors.grey[3],
  borderdisabled: ocColors.grey[2]
};

const dark = {
  bodytext: ocColors.grey[0],
  menutext: ocColors.grey[0],
  mutedtext: ocColors.grey[5],
  disabledtext: ocColors.grey[6],
  bg: ocColors.grey[9],
  bghoverfocus: ocColors.grey[8],
  bgA: ocColors.black,
  bghoverfocusA: ocColors.grey[9],
  border: ocColors.grey[7],
  bordermuted: ocColors.grey[7],
  borderdisabled: ocColors.grey[7]
};

const grey = {
  color: ocColors.grey[4],
  hoverfocus: ocColors.grey[6],
  contrasttext: ocColors.grey[8],
  menutext: ocColors.grey[5],
  mutedtext: ocColors.grey[3],
  disabledtext: ocColors.grey[2],
  bg: ocColors.grey[0],
  bghoverfocus: ocColors.grey[2],
  border: ocColors.grey[3],
  bordermuted: ocColors.grey[2],
  borderdisabled: ocColors.grey[1]
};

const blue = {
  color: ocColors.blue[5],
  hoverfocus: ocColors.blue[7],
  contrasttext: ocColors.grey[0],
  menutext: ocColors.blue[6],
  mutedtext: ocColors.blue[4],
  disabledtext: ocColors.blue[3],
  bg: ocColors.blue[1],
  bghoverfocus: ocColors.blue[2],
  border: ocColors.blue[4],
  bordermuted: ocColors.blue[3],
  borderdisabled: ocColors.blue[2]
};

const red = {
  color: ocColors.red[5],
  hoverfocus: ocColors.red[7],
  contrasttext: ocColors.grey[8],
  menutext: ocColors.red[6],
  mutedtext: ocColors.red[4],
  disabledtext: ocColors.red[3],
  bg: ocColors.red[1],
  bghoverfocus: ocColors.red[2],
  border: ocColors.red[4],
  bordermuted: ocColors.red[3],
  borderdisabled: ocColors.red[2]
};

const pink = {
  color: ocColors.pink[5],
  hoverfocus: ocColors.pink[7],
  contrasttext: ocColors.grey[8],
  menutext: ocColors.pink[6],
  mutedtext: ocColors.pink[4],
  disabledtext: ocColors.pink[3],
  bg: ocColors.pink[1],
  bghoverfocus: ocColors.pink[2],
  border: ocColors.pink[4],
  bordermuted: ocColors.pink[3],
  borderdisabled: ocColors.pink[2]
};

const grape = {
  color: ocColors.grape[5],
  hoverfocus: ocColors.grape[7],
  contrasttext: ocColors.grey[8],
  menutext: ocColors.grape[6],
  mutedtext: ocColors.grape[4],
  disabledtext: ocColors.grape[3],
  bg: ocColors.grape[1],
  bghoverfocus: ocColors.grape[2],
  border: ocColors.grape[4],
  bordermuted: ocColors.grape[3],
  borderdisabled: ocColors.grape[2]
};

const violet = {
  color: ocColors.violet[5],
  hoverfocus: ocColors.violet[7],
  contrasttext: ocColors.grey[0],
  menutext: ocColors.violet[6],
  mutedtext: ocColors.violet[4],
  disabledtext: ocColors.violet[3],
  bg: ocColors.violet[1],
  bghoverfocus: ocColors.violet[2],
  border: ocColors.violet[4],
  bordermuted: ocColors.violet[3],
  borderdisabled: ocColors.violet[2]
};

const indigo = {
  color: ocColors.indigo[5],
  hoverfocus: ocColors.indigo[7],
  contrasttext: ocColors.grey[0],
  menutext: ocColors.indigo[6],
  mutedtext: ocColors.indigo[4],
  disabledtext: ocColors.indigo[3],
  bg: ocColors.indigo[1],
  bghoverfocus: ocColors.indigo[2],
  border: ocColors.indigo[4],
  bordermuted: ocColors.indigo[3],
  borderdisabled: ocColors.indigo[2]
};

const cyan = {
  color: ocColors.cyan[5],
  hoverfocus: ocColors.cyan[7],
  contrasttext: ocColors.grey[0],
  menutext: ocColors.cyan[6],
  mutedtext: ocColors.cyan[4],
  disabledtext: ocColors.cyan[3],
  bg: ocColors.cyan[1],
  bghoverfocus: ocColors.cyan[2],
  border: ocColors.cyan[4],
  bordermuted: ocColors.cyan[3],
  borderdisabled: ocColors.cyan[2]
};

const teal = {
  color: ocColors.teal[5],
  hoverfocus: ocColors.teal[7],
  contrasttext: ocColors.grey[0],
  menutext: ocColors.teal[6],
  mutedtext: ocColors.teal[4],
  disabledtext: ocColors.teal[3],
  bg: ocColors.teal[1],
  bghoverfocus: ocColors.teal[2],
  border: ocColors.teal[4],
  bordermuted: ocColors.teal[3],
  borderdisabled: ocColors.teal[2]
};

const green = {
  color: ocColors.green[5],
  hoverfocus: ocColors.green[7],
  contrasttext: ocColors.grey[0],
  menutext: ocColors.green[6],
  mutedtext: ocColors.green[4],
  disabledtext: ocColors.green[3],
  bg: ocColors.green[1],
  bghoverfocus: ocColors.green[2],
  border: ocColors.green[4],
  bordermuted: ocColors.green[3],
  borderdisabled: ocColors.green[2]
};

const lime = {
  color: ocColors.lime[5],
  hoverfocus: ocColors.lime[7],
  contrasttext: ocColors.grey[8],
  menutext: ocColors.lime[6],
  mutedtext: ocColors.lime[4],
  disabledtext: ocColors.lime[3],
  bg: ocColors.lime[1],
  bghoverfocus: ocColors.lime[2],
  border: ocColors.lime[4],
  bordermuted: ocColors.lime[3],
  borderdisabled: ocColors.lime[2]
};

const yellow = {
  color: ocColors.yellow[5],
  hoverfocus: ocColors.yellow[7],
  contrasttext: ocColors.grey[8],
  menutext: ocColors.yellow[6],
  mutedtext: ocColors.yellow[4],
  disabledtext: ocColors.yellow[3],
  bg: ocColors.yellow[1],
  bghoverfocus: ocColors.yellow[2],
  border: ocColors.yellow[4],
  bordermuted: ocColors.yellow[3],
  borderdisabled: ocColors.yellow[2]
};

const orange = {
  color: ocColors.orange[5],
  hoverfocus: ocColors.orange[7],
  contrasttext: ocColors.grey[8],
  menutext: ocColors.orange[6],
  mutedtext: ocColors.orange[4],
  disabledtext: ocColors.orange[3],
  bg: ocColors.orange[1],
  bghoverfocus: ocColors.orange[2],
  border: ocColors.orange[4],
  bordermuted: ocColors.orange[3],
  borderdisabled: ocColors.orange[2]
};

const colors = {
  light,
  dark,
  red,
  pink,
  grape,
  grey,
  blue,
  violet,
  indigo,
  cyan,
  teal,
  green,
  lime,
  yellow,
  orange,
  white: "#fff",
  black: "#000",
  primary: { ...indigo },
  secondary: { ...grey },
  info: { ...cyan },
  success: { ...green },
  warning: { ...orange },
  danger: { ...red },
  bgMark: "#fcf8e3"
};

/*
const colors = {
  blue: "#007bff", // primary
  blueHoverFocusA: "#0056b3",
  blueHoverFocus: "#0062cc",
  blueBoxShadow: "rgba(0, 123, 255, 0.5)",
  blueAlertText: "#004085",
  blueAlertBackground: "#cce5ff",
  blueAlertBorder: "#b8daff",
  blueAlertBorderTop: "#9fcdff",
  blueAlertAHoverFocus: "#002752",
  inigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#e83e8c",
  red: "#dc3545", // danger
  redHoverFocus: "#bd2130",
  redBoxShadow: "rgba(220, 53, 69, 0.5)",
  redAlertText: "#721c24",
  redAlertBackground: "#f8d7da",
  redAlertBorder: "#f5c6cb",
  redAlertBorderTop: "#f1b0b7",
  redAlertAHoverFocus: "#491217",
  orange: "#fd7e14",
  yellow: "#ffc107", // warning
  yellowHoverFocus: "#d39e00",
  yellowBoxShadow: "rgba(255, 193, 7, 0.5)",
  yellowAlertText: "#856404",
  yellowAlertBackground: "#fff3cd",
  yellowAlertBorder: "#ffeeba",
  yellowAlertBorderTop: "#ffe8a1",
  yellowAlertAHoverFocus: "#533f03",
  green: "#28a745", // success
  greenHoverFocus: "#1e7e34",
  greenBoxShadow: "rgba(40, 167, 69, 0.5)",
  greenAlertText: "#155724",
  greenAlertBackground: "#d4edda",
  greenAlertBorder: "#c3e6cb",
  greenAlertBorderTop: "#b1dfbb",
  greenAlertAHoverFocus: "#0b2e13",
  teal: "#20c997",
  cyan: "#17a2b8", // info
  cyanHoverFocus: "#117a8b",
  cyanBoxShadow: "rgba(23, 162, 184, 0.5)",
  cyanAlertText: "#0c5460",
  cyanAlertBackground: "#d1ecf1",
  cyanAlertBorder: "#bee5eb",
  cyanAlertBorderTop: "#abdde5",
  cyanAlertAHoverFocus: "#062c33",
  white: "#fff",
  gray: "#6c757d", // secondary
  grayHoverFocus: "#545b62",
  grayBoxShadow: "rgba(108, 117, 125, 0.5)",
  grayAlertText: "#383d41",
  grayAlertBackground: "#e2e3e5",
  grayAlertBorder: "#d6d8db",
  grayAlertBorderTop: "#c8cbcf",
  grayAlertAHoverFocus: "#202326",
  gray100: "#f8f9fa", // light
  gray100HoverFocus: "#dae0e5",
  gray100BoxShadow: "rgba(248, 249, 250, 0.5)",
  gray100AlertText: "#818182",
  gray100AlertBackground: "#fefefe",
  gray100AlertBorder: "#fdfdfe",
  gray100AlertBorderTop: "#ececf6",
  gray100AlertAHoverFocus: "#686868",
  gray200: "#e9ecef",
  gray300: "#dee2e6",
  gray400: "#ced4da",
  gray500: "#adb5bd",
  gray600: "#868e96",
  gray700: "#495057",
  gray800: "#343a40", // dark
  gray800HoverFocus: "#1d2124",
  gray800BoxShadow: "rgba(52, 58, 64, 0.5)",
  gray800AlertText: "#1b1e21",
  gray800AlertBackground: "#d6d8d9",
  gray800AlertBorder: "#c6c8ca",
  gray800AlertBorderTop: "#b9bbbe",
  gray800AlertAHoverFocus: "#040505",
  gray900: "#212529", // darker
  gray900HoverFocus: "#16181b",
  gray900BoxShadow: "rgba(0, 0, 0, 0.15)",
  black: "#000",
  buttonPrimaryBackgroundColor: "#007bff",
  buttonPrimaryActiveBorderColor: "#005cbf",
  buttonPrimaryHoverFocusBackgroundColor: "#0069d9",
  buttonSecondaryBackgroundColor: "#6c757d",
  buttonSecondaryActiveBorderColor: "#4e555b",
  buttonSecondaryHoverFocusBackgroundColor: "#5a6268",
  buttonSuccessBackgroundColor: "#28a745",
  buttonSuccessActiveBorderColor: "#1c7430",
  buttonSuccessHoverFocusBackgroundColor: "#218838",
  buttonDangerBackgroundColor: "#dc3545",
  buttonDangerActiveBorderColor: "#b21f2d",
  buttonDangerHoverFocusBackgroundColor: "#c82333",
  buttonWarningBackgroundColor: "#ffc107",
  buttonWarningActiveBorderColor: "#c69500",
  buttonWarningHoverFocusBackgroundColor: "#e0a800",
  buttonInfoBackgroundColor: "#17a2b8",
  buttonInfoActiveBorderColor: "#10707f",
  buttonInfoHoverFocusBackgroundColor: "#138496",
  buttonLightBackgroundColor: "#f8f9fa",
  buttonLightActiveBorderColor: "#d3d9df",
  buttonLightHoverFocusBackgroundColor: "#e2e6ea",
  buttonDarkBackgroundColor: "#343a40",
  buttonDarkActiveBorderColor: "#171a1d",
  buttonDarkHoverFocusBackgroundColor: "#23272b",
  backgroundMark: "#fcf8e3",
  borderCard: "rgba(0, 0, 0, 0.125)",
  backgroundCard: "#fff",
  backgroundCardFooter: "rgba(0, 0, 0, 0.03)",
  formControlBorderFocus: "#80bdff",
  formControlBoxShadowFocus: "rgba(0, 123, 255, 0.25)",
  formControlBoxShadowValid: "rgba(40, 167, 69, 0.25)",
  formControlBoxShadowInvalid: "rgba(220, 53, 69, 0.25)",
  listItemDefaultHover: "rgb(248, 249, 250)",
  modalBorder: "rgba(0, 0, 0, 0.2)",
  navbarLightColor: "rgba(0, 0, 0, 0.5)",
  navbarLightColorHoverFocus: "rgba(0, 0, 0, 0.7)",
  navbarLightColorActive: "rgba(0, 0, 0, 0.9)",
  navbarLightColorDisabled: "rgba(0, 0, 0, 0.3)",
  navbarLightBorderColor: "rgba(0, 0, 0, 0.1)",
  popoverArrowBorderColor: "rgba(0, 0, 0, 0.25)",
  navbarDarkColor: "rgba(255, 255, 255, 0.5)",
  navbarDarkColorHoverFocus: "rgba(255, 255, 255, 0.75)",
  navbarDarkColorDisabled: "rgba(255, 255, 255, 0.25)",
  navbarDarkColorActive: "rgba(255, 255, 255, 0.9)",
  navbarDarkBorderColor: "rgba(255, 255, 255, 0.1)",
  popoverHeaderBackgroundColor: "#f7f7f7",
  popoverHeaderBorderColor: "#ebebeb",
  tableStripedBackgroundColor: "rgba(0, 0, 0, 0.05)",
  tableBackgroundColorHoverFocus: "rgba(0, 0, 0, 0.075)",
  tableDarkBorderColor: "#32383e",
  tableDarkStripedBackgroundColor: "rgba(255, 255, 255, 0.05)",
  tableDarkStripedBackgroundColorHoverFocus: "rgba(255, 255, 255, 0.075)"
};
*/

export { colors };
