import { Navigate, Route, Routes } from 'react-router-dom';
import TablesPlace from '../tables-place/TablesPlace';
import GoLayout from '../layouts/LayoutManagement';



export const ManagementRoutes = () => {
  return (
    <Routes>
        <Route path={import.meta.env.VITE_ROUTES_GOMAIN} element={<GoLayout />}>
            <Route index element={<Home />} />
            <Route path={'/management/ocupacion-mesas'} element={<TablesPlace />} />
        </Route>
    </Routes>
  )
}
