import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';


export const orangeTheme = createTheme({
    palette: {
        primary: {
            main: '#EBBC47'
        },
        secondary: {
            main: '#F7C64A'
        },
        error: {
            main: red.A400
        }
    }
})

