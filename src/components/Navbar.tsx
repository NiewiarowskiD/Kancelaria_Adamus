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
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import type { PageKey } from '../lib/supabase';

interface NavbarProps {
  currentPage: PageKey;
  onNavigate: (page: PageKey) => void;
}

const navFont = 'Georgia, "Times New Roman", serif';

const navItems: { key: PageKey; label: string }[] = [
  { key: 'home', label: 'Strona Główna' },
  { key: 'about', label: 'O Kancelarii' },
  { key: 'offer', label: 'Oferta' },
  { key: 'specializations', label: 'Specjalizacje' },
  { key: 'online', label: 'Porady online' },
  { key: 'blog', label: 'Blog' },
];

const specializationList = [
  { label: 'Prawo cywilne', id: 'spec-0' },
  { label: 'Prawo karne', id: 'spec-1' },
  { label: 'Prawo rodzinne', id: 'spec-2' },
  { label: 'Prawo spadkowe', id: 'spec-3' },
  { label: 'Prawo gospodarcze', id: 'spec-4' },
  { label: 'Prawo pracy', id: 'spec-5' },
  { label: 'Upadłość konsumencka', id: 'spec-6' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSpecOpen, setMobileSpecOpen] = useState(false);

  const handleNavigate = (page: PageKey) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  const handleSpecClick = (id: string) => {
    onNavigate('specializations');
    setMobileOpen(false);

    setTimeout(() => {
      if (window.location.hash === `#${id}`) {
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      } else {
        window.location.hash = id;
      }
    }, 150);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: 'primary.main',
          borderBottom: '2px solid',
          borderColor: 'secondary.main',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
  sx={{
    py: 1,
    width: '100%',
    maxWidth: 1400,
    mx: 'auto',
    px: { xs: 2, md: 4, lg: 6 },
  }}>
          <Box
            sx={{ flex: 1, display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => handleNavigate('home')}
          >
            <Box
              component="img"
              src="/logo-proposal-3.svg"
              alt="Kancelaria Radcy Prawnego"
              sx={{ height: { xs: 92, md: 90, lg: 134 }, width: 'auto', maxWidth: '100%', display: 'block' }}
            />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {navItems.map((item) => (
              <Box
                key={item.key}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover .dropdown-menu': {
                    opacity: 1,
                    visibility: 'visible',
                    transform: 'translateY(0)',
                    pointerEvents: 'auto',
                  },
                }}
              >
                <Button
                  onClick={() => handleNavigate(item.key)}
                  sx={{
                    fontFamily: navFont,
                    color: currentPage === item.key ? 'secondary.main' : 'common.white',
                    fontWeight: currentPage === item.key ? 600 : 400,
                    borderBottom: currentPage === item.key ? '2px solid' : '2px solid transparent',
                    borderColor: 'secondary.main',
                    borderRadius: 0,
                    px: 2,
                    height: '100%',
                    '&:hover': {
                      color: 'secondary.main',
                      backgroundColor: 'rgba(197,165,114,0.08)',
                    },
                  }}
                >
                  {item.label}
                </Button>

                {item.key === 'specializations' && (
                  <Box
                    className="dropdown-menu"
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      pt: 1,
                      minWidth: 240,
                      opacity: 0,
                      visibility: 'hidden',
                      transform: 'translateY(10px)',
                      transition: 'all 0.3s ease',
                      pointerEvents: 'none',
                      zIndex: 1200,
                    }}
                  >
                    <Paper
                      elevation={8}
                      sx={{
                        bgcolor: 'primary.main',
                        border: '1px solid',
                        borderColor: 'secondary.main',
                        borderRadius: 1,
                        overflow: 'hidden',
                        py: 1,
                      }}
                    >
                      {specializationList.map((spec) => (
                        <MenuItem
                          key={spec.id}
                          onClick={() => handleSpecClick(spec.id)}
                          sx={{
                            color: 'common.white',
                            typography: 'body2',
                            fontFamily: navFont,
                            py: 1.5,
                            px: 3,
                            '&:hover': {
                              bgcolor: 'rgba(197,165,114,0.15)',
                              color: 'secondary.main',
                            },
                          }}
                        >
                          {spec.label}
                        </MenuItem>
                      ))}
                    </Paper>
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Box
              component="img"
              src="/logo_KIRP_noback.svg"
              alt="Krajowa Izba Radców Prawnych"
              sx={{ display: { xs: 'none', md: 'block',  alignItems: 'center', justifyContent: 'center' }, height: 80, width: 'auto', maxWidth: '100%',  alignItems: 'center', }}
            />
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: 'secondary.main' }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        anchor="right"
        PaperProps={{ sx: { width: 280, bgcolor: 'primary.main' } }}
      >
        <List sx={{ mt: 2 }}>
          {navItems.map((item) => {
            if (item.key === 'specializations') {
              return (
                <Box key={item.key}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => setMobileSpecOpen(!mobileSpecOpen)}
                      sx={{
                        color: currentPage === item.key ? 'secondary.main' : 'common.white',
                        borderLeft: currentPage === item.key ? '4px solid' : '4px solid transparent',
                        borderColor: 'secondary.main',
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{ sx: { fontFamily: navFont } }}
                      />
                      {mobileSpecOpen ? (
                        <ExpandLess sx={{ color: 'secondary.main' }} />
                      ) : (
                        <ExpandMore sx={{ color: 'common.white' }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={mobileSpecOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {specializationList.map((spec) => (
                        <ListItemButton
                          key={spec.id}
                          sx={{ pl: 4 }}
                          onClick={() => handleSpecClick(spec.id)}
                        >
                          <ListItemText
                            primary={spec.label}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'rgba(255,255,255,0.7)',
                              sx: { fontFamily: navFont },
                            }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              );
            }

            return (
              <ListItem key={item.key} disablePadding>
                <ListItemButton
                  onClick={() => handleNavigate(item.key)}
                  sx={{
                    color: currentPage === item.key ? 'secondary.main' : 'common.white',
                    borderLeft: currentPage === item.key ? '4px solid' : '4px solid transparent',
                    borderColor: 'secondary.main',
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ sx: { fontFamily: navFont } }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}