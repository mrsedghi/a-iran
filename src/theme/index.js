import { createTheme } from '@mui/material/styles';
import { prefixer } from 'stylis';
import rtlPlugin from '@mui/stylis-plugin-rtl';

// Persian luxury color palette centered around cyan (#00c7ca)
const persianColors = {
  // Primary Cyan Family
  cyan: '#00c7ca',              // Primary cyan
  cyanLight: '#33d4d7',          // Light cyan
  cyanLighter: '#66e1e4',        // Lighter cyan
  cyanDark: '#009fa2',           // Dark cyan
  cyanDarker: '#00777a',         // Darker cyan
  
  // Secondary Teal/Turquoise Family
  teal: '#008B8B',               // Deep teal (complementary)
  tealLight: '#20A5A5',          // Light teal
  tealDark: '#006B6B',           // Dark teal
  
  // Accent Colors
  coral: '#FF6B6B',               // Coral accent (warm contrast)
  coralLight: '#FF8E8E',         // Light coral
  coralDark: '#E55555',          // Dark coral
  gold: '#D4AF37',               // Gold accent
  goldLight: '#E5C85A',          // Light gold
  goldDark: '#B8941F',           // Dark gold
  
  // Neutral Backgrounds
  ivory: '#F8FDFD',              // Cyan-tinted ivory
  warmIvory: '#F0F9F9',          // Warm cyan-tinted ivory
  softCyan: '#E8F7F7',           // Soft cyan background
  white: '#FFFFFF',
  
  // Text Colors
  charcoal: '#1A2E35',           // Deep teal-charcoal
  darkGray: '#2C3E47',           // Dark gray
  mediumGray: '#5A6B73',          // Medium gray
  lightGray: '#8A9BA3',          // Light gray
  
  // Utility
  black: '#000000',
  softGray: '#F5F7F8',           // Soft gray background
};

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      main: persianColors.cyan,
      light: persianColors.cyanLight,
      dark: persianColors.cyanDark,
      contrastText: persianColors.white,
    },
    secondary: {
      main: persianColors.teal,
      light: persianColors.tealLight,
      dark: persianColors.tealDark,
      contrastText: persianColors.white,
    },
    error: {
      main: persianColors.coral,
      light: persianColors.coralLight,
      dark: persianColors.coralDark,
      contrastText: persianColors.white,
    },
    warning: {
      main: persianColors.gold,
      light: persianColors.goldLight,
      dark: persianColors.goldDark,
      contrastText: persianColors.charcoal,
    },
    info: {
      main: persianColors.cyan,
      light: persianColors.cyanLight,
      dark: persianColors.cyanDark,
      contrastText: persianColors.white,
    },
    success: {
      main: persianColors.teal,
      light: persianColors.tealLight,
      dark: persianColors.tealDark,
      contrastText: persianColors.white,
    },
    accent: {
      main: persianColors.gold,
      light: persianColors.goldLight,
      dark: persianColors.goldDark,
      contrastText: persianColors.charcoal,
    },
    background: {
      default: persianColors.warmIvory,
      paper: persianColors.white,
    },
    text: {
      primary: persianColors.charcoal,
      secondary: persianColors.mediumGray,
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

