import { Typography, Button } from '@mui/material';
import { settings } from '../config/settings';

export const ErrorPage = () => {
    return (
        <div>
            <Typography variant="h1">Error 404</Typography>
            <Typography variant="h4">Página no encontrada</Typography>
            <Button variant="contained" color="primary" href={settings.routeGomain}>Volver a la página principal</Button>
        </div>
    );
}