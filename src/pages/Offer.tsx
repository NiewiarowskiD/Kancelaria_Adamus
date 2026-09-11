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
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';

interface OfferProps {
  onNavigate: (page: PageKey) => void;
}

const services = [
  { icon: <FamilyRestroomIcon sx={{ fontSize: 36, color: 'secondary.main' }} />, title: 'Prawo rodzinne', desc: 'W zakresie prawa rodzinnego wspieramy klientów w sprawach o rozwód i separację, podział majątku wspólnego, alimenty, władzę rodzicielską oraz kontakty z dziećmi. Do każdej sprawy podchodzimy z wyczuciem sytuacji rodzinnej, dbając zarówno o skuteczność działań prawnych, jak i o dobro najbliższych osób, których sprawa dotyczy.' },
  { icon: <BusinessIcon sx={{ fontSize: 36, color: 'secondary.main' }} />, title: 'Prawo gospodarcze', desc: 'W zakresie prawa gospodarczego wspieramy przedsiębiorców w bieżącej obsłudze prawnej firmy, przygotowywaniu i negocjowaniu umów handlowych, a także w rozwiązywaniu sporów korporacyjnych i biznesowych — zarówno na drodze polubownej, jak i sądowej.' },
  { icon: <GavelIcon sx={{ fontSize: 36, color: 'secondary.main' }} />, title: 'Prawo cywilne', desc: 'W zakresie prawa cywilnego pomagamy w sprawach dotyczących umów i ich wad, dochodzenia roszczeń i odszkodowań, odpowiedzialności cywilnej oraz spraw mieszkaniowych i dotyczących nieruchomości. Zajmujemy się również sporami z zakresu prawa budowlanego pomiędzy inwestorem a wykonawcą — w tym dotyczącymi wad wykonawczych, opóźnień w realizacji inwestycji, rozliczenia wynagrodzenia oraz kar umownych. Reprezentujemy klientów zarówno na etapie negocjacji, jak i w postępowaniu sądowym i egzekucyjnym.' },
  { icon: <WorkIcon sx={{ fontSize: 36, color: 'secondary.main' }} />, title: 'Prawo pracy', desc: 'W zakresie prawa pracy doradzamy zarówno pracownikom, jak i pracodawcom — w sprawach dotyczących nawiązania i rozwiązania stosunku pracy, w tym zwolnień dyscyplinarnych i grupowych, mobbingu oraz dyskryminacji w miejscu pracy, dochodzenia zaległego wynagrodzenia, a także sporządzania i opiniowania umów o pracę, kontraktów menedżerskich i umów o zakazie konkurencji. Reprezentujemy klientów zarówno w postępowaniach przed sądem pracy, jak i na etapie negocjacji oraz mediacji.' },
  { icon: <HomeWorkIcon sx={{ fontSize: 36, color: 'secondary.main' }} />, title: 'Prawo spadkowe', desc: 'W zakresie prawa spadkowego pomagamy w sprawach o stwierdzenie nabycia spadku i dział spadku, doradzamy przy sporządzaniu testamentów, prowadzimy sprawy o zachowek oraz reprezentujemy klientów w sporach między spadkobiercami. Zapewniamy wsparcie zarówno na etapie planowania sukcesji majątku, jak i w toku już toczącego się postępowania spadkowego.' },
  { icon: <AccountBalanceWallet sx={{ fontSize: 36, color: 'secondary.main' }} />, title: 'Upadłosć konsumencka', desc: 'W zakresie upadłości konsumenckiej pomagamy osobom fizycznym nieprowadzącym działalności gospodarczej w przygotowaniu i złożeniu wniosku o ogłoszenie upadłości, reprezentujemy klientów w toku całego postępowania upadłościowego oraz doradzamy przy ustalaniu planu spłaty wierzycieli. Naszym celem jest pomoc osobom znajdującym się w trudnej sytuacji finansowej w skutecznym wyjściu z zadłużenia i odzyskaniu stabilności finansowej.' },
  { icon: <BalanceIcon sx={{ fontSize: 36, color: 'secondary.main' }} />, title: 'Prawo karne', desc: 'Prawo karne to jeden z filarów naszej praktyki. Działamy dwutorowo — bronimy osób oskarżonych oraz reprezentujemy osoby pokrzywdzone przestępstwem — zawsze z pełnym zaangażowaniem i dyskrecją. Wiemy, jak duże znaczenie ma czas w sprawach karnych, dlatego zapewniamy szybki kontakt i wsparcie już od pierwszych czynności z udziałem organów ścigania.' },
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
                  <Box sx={{ mb: 2, textAlign: 'center' }}>{service.icon}</Box>
                  <Typography align='center' variant="h5" sx={{ mb: 1.5 }}>{service.title}</Typography>
                  <Typography align='center' variant="body2" sx={{ color: 'text.secondary' }}>
                    {service.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ maxWidth: 1200, mx: 'auto', textAlign: 'center', mt: 10,  mb: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>
            Dlaczego warto nam zaufać?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 700, mx: 'auto' }}>
            Każdą sprawę traktujemy indywidualnie — bez gotowych szablonów i schematycznych odpowiedzi. Mówimy zrozumiałym językiem, tłumacząc zawiłości prawne w sposób jasny i praktyczny, tak by klient na każdym etapie wiedział, na czym stoi i jakie ma opcje. Stawiamy na rzetelność, dyskrecję i pełne zaangażowanie w powierzone sprawy — niezależnie od tego, czy chodzi o spór wart kilka tysięcy złotych, czy skomplikowaną sprawę gospodarczą.
          </Typography>
        </Box>

        

        <Box sx={{ mt: { xs: 6, md: 10 }, textAlign: 'center' }}>
          <Card sx={{ bgcolor: 'primary.main', color: 'common.white', py: { xs: 5, md: 7 }, px: { xs: 3, md: 5 } }}>
            <CardContent>
              <Typography variant="h3" sx={{ color: 'secondary.main', mb: 2 }}>
                Nie znalazłeś swojej sprawy?
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4 }}>
                Niezależnie od tego, z jaką sprawą Państwo się do nas zwracają — nawet jeśli nie jest ona wprost wymieniona powyżej — zapraszamy do kontaktu. Zakres naszej praktyki stale się rozwija, a jeśli dana sprawa wykracza poza naszą bieżącą specjalizację, wskażemy właściwy kierunek działania lub zaufanego specjalistę. Pierwsza rozmowa pomoże ustalić, jak możemy pomóc i jakie kroki będą najbardziej skuteczne w Państwa sytuacji.
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
