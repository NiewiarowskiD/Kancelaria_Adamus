import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import type { PageKey } from '../lib/supabase';

interface NavbarProps {
  currentPage: PageKey;
  onNavigate: (page: PageKey) => void;
}

const navItems: { key: PageKey; label: string }[] = [
  { key: 'home', label: 'Strona Główna' },
  { key: 'about', label: 'O mnie' },
  { key: 'offer', label: 'Oferta' },
  { key: 'online', label: 'Porady online' },
  { key: 'blog', label: 'Blog' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (page: PageKey) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: 'primary.main',
          borderBottom: '2px solid',
          borderColor: 'secondary.main',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer' }}
            onClick={() => handleNavigate('home')}
          >
            <Box
              component="img"
              src="/logo-proposal-3.svg"
              alt="Kancelaria Radcy Prawnego"
              sx={{ height: { xs: 92, md: 134 }, width: 'auto', display: 'block' }}
            />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {navItems.map((item) => (
              <Button
                key={item.key}
                onClick={() => handleNavigate(item.key)}
                sx={{
                  color: currentPage === item.key ? 'secondary.main' : 'common.white',
                  fontWeight: currentPage === item.key ? 600 : 400,
                  borderBottom: currentPage === item.key ? '2px solid' : '2px solid transparent',
                  borderColor: 'secondary.main',
                  borderRadius: 0,
                  px: 2,
                  '&:hover': {
                    color: 'secondary.main',
                    backgroundColor: 'rgba(197,165,114,0.08)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'secondary.main' }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 260, bgcolor: 'primary.main' } }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.key} disablePadding>
              <ListItemButton
                onClick={() => handleNavigate(item.key)}
                sx={{
                  color: currentPage === item.key ? 'secondary.main' : 'common.white',
                  borderLeft: currentPage === item.key ? '4px solid' : '4px solid transparent',
                  borderColor: 'secondary.main',
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
