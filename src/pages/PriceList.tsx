import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import { PAGE_META, PATHS } from '../seo/routes';

export default function Price() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
      <Seo {...PAGE_META['/cennik']} path="/cennik" />
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography
          variant="overline"
          component="h1"
          sx={{ color: 'secondary.main', letterSpacing: '0.2em', display: 'block', mb: 2 }}
        >
          Cennik usług prawnych – radca prawny Legnica
        </Typography>

        <Card
          sx={{
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            p: { xs: 3, md: 5 },
          }}
        >
          <CardContent sx={{ '& .MuiTypography-root': { mb: 2 } }}>
            <Typography
              variant="h6"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              <strong>Koszt pierwszej porady prawnej jest stały i wynosi 300 zł</strong>, a
              wynagrodzenie za prowadzenie sprawy ustalamy indywidualnie, zawsze przed rozpoczęciem
              współpracy. Nie istnieje jeden uniwersalny cennik usług prawnych. Każda sprawa ma inny
              stopień skomplikowania i wymaga innego nakładu pracy, dlatego zamiast sztywnych stawek
              stawiamy na przejrzystość: o wysokości honorarium lub sposobie jego obliczenia
              informujemy Państwa na początku współpracy i dokładnie określamy je w pisemnej umowie.
              Dzięki temu od pierwszego spotkania wiedzą Państwo, z jakim kosztem się liczyć.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
            >
              Porada prawna – 300 zł
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Porada prawna kosztuje 300 zł, niezależnie od tego, czy odbywa się online, czy w
              biurze w Legnicy. Obie formy dają ten sam komfort i tę samą jakość pomocy, więc mogą
              Państwo wybrać tę, która jest wygodniejsza.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', fontWeight: 500, mt: 2, mb: 1 }}
            >
              Podczas porady:
            </Typography>
            <Box
              component="ul"
              sx={{ color: 'text.secondary', pl: 3, mb: 2, lineHeight: 1.8, '& li': { mb: 1 } }}
            >
              <li>
                dokładnie ustalamy, na czym polega Państwa problem, i analizujemy dokumenty, które
                Państwo przedstawią,
              </li>
              <li>wskazujemy możliwe ryzyka oraz dostępne rozwiązania,</li>
              <li>przedstawiamy rekomendowaną strategię i plan dalszych działań,</li>
              <li>informujemy o przewidywanym koszcie prowadzenia sprawy.</li>
            </Box>
            <Typography
              variant="body1"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Jeśli zdecydują się Państwo powierzyć nam prowadzenie sprawy, kwota zapłacona za
              poradę prawną zostaje zaliczona na poczet honorarium. W takim przypadku analiza sprawy
              nie stanowi dla Państwa dodatkowego kosztu.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Spotkania w biurze w Legnicy odbywają się po uprzednim umówieniu telefonicznym. Porady
              online przeprowadzamy w dogodnym dla Państwa terminie, a dokumenty można przesłać nam
              elektronicznie jeszcze przed konsultacją, co pozwala w pełni wykorzystać czas
              spotkania.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
            >
              Wynagrodzenie za prowadzenie sprawy
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Wysokość wynagrodzenia ustalamy w zależności od rodzaju sprawy, stopnia jej
              skomplikowania oraz przewidywanego nakładu pracy. Nawet dwie sprawy z pozoru podobne
              mogą wymagać zupełnie innego zaangażowania. Na przebieg postępowania wpływają m.in.
              liczba i rodzaj dowodów, stanowisko strony przeciwnej, konieczność powołania biegłych
              czy obciążenie danego sądu.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', fontWeight: 500, mt: 2, mb: 1 }}
            >
              Przy wycenie bierzemy pod uwagę w szczególności:
            </Typography>
            <Box
              component="ul"
              sx={{ color: 'text.secondary', pl: 3, mb: 2, lineHeight: 1.8, '& li': { mb: 1 } }}
            >
              <li>rodzaj i stopień skomplikowania sprawy oraz wymaganą wiedzę specjalistyczną,</li>
              <li>przewidywany czas pracy, w tym liczbę pism, rozpraw i innych czynności,</li>
              <li>wartość przedmiotu sporu oraz znaczenie sprawy dla Klienta,</li>
              <li>
                miejsce i termin wykonywania czynności, np. konieczność dojazdu do sądu poza
                Legnicą,
              </li>
              <li>pilność zlecenia.</li>
            </Box>
            <Typography
              variant="body1"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Pomocniczo korzystamy ze stawek minimalnych określonych w rozporządzeniu Ministra
              Sprawiedliwości w sprawie opłat za czynności radców prawnych. Stawki te służą przede
              wszystkim do ustalania kosztów zastępstwa procesowego, które sąd może zasądzić od
              strony przegrywającej, i nie stanowią cennika naszych usług. Ustalone z Państwem
              honorarium może więc być zarówno wyższe, jak i – w odpowiednio uzasadnionych
              przypadkach – zbliżone do tych stawek.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
            >
              Jak wygląda wycena
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500, mb: 1 }}>
              Wycena odbywa się w trzech krokach:
            </Typography>
            <Box
              component="ol"
              sx={{ color: 'text.secondary', pl: 3, mb: 2, lineHeight: 1.8, '& li': { mb: 1 } }}
            >
              <li>
                Podczas porady analizujemy stan faktyczny i prawny sprawy oraz oceniamy zakres
                niezbędnych czynności.
              </li>
              <li>
                Przedstawiamy propozycję wynagrodzenia wraz z wyjaśnieniem, co obejmuje i od czego
                zależy.
              </li>
              <li>
                Po Państwa akceptacji zawieramy umowę, w której zapisujemy zakres usługi oraz zasady
                rozliczeń.
              </li>
            </Box>
            <Typography
              variant="body1"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              W zależności od charakteru sprawy możemy zaproponować wynagrodzenie ryczałtowe,
              rozliczenie według stawki godzinowej lub rozliczenie etapami, np. odrębnie za sprawę w
              pierwszej instancji i ewentualne postępowanie odwoławcze. Ryczałt sprawdza się tam,
              gdzie nakład pracy można z góry oszacować, np. przy sporządzeniu pisma, analizie lub
              przygotowaniu umowy. W sprawach rozbudowanych lub trudnych do przewidzenia często
              wygodniejsze jest rozliczenie godzinowe albo połączenie obu form. Rozumiejąc, że
              koszty pomocy prawnej bywają istotnym obciążeniem, jesteśmy otwarci na rozmowę o
              rozłożeniu wynagrodzenia na raty.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
            >
              Czego nie obejmuje honorarium
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Honorarium to wynagrodzenie za pracę prawnika. Nie obejmuje ono opłat sądowych i
              skarbowych, kosztów opinii biegłych, kosztów postępowania egzekucyjnego ani innych
              wydatków związanych ze sprawą, które co do zasady ponosi Klient. Wszystkie te elementy
              omawiamy z Państwem z góry, aby nie zaskoczyły Państwa w trakcie sprawy. Kwoty
              wskazujemy w wysokości brutto, czyli z uwzględnieniem podatku VAT.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
            >
              Umów poradę
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 0 }}
            >
              Aby umówić poradę prawną w biurze w Legnicy lub online, prosimy o kontakt telefoniczny
              albo mailowy. Po krótkiej rozmowie wstępnej ustalimy dogodny termin i formę spotkania
              oraz wskażemy, jakie dokumenty warto przygotować.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* SEKCJA Z PRZYCISKAMI DO NAWIGACJI */}
      <Box sx={{ maxWidth: 900, mx: 'auto', mt: { xs: 6, md: 10 }, textAlign: 'center' }}>
        <Card
          sx={{
            bgcolor: 'primary.main',
            color: 'common.white',
            py: { xs: 5, md: 7 },
            px: { xs: 3, md: 5 },
          }}
        >
          <CardContent>
            <Typography variant="h3" sx={{ color: 'secondary.main', mb: 2 }}>
              Potrzebujesz pomocy prawnej?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4 }}>
              Skontaktuj się z nami już dziś i umów się na konsultację.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="outlined"
                component={Link}
                to={PATHS.online}
                sx={{
                  color: 'secondary.main',
                  borderColor: 'secondary.main',
                  '&:hover': { borderColor: 'secondary.light' },
                }}
              >
                Porada online
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
