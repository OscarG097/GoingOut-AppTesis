import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';


export const orangeTheme = createTheme({
    palette: {
        primary: {
            main: '#F3734D'
        },
        secondary: {
            main: '#CE5430'
        },
        error: {
            main: red.A400
        }
    }
})

