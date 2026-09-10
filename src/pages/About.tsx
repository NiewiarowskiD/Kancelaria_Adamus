import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function About() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em' }}>
          O Kancelarii
        </Typography>
        <Typography variant="h2" sx={{ mt: 1, mb: 4 }}>
          Radca Prawny — Twoja zaufana doradczyni
        </Typography>

        <Grid container spacing={6} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Card sx={{ height: '100%', bgcolor: 'primary.main', color: 'common.white' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ color: 'secondary.main', mb: 2 }}>
                  Magister Anna Kowalska
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                  Radca Prawny nr wpisu WA-12345
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Jestem radcą prawnym z wieloletnim doświadczeniem w obsłudze prawnej
                  osób fizycznych i przedsiębiorców. Ukończyłam prawo na Uniwersytecie
                  Warszawskim z wyróżnieniem. Specjalizuję się w prawie cywilnym,
                  rodzinnym oraz gospodarczym.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Doświadczenie i kwalifikacje
            </Typography>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <SchoolIcon sx={{ color: 'secondary.main', fontSize: 32, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6">Wykształcenie</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Uniwersytet Warszawski, Wydział Prawa i Administracji (2008-2013).
                    Aplikacja radcowska zakończona egzaminem zawodowym w 2016 roku.
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <WorkIcon sx={{ color: 'secondary.main', fontSize: 32, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6">Praktyka zawodowa</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Ponad 10 lat doświadczenia w obsłudze prawnej kancelarii, spółek
                    handlowych oraz klientów indywidualnych. Współpraca z organizacjami
                    pozarządowymi w zakresie doradztwa pro bono.
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <EmojiEventsIcon sx={{ color: 'secondary.main', fontSize: 32, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6">Specjalizacje</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Prawo cywilne, prawo rodzinne i opiekuńcze, prawo gospodarcze,
                    prawo pracy oraz sporządzanie i analiza umów. Reprezentacja
                    przed sądami wszystkich instancji.
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Card sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', p: { xs: 3, md: 5 } }}>
          <CardContent>
            <Typography variant="h4" sx={{ mb: 3, color: 'secondary.dark' }}>
              Prawo, które działa dla Ciebie
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Kancelaria Radcy Prawnego Katarzyna Adamus-Mielniczuk to miejsce, w którym trudne sprawy prawne zamieniają się w jasne, praktyczne rozwiązania. Łączymy rzetelną wiedzę prawniczą z indywidualnym podejściem do każdego klienta — bo za każdą sprawą stoi konkretny człowiek lub firma, a nie tylko paragraf.
Świadczymy kompleksową pomoc prawną osobom fizycznym i przedsiębiorcom, reprezentując ich interesy zarówno w negocjacjach, jak i przed sądem. Naszym celem nie jest samo "prowadzenie sprawy" — jest nim realne zabezpieczenie interesów klienta i doprowadzenie do najlepszego możliwego rezultatu.

            </Typography>
                       <Typography variant="h4" sx={{ mb: 3, color: 'secondary.dark' }}>
              Filozofia, która nas prowadzi
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              „Ius est ars boni et aequi” — prawo jest sztuką tego, co dobre i słuszne. Ta znana rzymska paremia przypomina, że celem prawa nie jest ślepe stosowanie przepisów, lecz dążenie do sprawiedliwości. Właśnie dlatego traktujemy nasz zawód nie jako rzemiosło operujące paragrafami, ale jako powołanie do interpretowania prawa z poszanowaniem ludzkiej `godności i moralności — zawsze mając na uwadze konkretnego człowieka, który zwrócił się do nas o pomoc.
Bliska jest nam także zasada sformułowana przez rzymskiego jurystę Iuliusa Paulusa: „Nemo enim in persequendo deteriorem causam, sed meliorem facit” — dochodzenie sprawy przed sądem nie może pogorszyć, lecz jedynie polepszyć sytuację powoda (Iulius Paulus, Quaestiones, Księga XIII, III w. n.e.). To zasada, którą kierujemy się w praktyce: każda decyzja o wejściu na drogę sądową musi realnie służyć interesowi klienta, a nie generować dodatkowe ryzyko bez uzasadnionej korzyści. Zanim zarekomendujemy proces, rzetelnie ocenimy szanse i możliwe konsekwencje — tak, by droga prawna była dla klienta krokiem naprzód, a nie w tył.

            </Typography>
            <Typography variant="h4" sx={{ mb: 3, color: 'secondary.dark' }}>
              Czym się zajmujemy:
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              „Ius est ars boni et aequi” — prawo jest sztuką tego, co dobre i słuszne. Ta znana rzymska paremia przypomina, że celem prawa nie jest ślepe stosowanie przepisów, lecz dążenie do sprawiedliwości. Właśnie dlatego traktujemy nasz zawód nie jako rzemiosło operujące paragrafami, ale jako powołanie do interpretowania prawa z poszanowaniem ludzkiej `godności i moralności — zawsze mając na uwadze konkretnego człowieka, który zwrócił się do nas o pomoc.
Bliska jest nam także zasada sformułowana przez rzymskiego jurystę Iuliusa Paulusa: „Nemo enim in persequendo deteriorem causam, sed meliorem facit” — dochodzenie sprawy przed sądem nie może pogorszyć, lecz jedynie polepszyć sytuację powoda (Iulius Paulus, Quaestiones, Księga XIII, III w. n.e.). To zasada, którą kierujemy się w praktyce: każda decyzja o wejściu na drogę sądową musi realnie służyć interesowi klienta, a nie generować dodatkowe ryzyko bez uzasadnionej korzyści. Zanim zarekomendujemy proces, rzetelnie ocenimy szanse i możliwe konsekwencje — tak, by droga prawna była dla klienta krokiem naprzód, a nie w tył.

            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
