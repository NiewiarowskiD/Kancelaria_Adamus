import type React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import type { PageKey } from '../lib/supabase';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

interface FooterProps {
  onNavigate: (page: PageKey) => void;
}

const linkSx = {
  color: 'rgba(255,255,255,0.85)',
  textDecoration: 'none',
  '&:hover': { textDecoration: 'underline' },
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'common.white',
        borderTop: '3px solid',
        borderColor: 'secondary.main',
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        '& .MuiTypography-body2': { fontSize: '0.9rem' },
      }}
    >
      <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box
              component="img"
              src="/logo-proposal-3.svg"
              alt="Kancelaria Radcy Prawnego"
              sx={{ width: '100%', maxWidth: { xs: 320, md: '100%' }, height: 'auto', display: 'block' }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ color: 'secondary.main', mb: 2 }}>
              Kontakt
            </Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                <Typography
                  variant="body2"
                  component="a"
                  href="tel:+48505810279"
                  sx={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
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
                  sx={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  kancelaria@radcaprawnylegnica.com.pl
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <LocationOnIcon sx={{ color: 'secondary.main', fontSize: 20, mt: 0.2 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  Obszar działania: Legnica i całe województwo dolnośląskie<br />Porady prawne online (e-porada) dla Klientów z całej Polski
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ color: 'secondary.main', mb: 2 }}>
              Godziny pracy
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <AccessTimeIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  Pon.–pt.: 9:00–20:00
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', pl: 4.5 }}>
                Sob.: 10:00–16:00
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', pl: 4.5 }}>
                Nd.: nieczynne
              </Typography>
            </Stack>
          
            <Stack spacing={1} onClick={() => onNavigate('admin')}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <AdminPanelSettingsIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
              </Stack>
              </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ color: 'secondary.main', mb: 2 }}>
              Informacje
            </Typography>
            <Stack spacing={1.5}>
              <Typography variant="body2" component="a" href="/nota-prawna.pdf" target="_blank" rel="noopener noreferrer" sx={linkSx}>
                Nota prawna
              </Typography>
              <Typography variant="body2" component="a" href="#" onClick={(e: React.MouseEvent) => { e.preventDefault(); onNavigate('rodo'); }} sx={linkSx}>
                Polityka prywatności
              </Typography>
              <Typography variant="body2" component="a" href="/regulamin.pdf" target="_blank" rel="noopener noreferrer" sx={linkSx}>
                Regulamin serwisu i świadczenia porad prawnych online (e-porad)
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Box
              component="img"
              src="/logo_KIRP_noback.svg"
              alt="Krajowa Izba Radców Prawnych"
              sx={{ height: { xs: 83, md: 121 }, width: 'auto', display: 'block', marginTop: 2 }}
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            © {new Date().getFullYear()} Kancelaria Radcy Prawnego Katarzyna Adamus-Mielniczuk. Wszelkie prawa zastrzeżone.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
