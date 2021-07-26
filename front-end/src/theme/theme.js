import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#036B52',
      dark: '#036B52',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#009ff5',
      dark: '#0085cc',
      contrastText: '#000',
    },
  },
});

export default theme;
