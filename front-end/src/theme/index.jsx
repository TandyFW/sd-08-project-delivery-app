import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const primary = '#036B52';
const secondary = '#2FC18C';
const terciary = '#421981';
const quaternary = '#056CF9';
const darkText = '#001813';
const lightText = '#F2FFFC';
const lightGreen = '#e9ffeB';

const theme = createTheme({
  palette: {
    common: {
      black: darkText,
      white: lightText,
    },
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    terciary: {
      main: terciary,
    },
    quaternary: {
      main: quaternary,
    },
    background: {
      form: lightGreen,
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
