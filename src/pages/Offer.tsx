import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import BusinessIcon from '@mui/icons-material/Business';
import GavelIcon from '@mui/icons-material/Gavel';
import WorkIcon from '@mui/icons-material/Work';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BalanceIcon from '@mui/icons-material/Balance';
import type { PageKey } from '../lib/supabase';

interface OfferProps {
  onNavigate: (page: PageKey) => void;
}

const services = [
  { icon: <FamilyRestroomIcon sx={{ fontSize: 36, color: 'secondary.main' }} />, title: 'Prawo rodzinne', desc: 'Rozwody, separacje, alimenty, podział majątku, opieka nad dziećmi.' },
  { icon: <BusinessIcon sx={{ fontSize: 36, color: 'secondary.main' }} />, title: 'Prawo gospodarcze', desc: 'Zakładanie i obsługa spółek, umowy handlowe, rejestracja działalności.' },
  { icon: <GavelIcon sx={{ fontSize: 36, color: 'secondary.main' }} />, title: 'Prawo cywilne', desc: 'Odszkodowania, spadki, zniesienie współwłasności, ochrona dóbr osobistych.' },
  { icon: <WorkIcon sx={{ fontSize: 36, color: 'secondary.main' }} />, title: 'Prawo pracy', desc: 'Umowy o pracę, zwolnienia, mobbing, sporządzanie regulaminów pracowniczych.' },
  { icon: <HomeWorkIcon sx={{ fontSize: 36, color: 'secondary.main' }} />, title: 'Prawo nieruchomości', desc: 'Transakcje kupna-sprzedaży, najem, dzierżawa, współwłasność, służebności.' },
  { icon: <BalanceIcon sx={{ fontSize: 36, color: 'secondary.main' }} />, title: 'Reprezentacja w sądzie', desc: 'Pełna reprezentacja procesowa przed sądami wszystkich instancji.' },
];

export default function Offer({ onNavigate }: OfferProps) {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em' }}>
            OFERTA
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Zakres usług prawnych
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 700, mx: 'auto' }}>
            Oferujemy szeroki zakres usług prawnych dostosowanych do indywidualnych
            potrzeb każdego klienta. Poniżej przedstawiamy główne obszary naszej działalności.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: '100%', border: '1px solid', borderColor: 'divider', '&:hover': { borderColor: 'secondary.main', boxShadow: '0 8px 30px rgba(197,165,114,0.15)' }, transition: 'all 0.3s ease' }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 2 }}>{service.icon}</Box>
                  <Typography variant="h5" sx={{ mb: 1.5 }}>{service.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {service.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: { xs: 6, md: 10 }, textAlign: 'center' }}>
          <Card sx={{ bgcolor: 'primary.main', color: 'common.white', py: { xs: 5, md: 7 }, px: { xs: 3, md: 5 } }}>
            <CardContent>
              <Typography variant="h3" sx={{ color: 'secondary.main', mb: 2 }}>
                Nie znalazłeś swojej sprawy?
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4 }}>
                Skontaktuj się z nami — chętnie odpowiemy na każde pytanie i pomożemy
                znaleźć najlepsze rozwiązanie prawne.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onNavigate('online')}
                  sx={{ color: 'primary.main', fontWeight: 600 }}
                >
                  Umów konsultację online
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => onNavigate('blog')}
                  sx={{ color: 'secondary.main', borderColor: 'secondary.main' }}
                >
                  Przeczytaj bloga
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
