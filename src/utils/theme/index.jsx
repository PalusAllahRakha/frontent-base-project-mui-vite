import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // ✅ Global colors
  palette: {
    primary: {
      main: '#3370FF'
    },
    secondary: {
      main: '#9c27b0'
    },
    background: {
      default: '#f9fafc',
      paper: '#ffffff'
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#555555'
    }
  },

  // ✅ Global typography
  typography: {
    fontFamily: '\'Inter\', \'Roboto\', sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 500
    }
  },

  // ✅ Global spacing & shape
  spacing: 8,
  shape: {
    borderRadius: 4
  },

  // ✅ Global breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },

  // ✅ Component-level overrides
  components: {
    // Global baseline styles
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#fff',
          margin: 0,
          padding: 0,
        },
        a: {
          textDecoration: 'none',
          color: 'inherit'
        }
      }
    },

    // Select
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          PaperProps: {
            style: {
              maxHeight: 300,
              minHeight: 100,
              fontSize: 14,
              fontWeight: 400,
              color: '#222323'
            }
          }
        }
      }
    },

    // Button
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '8px 16px',
          fontWeight: 'normal'
        }
      },
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
        color: 'primary'
      }
    },

    // TextField
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        fullWidth: true
      },
      styleOverrides: {
        root: {
          borderRadius: '4px'
        }
      }
    },

    // InputBase
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '4px'
        }
      }
    },

    // Paper
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0px 2px 6px rgba(0,0,0,0.08)'
        }
      }
    },

    // Card
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0px 2px 8px rgba(0,0,0,0.1)'
        }
      }
    },

    // AppBar
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: '#3370FF'
        }
      }
    },

    // Typography
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#1a1a1a'
        }
      }
    },

    // IconButton
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px'
        }
      },
      defaultProps: {
        size: 'small'
      }
    },

    // Table
    MuiTable: {
      defaultProps: {
        size: 'small'
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#f0f4ff'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '14px'
        }
      }
    },

    // Dialog
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '12px',
          padding: '16px'
        }
      }
    },

    // Tooltip
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#333',
          fontSize: '12px',
          borderRadius: '6px'
        }
      }
    }
  }
});

export default theme;
