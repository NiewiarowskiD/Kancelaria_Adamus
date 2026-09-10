import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BalanceIcon from '@mui/icons-material/Balance';
import type { PageKey } from '../lib/supabase';

interface FooterProps {
  onNavigate: (page: PageKey) => void;
}

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
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src="/logo-proposal-3.svg"
              alt="Kancelaria Radcy Prawnego"
              sx={{ height: { xs: 92, md: 134 }, width: 'auto', display: 'block' }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ color: 'secondary.main', mb: 2 }}>
              Kontakt
            </Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  +48 600 123 456
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  kancelaria@prawo.pl
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <LocationOnIcon sx={{ color: 'secondary.main', fontSize: 20, mt: 0.2 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  ul. Marszałkowska 10/15<br />00-001 Warszawa
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ color: 'secondary.main', mb: 2 }}>
              Godziny pracy
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <AccessTimeIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  Pon-Pt: 9:00 - 18:00
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', pl: 4.5 }}>
                Sob: 10:00 - 14:00
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', pl: 4.5 }}>
                Nd: nieczynne
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{
                color: 'secondary.main',
                cursor: 'pointer',
                mt: 2,
                '&:hover': { textDecoration: 'underline' },
              }}
              onClick={() => onNavigate('admin')}
            >
              Panel administracyjny
            </Typography>
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
