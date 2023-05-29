import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';


export const GoingOutApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  )
}
