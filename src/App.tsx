import { useEffect } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import theme from './theme';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OnlineAdvice from './pages/OnlineAdvice';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import Specializations from './pages/Specializations';
import CookieBanner from './components/CookieBanner';
import Navbar from './components/Navbar';
import Price from './pages/PriceList';
import Rodo from './pages/Rodo';
import NotaPrawna from './pages/NotaPrawna';
import Seo from './seo/Seo';
import { Link } from 'react-router-dom';
import { PATHS } from './seo/routes';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <ScrollToTop />
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

function NotFound() {
  return (
    <Box sx={{ py: 12, px: 2, textAlign: 'center' }}>
      <Seo title="Nie znaleziono strony" description="Nie znaleziono strony." path="/404" noindex />
      <Typography variant="h2" component="h1" sx={{ mb: 2 }}>Nie znaleziono strony</Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>Adres, który otworzyłeś, nie istnieje lub został zmieniony.</Typography>
      <Button component={Link} to={PATHS.home} variant="outlined" color="secondary">Wróć na stronę główną</Button>
    </Box>
  );
}

export function AppRoutes() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATHS.home} element={<Home />} />
          <Route path={PATHS.about} element={<About />} />
          <Route path={PATHS.specializations} element={<Specializations />} />
          <Route path={PATHS.price} element={<Price />} />
          <Route path={PATHS.online} element={<OnlineAdvice />} />
          <Route path={PATHS.blog} element={<Blog />} />
          <Route path={`${PATHS.blog}/:slug`} element={<Blog />} />
          <Route path={PATHS.rodo} element={<Rodo />} />
          <Route path={PATHS.notaPrawna} element={<NotaPrawna />} />
          <Route
            path={PATHS.admin}
            element={
              <>
                <Seo title="Panel administracyjny" description="Panel administracyjny" path={PATHS.admin} noindex />
                <Admin />
              </>
            }
          />
          <Route path="/rodo" element={<Navigate to={PATHS.rodo} replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <CookieBanner />
    </ThemeProvider>
  );
}

export default AppRoutes;
