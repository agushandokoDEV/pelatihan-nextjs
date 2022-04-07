import { createTheme, responsiveFontSizes } from '@mui/material/styles';

//https://stackoverflow.com/questions/46486565/mui-customize-button-color
//#4B566B
const base = createTheme({
    // palette: {
    //     mode: 'light',
    //     background: {
    //         default: grey[50],
    //     },
    //     primary: {
    //         main: orange[900]
    //     },
    //     secondary: {
    //         main: '##fff'
    //     },
    //     error: {
    //         main: red.A400,
    //     }
    // },
    typography: {
        button: {
            textTransform: 'none',
        }
    },
});

const theme = responsiveFontSizes(base);
export default theme;