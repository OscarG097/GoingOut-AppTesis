import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { useForm } from '../hooks';

const registerFormFields = {
  registerCompanyName: '',
  registerEmail: '',
  registerProvince: '',
  registerLocation: '',
  registerStreet: '',
  registerNumber: '',
  registerPostalCode: '',
  registerPassword: '',
  registerPasswordConfirm: '',
}


export const RegisterPage = () => {

  const {
    registerCompanyName,
    registerEmail,
    registerProvince,
    registerLocation,
    registerStreet,
    registerNumber,
    registerPostalCode,
    registerPassword,
    registerPasswordConfirm,
    onInputChange
  } = useForm(registerFormFields);

  const registerSubmit = (event) => {
    event.preventDefault();
    console.log({
      registerCompanyName,
      registerEmail,
      registerProvince,
      registerLocation,
      registerStreet,
      registerNumber,
      registerPostalCode,
      registerPassword,
      registerPasswordConfirm
    });
  }

  return (

    <AuthLayout title="Crear Cuenta">
      <form onSubmit={registerSubmit}>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Razon Social"
              type="name"
              placeholder='Razon Social'
              fullWidth
              name="registerCompanyName"
              value={registerCompanyName}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder='Email de Registro'
              fullWidth
              name="registerEmail"
              value={registerEmail}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Provincia"
              type="text"
              placeholder='Provincia'
              fullWidth
              name="registerProvince"
              value={registerProvince}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Locacion"
              type="text"
              placeholder='Locacion'
              fullWidth
              name="registerLocation"
              value={registerLocation}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Calle"
              type="text"
              placeholder='Calle'
              fullWidth
              name="registerStreet"
              value={registerStreet}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Numeracion"
              type="number"
              placeholder='Numeracion'
              fullWidth
              name="registerNumber"
              value={registerNumber}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Codigo Postal"
              type="number"
              placeholder='Codigo Postal'
              fullWidth
              name="registerPostalCode"
              value={registerPostalCode}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name="registerPassword"
              value={registerPassword}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Repetir Contraseña"
              type="password"
              placeholder='Repetir Contraseña'
              fullWidth
              name="registerPasswordConfirm"
              value={registerPasswordConfirm}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} >

            <Grid item xs={12}>
              <Button variant='contained' fullWidth>
                Crear Cuenta
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/register'>
              Ingresar
            </Link>
          </Grid>


        </Grid>
      </form>
    </AuthLayout>

  )
}
