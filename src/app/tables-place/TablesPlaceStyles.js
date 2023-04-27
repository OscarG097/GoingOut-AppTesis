import { makeStyles } from "@mui/styles";

const TablesPlaceStyles = makeStyles({
    editButton: {
        border: '1px solid #F3734D',
        color: '#F3734D',
        '&:hover': {
            backgroundColor: '#F3734D',
            boxShadow: '.1em .1em .1em .1em #CFD3D5'
        }
    },
    circularProgressBox: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

export { TablesPlaceStyles }