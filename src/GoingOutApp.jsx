import AppRoutes from './app/routes/AppRouter';
import { AppTheme } from './theme';

export const GoingOutApp = () => {
  return (
    <>
      <AppTheme>
        <AppRoutes />
      </AppTheme>
    </>
  )
}
