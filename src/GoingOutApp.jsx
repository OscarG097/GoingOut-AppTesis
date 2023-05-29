import { AppTheme } from './theme';
import AppRoutes from './app/routes/AppRouter';

export const GoingOutApp = () => {
  return (
    <>
      <AppTheme>
        <AppRoutes />
      </AppTheme>
    </>
  )
}
