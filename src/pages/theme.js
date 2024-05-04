import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
     palette: {
          primary: {
               main: '#0066ff',
               light: '#f2f2f2'
          },
          secondary: {
               main: '#19857b',
          },
          error: {
               main: red.A400,
          },
     },
     typography: {
          fontFamily: [
               '-apple-system',
               'BlinkMacSystemFont',
               '"Segoe UI"',
               'Roboto',
               '"Helvetica Neue"',
               'Arial',
               'sans-serif',
               '"Apple Color Emoji"',
               '"Segoe UI Emoji"',
               '"Segoe UI Symbol"',
          ].join(','),
     },
     components: {
          // Assuming you're using MUI v5 you might need to adjust this if using a different version
          MuiLink: { // If using the MuiLink component
               styleOverrides: {
                    root: {
                         textDecoration: 'none',
                         color: 'inherit', // Ensure links inherit color from their parent
                    },
               },
          },
          // Or for all anchor elements globally, use the following:
          MuiCssBaseline: {
               styleOverrides: {
                    a: { // Target anchor tags globally
                         textDecoration: 'none',
                         color: 'inherit', // Use the inherit keyword to use the parent's text color
                    },
               },
          },
     },
});

export default theme;