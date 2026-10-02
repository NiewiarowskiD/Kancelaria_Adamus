import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import GavelIcon from '@mui/icons-material/Gavel';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import { legalServiceLd } from '../seo/jsonld';
import { PAGE_META, PATHS } from '../seo/routes';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BalanceIcon from '@mui/icons-material/Balance';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';

const services = [
  {
    icon: <GavelIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
    title: 'Prawo cywilne',
    desc: 'W zakresie prawa cywilnego pomagamy w sprawach dotyczących umów i ich wad, dochodzenia roszczeń i odszkodowań, odpowiedzialności cywilnej oraz spraw mieszkaniowych i dotyczących nieruchomości. Zajmujemy się również sporami z zakresu prawa budowlanego pomiędzy inwestorem a wykonawcą — w tym dotyczącymi wad wykonawczych, opóźnień w realizacji inwestycji, rozliczenia wynagrodzenia oraz kar umownych. Reprezentujemy klientów zarówno na etapie negocjacji, jak i w postępowaniu sądowym i egzekucyjnym.',
  },
  {
    icon: <BalanceIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
    title: 'Prawo karne',
    desc: 'Prawo karne to jeden z filarów naszej praktyki. Działamy dwutorowo — bronimy osób oskarżonych oraz reprezentujemy osoby pokrzywdzone przestępstwem — zawsze z pełnym zaangażowaniem i dyskrecją. Wiemy, jak duże znaczenie ma czas w sprawach karnych, dlatego zapewniamy szybki kontakt i wsparcie już od pierwszych czynności z udziałem organów ścigania.',
  },
  {
    icon: <FamilyRestroomIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
    title: 'Prawo rodzinne',
    desc: 'W zakresie prawa rodzinnego wspieramy klientów w sprawach o rozwód i separację, podział majątku wspólnego, alimenty, władzę rodzicielską oraz kontakty z dziećmi. Do każdej sprawy podchodzimy z wyczuciem sytuacji rodzinnej, dbając zarówno o skuteczność działań prawnych, jak i o dobro najbliższych osób, których sprawa dotyczy.',
  },
  {
    icon: <HomeWorkIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
    title: 'Prawo spadkowe',
    desc: 'W zakresie prawa spadkowego pomagamy w sprawach o stwierdzenie nabycia spadku i dział spadku, doradzamy przy sporządzaniu testamentów, prowadzimy sprawy o zachowek oraz reprezentujemy klientów w sporach między spadkobiercami. Zapewniamy wsparcie zarówno na etapie planowania sukcesji majątku, jak i w toku już toczącego się postępowania spadkowego.',
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
    title: 'Prawo gospodarcze',
    desc: 'W zakresie prawa gospodarczego wspieramy przedsiębiorców w bieżącej obsłudze prawnej firmy, przygotowywaniu i negocjowaniu umów handlowych, a także w rozwiązywaniu sporów korporacyjnych i biznesowych — zarówno na drodze polubownej, jak i sądowej.',
  },
  {
    icon: <WorkIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
    title: 'Prawo pracy',
    desc: 'W zakresie prawa pracy doradzamy zarówno pracownikom, jak i pracodawcom — w sprawach dotyczących nawiązania i rozwiązania stosunku pracy, w tym zwolnień dyscyplinarnych i grupowych, mobbingu oraz dyskryminacji w miejscu pracy, dochodzenia zaległego wynagrodzenia, a także sporządzania i opiniowania umów o pracę, kontraktów menedżerskich i umów o zakazie konkurencji. Reprezentujemy klientów zarówno w postępowaniach przed sądem pracy, jak i na etapie negocjacji oraz mediacji.',
  },
  {
    icon: <AccountBalanceWallet sx={{ fontSize: 36, color: 'secondary.main' }} />,
    title: 'Upadłość konsumencka',
    desc: 'W zakresie upadłości konsumenckiej pomagamy osobom fizycznym nieprowadzącym działalności gospodarczej w przygotowaniu i złożeniu wniosku o ogłoszenie upadłości, reprezentujemy klientów w toku całego postępowania upadłościowego oraz doradzamy przy ustalaniu planu spłaty wierzycieli. Naszym celem jest pomoc osobom znajdującym się w trudnej sytuacji finansowej w skutecznym wyjściu z zadłużenia i odzyskaniu stabilności finansowej.',
  },
];

export default function Home() {
  return (
    <Box>
      <Seo {...PAGE_META['/']} path="/" jsonLd={legalServiceLd} />
      <Carousel />

      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto', textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em' }}>
            Kancelaria Radcy Prawnego Katarzyna Adamus-Mielniczuk
          </Typography>
          <Typography variant="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            Radca prawny Legnica i Dolny Śląsk – Kancelaria Katarzyna Adamus-Mielniczuk
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 3, color: 'secondary.dark' }}>
            Twoje prawa w dobrych rękach
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 700, mx: 'auto' }}
          >
            Kancelaria Radcy Prawnego Katarzyna Adamus-Mielniczuk to miejsce, w którym złożone
            zagadnienia prawne zamieniają się w jasne i praktyczne rozwiązania. Łączymy rzetelną
            wiedzę prawniczą, znajomość aktualnego orzecznictwa i doświadczenie procesowe z
            indywidualnym podejściem do każdego Klienta. Wiemy, że za każdą sprawą stoi konkretny
            człowiek lub przedsiębiorstwo, a nie tylko przepis prawa. Rozumiemy, że decyzja o
            skorzystaniu z profesjonalnej pomocy prawnej często zapada w trudnym momencie. Może to
            być spór z kontrahentem, sprawa rodzinna lub spadkowa, a także postępowanie karne, w
            którym stawką jest dobre imię, wolność lub przyszłość zawodowa. Punktem wyjścia naszych
            działań jest zawsze wnikliwe poznanie sytuacji Klienta, jego potrzeb i oczekiwań.
            Dopiero na tej podstawie formułujemy propozycje rozwiązań prawnych. Każde powierzone nam
            zlecenie prowadzimy z pełnym zaangażowaniem, empatią i zrozumieniem. Naszym celem nie
            jest samo „prowadzenie sprawy”. Chodzi nam o realne zabezpieczenie praw i interesów
            Klienta oraz doprowadzenie sprawy do najkorzystniejszego rozstrzygnięcia, jakie jest
            możliwe w danych okolicznościach.
          </Typography>
          <Typography variant="h3" sx={{ mt: 1, mb: 3, margin: 3 }}>
            Obszar działania – województwo dolnośląskie
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 700, mx: 'auto' }}
          >
            Kancelaria świadczy pomoc prawną na rzecz Klientów z terenu całego województwa
            dolnośląskiego, w tym m.in. z Legnicy, Wrocławia, Wałbrzycha, Jeleniej Góry, Lubina,
            Głogowa, Świdnicy, Bolesławca, Złotoryi, Jawora, Chojnowa i Polkowic oraz okolicznych
            miejscowości.
          </Typography>
          <Typography variant="h3" sx={{ mt: 1, mb: 3, margin: 3 }}>
            E-porada – pomoc prawna online
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 700, mx: 'auto' }}
          >
            Kancelaria świadczy pomoc prawną nie tylko w formie bezpośredniego spotkania z Klientem,
            lecz także w formie porad prawnych online, tzw. e-porad. E-porada stanowi
            pełnowartościową formę świadczenia pomocy prawnej, tożsamą co do zakresu, staranności i
            standardów wykonywania zawodu z poradą udzielaną stacjonarnie – różni się wyłącznie
            sposobem komunikacji, realizowanej z wykorzystaniem środków porozumiewania się na
            odległość, w szczególności telefonu, poczty elektronicznej lub wideokonferencji.
            Udzielając e-porady, radca prawny w taki sam sposób analizuje przedłożone dokumenty,
            ustala stan faktyczny i prawny sprawy oraz przedstawia Klientowi możliwe rozwiązania i
            związane z nimi ryzyka. Informacje przekazane w ramach e-porady objęte są tajemnicą
            zawodową radcy prawnego na tych samych zasadach, co w przypadku porady stacjonarnej.
            E-porada pozwala uzyskać profesjonalną pomoc prawną bez konieczności osobistego
            stawiennictwa, niezależnie od miejsca zamieszkania lub siedziby Klienta.
          </Typography>
        </Box>

        <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
          <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
            <Grid container spacing={4} justifyContent="center">
              {services.map((service, i) => (
                <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card
                    sx={{
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:hover': {
                        borderColor: 'secondary.main',
                        boxShadow: '0 8px 30px rgba(197,165,114,0.15)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ mb: 2, textAlign: 'center' }}>{service.icon}</Box>
                      <Typography align="center" variant="h5" sx={{ mb: 1.5 }}>
                        {service.title}
                      </Typography>
                      <Typography align="justify" variant="body2" sx={{ color: 'text.secondary' }}>
                        {service.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <Box sx={{ maxWidth: 1200, mx: 'auto', textAlign: 'center', mt: 10, mb: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>
            Dlaczego warto nam zaufać?
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 700, mx: 'auto' }}
          >
            Każdą sprawę traktujemy indywidualnie — bez gotowych szablonów i schematycznych
            odpowiedzi. Mówimy zrozumiałym językiem, tłumacząc zawiłości prawne w sposób jasny i
            praktyczny, tak by klient na każdym etapie wiedział, na czym stoi i jakie ma opcje.
            Stawiamy na rzetelność, dyskrecję i pełne zaangażowanie w powierzone sprawy —
            niezależnie od tego, czy chodzi o spór wart kilka tysięcy złotych, czy skomplikowaną
            sprawę gospodarczą.
          </Typography>
        </Box>

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
    </Box>
  );
}
