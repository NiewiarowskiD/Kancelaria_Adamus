import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Offer from './pages/Offer';
import OnlineAdvice from './pages/OnlineAdvice';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import type { PageKey } from './lib/supabase';
import Specializations from './pages/Specializations';

function App() {
  const [page, setPage] = useState<PageKey>('home');

  const handleNavigate = (p: PageKey) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'offer':
        return <Offer onNavigate={handleNavigate} />;
        case 'specializations':
        return <Specializations />;
      case 'online':
        return <OnlineAdvice />;
      case 'blog':
        return <Blog />;
      case 'admin':
        return <Admin />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
        <Navbar currentPage={page} onNavigate={handleNavigate} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {renderPage()}
        </Box>
        <Footer onNavigate={handleNavigate} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
