import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    
    <AuthLayout title="Crear Cuenta">
      <form>
          <Grid container>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Razon Social"
                type="name"
                placeholder='Razon Social'
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Email"
                type="email"
                placeholder='Email de Registro'
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Provincia"
                type="text"
                placeholder='Provincia'
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Locacion"
                type="text"
                placeholder='Locacion'
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Calle"
                type="text"
                placeholder='Calle'
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Numeracion"
                type="number"
                placeholder='Numeracion'
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Codigo Postal"
                type="number"
                placeholder='Codigo Postal'
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña"
                type="password"
                placeholder='Contraseña'
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Repetir Contraseña"
                type="password"
                placeholder='Repetir Contraseña'
                fullWidth
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }} >

              <Grid item xs={ 12 }>
                <Button variant='contained' fullWidth>
                  Crear Cuenta 
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                Ingresar
              </Link>
            </Grid>


          </Grid>
      </form> 
    </AuthLayout>

  )
}
