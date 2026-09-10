import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
    fontFamily: '"Cormorant Garamond", "Georgia", "Times New Roman", serif',
    h1: { fontFamily: '"Cormorant Garamond", "Georgia", serif', fontWeight: 600, fontSize: '3.5rem' },
    h2: { fontFamily: '"Cormorant Garamond", "Georgia", serif', fontWeight: 600, fontSize: '2.75rem' },
    h3: { fontFamily: '"Cormorant Garamond", "Georgia", serif', fontWeight: 600, fontSize: '2.25rem' },
    h4: { fontFamily: '"Cormorant Garamond", "Georgia", serif', fontWeight: 600, fontSize: '1.75rem' },
    h5: { fontFamily: '"Cormorant Garamond", "Georgia", serif', fontWeight: 600, fontSize: '1.4rem' },
    h6: { fontFamily: '"Cormorant Garamond", "Georgia", serif', fontWeight: 600, fontSize: '1.2rem' },
    body1: { fontFamily: '"Jost", "Roboto", "Helvetica", sans-serif', fontSize: '1rem' },
    body2: { fontFamily: '"Jost", "Roboto", "Helvetica", sans-serif', fontSize: '0.9rem' },
    button: { fontFamily: '"Jost", "Roboto", sans-serif', textTransform: 'none', fontWeight: 500, letterSpacing: '0.05em' },
    caption: { fontFamily: '"Jost", "Roboto", sans-serif' },
    overline: { fontFamily: '"Jost", "Roboto", sans-serif', letterSpacing: '0.15em' },
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
    MuiAppBar: {
      defaultProps: { elevation: 0 },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Jost", "Roboto", sans-serif',
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
