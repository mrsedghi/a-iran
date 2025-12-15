import { createTheme } from '@mui/material/styles';
import { prefixer } from 'stylis';
import rtlPlugin from '@mui/stylis-plugin-rtl';

// Persian luxury color palette inspired by Iranian culture
const persianColors = {
  deepEmerald: '#1B5E3E',      // Deep emerald green
  emerald: '#2D8659',          // Medium emerald
  turquoise: '#40B5A4',        // Turquoise blue-green
  lightTurquoise: '#6BCFC7',   // Light turquoise
  ivory: '#F5F5DC',            // Ivory/cream
  warmIvory: '#FFF8E7',        // Warm ivory
  gold: '#D4AF37',             // Gold accent
  darkGold: '#B8941F',         // Dark gold
  charcoal: '#2C2C2C',         // Charcoal for text
  softGray: '#F5F5F5',         // Soft gray background
  white: '#FFFFFF',
  black: '#000000',
};

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      main: persianColors.deepEmerald,
      light: persianColors.emerald,
      dark: '#0F3D2A',
      contrastText: persianColors.white,
    },
    secondary: {
      main: persianColors.turquoise,
      light: persianColors.lightTurquoise,
      dark: '#2A8F7D',
      contrastText: persianColors.white,
    },
    accent: {
      main: persianColors.gold,
      light: '#E5C85A',
      dark: persianColors.darkGold,
      contrastText: persianColors.charcoal,
    },
    background: {
      default: persianColors.warmIvory,
      paper: persianColors.white,
    },
    text: {
      primary: persianColors.charcoal,
      secondary: '#5A5A5A',
    },
    // Custom colors for the brand
    persian: persianColors,
  },
  typography: {
    fontFamily: [
      'Vazirmatn',
      'Tahoma',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          direction: 'rtl',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontWeight: 500,
        },
        contained: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

// Stylis configuration for RTL
export const stylisPlugins = [prefixer, rtlPlugin];

