import { Box, Grid, } from '@mui/material';
import GOING_OUT_LOGO from "../images/GoingOutNavbarLogo.png";


export const AuthLayout = ({ children }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', p: 4 }}
    >

      <Grid item
        className='box-shadow'
        xs={3}
        sx={{
          width: { sm: 450 },
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2
        }}
      >

        {/* <Typography variant='h5' sx={{ mb: 1 }} >{ title }</Typography> */}
        <Box
          component={'img'}
          alt="GoingOut"
          src={GOING_OUT_LOGO}
          sx={{
            margin: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '200px',
            height: '62px'
          }}
        />

        {children}

      </Grid>

    </Grid>
  )
}
