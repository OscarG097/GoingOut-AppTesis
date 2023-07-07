import { Routes, Route } from 'react-router-dom';
import { Home, TablesPlace } from '../pages';
import GoLayout from '../layouts/LayoutManagement';
import Menu from '../pages/Menu';

function AppRoutes() {

  return (
    <Routes>
      <Route path={import.meta.env.VITE_ROUTES_GOMAIN} element={<GoLayout />}>
        <Route index element={<Home />} />
        <Route path={import.meta.env.VITE_ROUTES_TABLES} element={<TablesPlace />} />
        <Route path={import.meta.env.VITE_ROUTES_MENU} element={<Menu />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes