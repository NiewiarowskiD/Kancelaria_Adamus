import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { PATHS, SPECIALIZATION_LABELS, SPECIALIZATION_SLUGS, specializationPath, type PageKey } from '../seo/routes';

const navFont = 'Georgia, "Times New Roman", serif';

const navItems: { key: PageKey; label: string }[] = [
  { key: 'home', label: 'Strona główna' },
  { key: 'about', label: 'O Kancelarii' },
  { key: 'specializations', label: 'Specjalizacje' },
  { key: 'price', label: 'Cennik' },
  { key: 'online', label: 'Porady online' },
  { key: 'blog', label: 'Blog' },
];

const specializationList = SPECIALIZATION_SLUGS.map((slug, i) => ({
  label: SPECIALIZATION_LABELS[i],
  to: specializationPath(slug),
}));

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSpecOpen, setMobileSpecOpen] = useState(false);

  const isActive = (key: PageKey) =>
    key === 'home' ? pathname === '/' : pathname === PATHS[key] || pathname.startsWith(`${PATHS[key]}/`);
  const closeMobile = () => setMobileOpen(false);

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
            maxWidth: 1980,
            mx: 'auto',
            px: { xs: 2, md: 4, lg: 6 },
            gap: '20px',
          }}
        >
          <Box
            component={Link}
            to={PATHS.home}
            aria-label="Kancelaria Radcy Prawnego Katarzyna Adamus-Mielniczuk – strona główna"
            sx={{ flexShrink: 0, display: 'flex', alignItems: 'center', cursor: 'pointer', my: -4, }}
          >
            <Box
              component="img"
              src="/logo-proposal-3.svg"
              alt="Kancelaria Radcy Prawnego Katarzyna Adamus-Mielniczuk"
              sx={{
                height: { xs: 70, md: 80, lg: 120, xl: 140 },
                width: 'auto',
                display: 'block',
              }}
            />
          </Box>

          {/* 2. Dane kontaktowe (od xl w górę) */}
          <Box sx={{ display: { xs: 'none', xl: 'flex' }, flexShrink: 0, paddingLeft: 15,  }}>
            <Stack direction="row" spacing={4}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                <Typography
                  variant="body2"
                  component="a"
                  href="tel:+48505810279"
                  sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  +48 505 810 279
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                <Typography
                  variant="body2"
                  component="a"
                  href="mailto:kancelaria@radcaprawnylegnica.com.pl"
                  sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  kancelaria@radcaprawnylegnica.com.pl
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flex: 1,
              flexShrink: 0,
              justifyContent: 'flex-end',
              gap: 0.5,
            }}
          >
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
                  component={Link}
                  to={PATHS[item.key]}
                  sx={{
                    fontFamily: navFont,
                    fontSize: { md: '0.8rem', lg: '0.875rem' },
                    whiteSpace: 'nowrap',
                    color: isActive(item.key) ? 'secondary.main' : 'common.white',
                    fontWeight: isActive(item.key) ? 600 : 400,
                    borderBottom: '2px solid',
                    borderColor: isActive(item.key) ? 'secondary.main' : 'transparent',
                    borderRadius: 0,
                    px: { md: 1, lg: 1.5 },
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
                          key={spec.to}
                          component={Link}
                          to={spec.to}
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

          <Box
            sx={{
              flexShrink: 0,
              ml: { xs: 'auto', md: 0 },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src="/logo_KIRP_noback.svg"
              alt="Krajowa Izba Radców Prawnych"
              sx={{ display: { xs: 'none', md: 'block' }, height: { md: 60, lg: 80 }, width: 'auto' }}
            />
            <IconButton
              aria-label="Otwórz menu"
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
                      component={Link}
                      to={PATHS.specializations}
                      onClick={closeMobile}
                      sx={{
                        color: isActive(item.key) ? 'secondary.main' : 'common.white',
                        borderLeft: isActive(item.key) ? '4px solid' : '4px solid transparent',
                        borderColor: 'secondary.main',
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{ sx: { fontFamily: navFont } }}
                      />
                    </ListItemButton>
                    <IconButton
                      aria-label="Rozwiń listę specjalizacji"
                      onClick={() => setMobileSpecOpen(!mobileSpecOpen)}
                      sx={{ mr: 1 }}
                    >
                      {mobileSpecOpen ? (
                        <ExpandLess sx={{ color: 'secondary.main' }} />
                      ) : (
                        <ExpandMore sx={{ color: 'common.white' }} />
                      )}
                    </IconButton>
                  </ListItem>
                  <Collapse in={mobileSpecOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {specializationList.map((spec) => (
                        <ListItemButton
                          key={spec.to}
                          component={Link}
                          to={spec.to}
                          sx={{ pl: 4 }}
                          onClick={closeMobile}
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
                  component={Link}
                  to={PATHS[item.key]}
                  onClick={closeMobile}
                  sx={{
                    color: isActive(item.key) ? 'secondary.main' : 'common.white',
                    borderLeft: isActive(item.key) ? '4px solid' : '4px solid transparent',
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
