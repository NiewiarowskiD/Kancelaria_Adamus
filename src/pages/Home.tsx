import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Carousel from '../components/Carousel';
import type { PageKey } from '../lib/supabase';

interface HomeProps {
  onNavigate: (page: PageKey) => void;
}

const features = [
  { icon: <GavelIcon sx={{ fontSize: 40, color: 'secondary.main' }} />, title: 'Doświadczenie', text: 'Wieloletnia praktyka w różnych dziedzinach prawa gwarantuje najwyższą jakość usług.' },
  { icon: <SecurityIcon sx={{ fontSize: 40, color: 'secondary.main' }} />, title: 'Bezpieczeństwo', text: 'Pełna dyskrecja i ochrona danych osobowych w każdej prowadzonej sprawie.' },
  { icon: <VerifiedUserIcon sx={{ fontSize: 40, color: 'secondary.main' }} />, title: 'Rzetelność', text: 'Każda sprawa jest analizowana wnikliwie i przygotowywana z najwyższą starannością.' },
  { icon: <HandshakeIcon sx={{ fontSize: 40, color: 'secondary.main' }} />, title: 'Zaufanie', text: 'Budujemy długotrwałe relacje z klientami oparte na wzajemnym zaufaniu.' },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <Box>
      <Carousel />

      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto', textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em' }}>
            WITAMY W KANCELARII
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>
            Twoje prawa w dobrych rękach
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 700, mx: 'auto' }}>
            Rzetelna pomoc prawna dla osób i firm — od negocjacji po salę sądową. Łączymy fachową wiedzę z indywidualnym podejściem, by skutecznie chronić Twoje interesy na każdym etapie sprawy.
            do każdej sprawy.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Grid container spacing={4}>
            {features.map((feature, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card sx={{ height: '100%', textAlign: 'center', py: 4, px: 2, border: '1px solid', borderColor: 'divider' }}>
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <Typography variant="h5" sx={{ mb: 1.5 }}>{feature.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {feature.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ maxWidth: 900, mx: 'auto', mt: { xs: 6, md: 10 }, textAlign: 'center' }}>
          <Card sx={{ bgcolor: 'primary.main', color: 'common.white', py: { xs: 5, md: 7 }, px: { xs: 3, md: 5 } }}>
            <CardContent>
              <Typography variant="h3" sx={{ color: 'secondary.main', mb: 2 }}>
                Potrzebujesz pomocy prawnej?
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4 }}>
                Skontaktuj się z nami już dziś i umów się na konsultację.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onNavigate('offer')}
                  sx={{ color: 'primary.main', fontWeight: 600 }}
                >
                  Zobacz ofertę
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => onNavigate('online')}
                  sx={{ color: 'secondary.main', borderColor: 'secondary.main', '&:hover': { borderColor: 'secondary.light' } }}
                >
                  Porada online
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
