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
          Radca Prawny — Twój zaufany doradca
        </Typography>

        <Grid container spacing={6} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Card sx={{ height: '100%', bgcolor: 'primary.main', color: 'common.white' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ color: 'secondary.main', mb: 2 }}>
                  Radca Prawny Katarzyna Adamus-Mielniczuk.
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                  Radca Prawny nr wpisu WŁ-1118
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Wydział Prawa i Administracji Uniwersytetu Śląskiego 
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
                    Jestem absolwentką Wydziału Prawa i Administracji Uniwersytetu Śląskiego, gdzie ukończyłam studia na kierunku prawo. Pracę magisterską przygotowałam i obroniłam w Katedrze Postępowania Karnego, pod kierunkiem prof. Jarosława Zagrodnika, uznanego specjalisty w dziedzinie postępowania karnego. Aplikację radcowską odbyłam w Okręgowej Izbie Radców Prawnych w Wałbrzychu
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <WorkIcon sx={{ color: 'secondary.main', fontSize: 32, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6">Praktyka zawodowa</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Doświadczenie zawodowe zdobywałam przez kilka lat, pracując jako aplikant radcowski w kancelariach prawnych, gdzie zajmowałam się obsługą prawną klientów indywidualnych oraz biznesowych w szerokim spektrum spraw – od prawa cywilnego, przez prawo karne, administracyjne i gospodarcze, po prawo rodzinne, spadkowe, prawo pracy, prawo budowlane oraz sprawy dotyczące nieruchomości i upadłości konsumenckiej. Ta różnorodność doświadczeń pozwala mi kompleksowo spojrzeć na problem klienta i dobrać rozwiązanie realnie dostosowane do jego sytuacji..
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
              W swojej pracy kieruję się zasadami rzetelności, dyskrecji i pełnego zaangażowania w powierzone sprawy. Zależy mi na tym, aby klient na każdym etapie wiedział, na czym stoi, jakie ma możliwości i jakich efektów może się spodziewać – dlatego stawiam na przejrzystą komunikację i osobiste zaangażowanie, niezależnie od tego, czy sprawa dotyczy skomplikowanego sporu gospodarczego, czy trudnej sytuacji rodzinnej lub spadkowej.
Kancelaria oferuje pomoc prawną między innymi w zakresie prawa cywilnego (w tym umów, zobowiązań, odpowiedzialności cywilnej i dochodzenia roszczeń), prawa karnego (obrony oraz reprezentacji pokrzywdzonych), prawa rodzinnego oraz spadkowego, a także prawa administracyjnego, prawa gospodarczego, prawa pracy, prawa budowlanego oraz spraw dotyczących nieruchomości i upadłości konsumenckiej.
Choć Kancelaria działa pod moim osobistym nadzorem, w praktyce nie jestem sama – w sprawach bardziej złożonych czy wymagających dodatkowych kompetencji stale współpracuję ze sprawdzoną siecią radców prawnych i adwokatów, dzięki czemu klienci zyskują dostęp do szerszego zaplecza wiedzy i doświadczenia niż mogłoby się wydawać na pierwszy rzut oka.
Każdą sprawę traktuję indywidualnie i z pełnym zaangażowaniem – zapraszam do kontaktu.

            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
