import { Link } from 'react-router-dom';
import { Card, Grid, Typography } from '@mui/material';
import { HomeCardStyles } from "./styles";
import PropTypes from 'prop-types';

const HomeCard = (props) => {
    const classes = HomeCardStyles();
    const { body, path, label } = props

    return (
        <Grid item lg={6} sm={3} xs={12}>
            <Card className={classes.homeCardClass} component={Link} to={path}>
                <Typography>
                    {label}
                </Typography>
                {body}
            </Card>
        </Grid>
    )
}

export { HomeCard }

HomeCard.propTypes = {
    label: PropTypes.string.isRequired,
    body: PropTypes.any.isRequired,
    path: PropTypes.string
}