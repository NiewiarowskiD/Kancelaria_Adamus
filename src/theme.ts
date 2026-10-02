import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const GEORGIA = 'Georgia, "Times New Roman", serif';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a1a1a',
      light: '#3d3d3d',
      dark: '#0a0a0a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#c5a572',
      light: '#d4bd8e',
      dark: '#a0854f',
      contrastText: '#1a1a1a',
    },
    background: {
      default: '#f7f5f0',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#5c5c5c',
    },
    divider: '#e0d8c8',
  },
  typography: {
    fontFamily: GEORGIA,
    h1: { fontFamily: GEORGIA, fontWeight: 600, fontSize: '2.75rem' },
    h2: { fontFamily: GEORGIA, fontWeight: 600, fontSize: '2.25rem' },
    h3: { fontFamily: GEORGIA, fontWeight: 600, fontSize: '1.85rem' },
    h4: { fontFamily: GEORGIA, fontWeight: 600, fontSize: '1.6rem' },
    h5: { fontFamily: GEORGIA, fontWeight: 600, fontSize: '1.4rem' },
    h6: { fontFamily: GEORGIA, fontWeight: 600, fontSize: '1.25rem' },
    body1: { fontFamily: GEORGIA, fontSize: '1.2rem' },
    body2: { fontFamily: GEORGIA, fontSize: '1rem' },
    button: { fontFamily: GEORGIA, textTransform: 'none', fontWeight: 500, letterSpacing: '0.05em' },
    caption: { fontFamily: GEORGIA },
    overline: { fontFamily: GEORGIA, letterSpacing: '0.15em' },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: '10px 28px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: { body: { fontFamily: GEORGIA, fontSize: '1.2rem' } },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0 },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: GEORGIA,
          fontWeight: 500,
        },
      },
    },
  },
});

// Nagłówki skalują się w dół na mniejszych ekranach
theme = responsiveFontSizes(theme, { factor: 2.5 });

export default theme;
