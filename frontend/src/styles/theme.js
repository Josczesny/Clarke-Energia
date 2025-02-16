const baseTheme = {
  colors: {
    primary: {
      main: '#00E676', // Verde Clarke original
      dark: '#00B25C', // Verde escuro para botões
      darker: '#009F52', // Verde mais escuro para sidebar light
      darkPanel: '#1E293B', // Cor do painel lateral no tema escuro
      light: '#69F0AE',
      hover: '#00A34E'
    },
    accent: '#FF9100',
    background: {
      main: '#F8F9FA',
      card: '#FFFFFF',
      dark: '#1A1F2C',
      darker: '#151B27',
      hover: 'rgba(0, 230, 118, 0.05)'
    },
    text: {
      primary: '#1A1F2C',
      secondary: '#6B7280',
      inverse: '#FFFFFF',
      highlight: '#00E676' // Para textos destacados em verde
    },
    border: 'rgba(0, 0, 0, 0.12)'
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: '3.5rem',
      fontWeight: 600,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6
    }
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  }
};

export const lightTheme = {
  ...baseTheme,
  type: 'light'
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: {
      ...baseTheme.colors.primary,
      main: '#00B25C', // Verde mais escuro para botões no tema dark
    },
    background: {
      main: '#1A1F2C',
      card: '#242A38',
      hover: 'rgba(0, 230, 118, 0.1)'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A0AEC0',
      inverse: '#FFFFFF'
    },
    border: '#2D3748'
  },
  type: 'dark'
}; 