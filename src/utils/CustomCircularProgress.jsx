import { Box, CircularProgress, Typography } from "@mui/material";
import PropTypes from 'prop-types';

function CustomCircularProgress({ style }) {

    return (
        <Box className={style}>
            <CircularProgress size={'5em'} sx={{ color: '#F3734D' }} />
            <Box className={style}>
                <Typography variant="caption" component={'div'} color="text.secondary" >
                    Cargando...
                </Typography>
            </Box>
        </Box>
    )
}

export default CustomCircularProgress;

CustomCircularProgress.propTypes = {
    style: PropTypes.any
}