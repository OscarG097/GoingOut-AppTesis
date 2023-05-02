import { Routes, Route } from "react-router-dom"
import Home from "../../pages/Home"
import TablesPlace from "../tables-place/TablesPlace"
import GoLayout from "../layouts/LayoutManagement"

function AppRoutes() {

  return (
    <Routes>
      <Route path={import.meta.env.VITE_ROUTES_GOMAIN} element={<GoLayout />}>
        <Route index element={<Home />} />
        <Route path={'/management/ocupacion-mesas'} element={<TablesPlace />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes