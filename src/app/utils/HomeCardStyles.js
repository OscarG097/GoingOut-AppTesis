import { makeStyles } from "@mui/styles";

const HomeStyles = makeStyles({
    homeCardClass: {
        alignSelf: 'center',
        height: '295px',
        width: '500px',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        display: 'inline-block',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '26px',
        lineHeight: '20px',
        '&:hover': {
            border: '1px solid #F3734D',
            boxShadow: '.5em .5em .3em .3em #CFD3D5'
        }
    },
    homeGrid: {
        position: 'relative',
        textAlign: 'center',
        alignSelf: 'center'
    }

})

export { HomeStyles }