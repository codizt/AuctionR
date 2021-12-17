import { createTheme } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#F0A500',
      contrastText: '#F4F4F4',
    },
    secondary: {
      main: '#CF7500',
    },
    background: {
      default: '#F4F4F4',
    },
    text: {
      primary: '#1A1C20',
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;