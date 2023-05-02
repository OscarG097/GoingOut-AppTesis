import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';


export const AppRouter = () => {
  return (
    <Routes>
        
        {/* Login y Registro */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/* Management */}
        <Route />

    </Routes>
  )
}
