import { useState } from 'react';
import DOMPurify from 'dompurify';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import BusinessIcon from '@mui/icons-material/Business';
import GavelIcon from '@mui/icons-material/Gavel';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import BalanceIcon from '@mui/icons-material/Balance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import type { SvgIconComponent } from '@mui/icons-material';
import { richTextStyles } from '../styles/richTextStyles';

interface Specialization {
  title: string;
  description: string; // HTML
  Icon: SvgIconComponent;
}

const specializations: Specialization[] = [
  {
    title: 'Prawo cywilne',
    Icon: GavelIcon,
    description: `
      <p>Prowadzimy sprawy dotyczące między innymi:</p>
      <ul>
        <li>umów i ich niewykonania lub nienależytego wykonania</li>
        <li>dochodzenia zapłaty i innych roszczeń majątkowych</li>
        <li>odszkodowań i zadośćuczynienia (odpowiedzialność cywilna kontraktowa i deliktowa)</li>
        <li>rękojmi i gwarancji przy wadach rzeczy sprzedanej</li>
        <li>naruszenia dóbr osobistych</li>
        <li>spraw mieszkaniowych i dotyczących nieruchomości, w tym eksmisji, zniesienia współwłasności, zasiedzenia oraz służebności</li>
        <li>sporów z zakresu prawa budowlanego pomiędzy inwestorem a wykonawcą — w tym dotyczących wad wykonawczych, opóźnień w realizacji inwestycji, rozliczenia wynagrodzenia oraz kar umownych</li>
        <li>najmu i dzierżawy — w tym zaległości czynszowych, wypowiedzenia umowy najmu oraz zwrotu lokalu</li>
        <li>ochrony posiadania i własności — roszczeń windykacyjnych i negatoryjnych oraz ochrony posesoryjnej</li>
        <li>bezpodstawnego wzbogacenia i nienależnego świadczenia</li>
        <li>ustalenia istnienia lub nieistnienia stosunku prawnego (powództwo o ustalenie, art. 189 k.p.c.)</li>
        <li>wad oświadczenia woli — uchylenia się od skutków umowy zawartej pod wpływem błędu, podstępu lub groźby</li>
        <li>odszkodowań komunikacyjnych, w tym roszczeń wobec ubezpieczycieli z tytułu OC sprawcy wypadku</li>
        <li>błędów medycznych</li>
        <li>spraw konsumenckich — w tym niedozwolonych klauzul umownych, odstąpienia od umowy, reklamacji oraz spraw dotyczących kredytów powiązanych z walutą obcą</li>
        <li>spraw dotyczących wspólnot i spółdzielni mieszkaniowych — w tym zaskarżania uchwał i rozliczeń</li>
        <li>rozliczenia majątku osób pozostających w nieformalnych związkach (konkubinat)</li>
        <li>postępowania egzekucyjnego i zabezpieczającego</li>
      </ul>
    `,
  },
  {
    title: 'Prawo karne',
    Icon: BalanceIcon,
    description: `
      <p>Zapewniamy obronę na każdym etapie postępowania — od pierwszego przesłuchania i ewentualnego tymczasowego aresztowania, przez postępowanie przygotowawcze, aż po rozprawę główną i środki odwoławcze. Bronimy klientów oskarżonych między innymi o:</p>
      <ul>
        <li>przestępstwa narkotykowe</li>
        <li>niealimentację</li>
        <li>bójkę i pobicie</li>
        <li>oszustwo</li>
        <li>kradzież</li>
        <li>zgwałcenie</li>
        <li>przestępstwa na tle seksualnym wobec małoletnich</li>
        <li>prowadzenie pojazdu pod wpływem alkoholu lub środków odurzających oraz spowodowanie wypadku pod wpływem takich środków</li>
        <li>inne przestępstwa drogowe</li>
        <li>przestępstwa gospodarcze</li>
      </ul>
    `,
  },
  {
    title: 'Reprezentacja pokrzywdzonych',
    Icon: VolunteerActivismIcon,
    description: `
      <p>Stajemy również po stronie osób pokrzywdzonych, pomagając im aktywnie uczestniczyć w postępowaniu — w tym w charakterze oskarżyciela posiłkowego — oraz dochodzić należnego zadośćuczynienia i odszkodowania. Reprezentujemy pokrzywdzonych w szczególności w sprawach dotyczących:</p>
      <ul>
        <li>stalkingu (uporczywego nękania)</li>
        <li>znęcania się nad osobą najbliższą lub osobą pozostającą w stosunku zależności</li>
        <li>zgwałcenia</li>
        <li>przestępstw na tle seksualnym wobec małoletnich</li>
        <li>niealimentacji</li>
        <li>bójki i pobicia</li>
        <li>wypadków drogowych spowodowanych przez sprawcę będącego pod wpływem alkoholu lub środków odurzających</li>
        <li>przestępstw gospodarczych na szkodę przedsiębiorcy lub spółki</li>
      </ul>
    `,
  },
  {
    title: 'Sprawy, które znamy najlepiej',
    Icon: WorkspacePremiumIcon,
    description: `
      <ul>
        <li><strong>Przestępstwa narkotykowe.</strong> Prowadzimy sprawy dotyczące posiadania, udzielania, wytwarzania i obrotu środkami odurzającymi lub substancjami psychotropowymi. Znamy niuanse kwalifikacji prawnej tych czynów — w tym różnicę między „wypadkiem mniejszej wagi” a przestępstwem podstawowym — co ma kluczowe znaczenie dla wymiaru odpowiedzialności.</li>
        <li><strong>Bójka i pobicie.</strong> Reprezentujemy zarówno osoby oskarżone o udział w bójce lub pobiciu, jak i osoby pokrzywdzone takim zdarzeniem, dochodząc dla nich odszkodowania i zadośćuczynienia za doznaną krzywdę.</li>
        <li><strong>Oszustwo.</strong> Prowadzimy sprawy dotyczące oszustw (art. 286 k.k.) — od jednostkowych przypadków po bardziej złożone schematy wyłudzeń — zarówno w obronie osób oskarżonych, jak i w interesie pokrzywdzonych dochodzących zwrotu utraconego mienia.</li>
        <li><strong>Kradzież.</strong> Zapewniamy obronę w sprawach o kradzież oraz kradzież z włamaniem, a także reprezentujemy pokrzywdzonych w dochodzeniu zwrotu mienia lub jego równowartości.</li>
        <li><strong>Przestępstwa na tle seksualnym.</strong> Sprawy dotyczące zgwałcenia oraz czynów na szkodę małoletnich wymagają szczególnej wrażliwości, dyskrecji i doświadczenia — zarówno przy obronie osoby oskarżonej, jak i przy reprezentacji pokrzywdzonego. Do każdej takiej sprawy podchodzimy z pełnym zrozumieniem jej ciężaru, dbając o godność i bezpieczeństwo naszego klienta na każdym etapie postępowania.</li>
        <li><strong>Prowadzenie pojazdu pod wpływem i wypadki drogowe.</strong> Reprezentujemy klientów w sprawach o prowadzenie pojazdu w stanie nietrzeźwości lub pod wpływem środków odurzających, a także w sprawach o spowodowanie wypadku pod wpływem takich środków. Doradzamy również w zakresie konsekwencji dodatkowych, takich jak zakaz prowadzenia pojazdów czy przepadek pojazdu.</li>
        <li><strong>Przemoc domowa: znęcanie i stalking.</strong> Sprawy o znęcanie się nad osobą najbliższą oraz o uporczywe nękanie (stalking) prowadzimy z uwzględnieniem szczególnej sytuacji osób pokrzywdzonych, pomagając im nie tylko w postępowaniu karnym, ale i w skoordynowaniu działań z innymi środkami ochrony prawnej (np. nakazem opuszczenia lokalu).</li>
        <li><strong>Niealimentacja.</strong> Prowadzimy sprawy o przestępstwo niealimentacji (art. 209 k.k.) — zarówno po stronie osoby oskarżonej o uchylanie się od obowiązku alimentacyjnego, jak i po stronie osoby uprawnionej do alimentów, dla której postępowanie karne bywa skutecznym narzędziem wsparcia w wyegzekwowaniu należnych świadczeń.</li>
        <li><strong>Przestępstwa gospodarcze.</strong> Reprezentujemy przedsiębiorców i osoby zarządzające spółkami w sprawach dotyczących przestępstw przeciwko obrotowi gospodarczemu — w tym działania na szkodę spółki, wyrządzenia szkody majątkowej, wyłudzenia kredytu, prania pieniędzy czy fałszowania dokumentów finansowych. Dzięki równoległemu doświadczeniu w bieżącej obsłudze prawnej firm rozumiemy specyfikę relacji biznesowych, co pozwala nam skutecznie bronić klientów w sprawach o dużym stopniu złożoności, a także reprezentować przedsiębiorstwa pokrzywdzone działaniem nieuczciwych kontrahentów, wspólników lub pracowników.</li>
      </ul>
    `,
  },
  {
    title: 'Prawo rodzinne',
    Icon: FamilyRestroomIcon,
    description: `
      <p>Prawo rodzinne to obszar wymagający nie tylko wiedzy prawnej, ale i wyczucia sytuacji rodzinnej klienta. Do każdej sprawy podchodzimy z uwagą na dobro najbliższych osób, których sprawa dotyczy, łącząc skuteczność działań prawnych z indywidualnym podejściem. Prowadzimy sprawy dotyczące między innymi:</p>
      <ul>
        <li>rozwodu i separacji</li>
        <li>podziału majątku wspólnego małżonków oraz rozliczenia nakładów z majątku osobistego na majątek wspólny (i odwrotnie)</li>
        <li>ustanowienia rozdzielności majątkowej</li>
        <li>alimentów — zarówno na rzecz dzieci, jak i małżonka, w tym ich podwyższenia lub obniżenia</li>
        <li>władzy rodzicielskiej — jej ograniczenia, pozbawienia oraz przywrócenia</li>
        <li>ustalenia kontaktów z dzieckiem</li>
        <li>ustalenia miejsca pobytu dziecka</li>
        <li>ustalenia i zaprzeczenia ojcostwa</li>
        <li>przysposobienia (adopcji)</li>
        <li>ustanowienia opieki i kurateli</li>
        <li>ubezwłasnowolnienia oraz opieki nad osobą ubezwłasnowolnioną</li>
        <li>wygaśnięcia obowiązku alimentacyjnego</li>
        <li>pieczy zastępczej</li>
      </ul>
    `,
  },
  {
    title: 'Prawo spadkowe',
    Icon: DescriptionIcon,
    description: `
      <p>To obszar, w którym zapewniamy wsparcie zarówno na etapie planowania sukcesji majątku, jak i w toku już toczącego się postępowania spadkowego. Prowadzimy sprawy dotyczące między innymi:</p>
      <ul>
        <li>stwierdzenia nabycia spadku</li>
        <li>działu spadku</li>
        <li>zachowku — w tym jego zapłaty oraz obniżenia</li>
        <li>sporządzania i opiniowania testamentów</li>
        <li>ważności testamentu, w tym jego unieważnienia</li>
        <li>odrzucenia spadku oraz przyjęcia spadku z dobrodziejstwem inwentarza</li>
        <li>wydziedziczenia</li>
        <li>uznania spadkobiercy za niegodnego dziedziczenia</li>
        <li>zapisu zwykłego i zapisu windykacyjnego</li>
        <li>wykonawstwa testamentu</li>
        <li>planowania sukcesji majątku, w tym sukcesji firm rodzinnych</li>
        <li>spraw spadkowych z elementem zagranicznym</li>
        <li>odpowiedzialności za długi spadkowe</li>
      </ul>
    `,
  },
  {
    title: 'Prawo gospodarcze',
    Icon: BusinessIcon,
    description: `
      <p>To obszar, w którym wspieramy przedsiębiorców na co dzień oraz w sytuacjach spornych — zarówno na drodze polubownej, jak i sądowej. Prowadzimy sprawy dotyczące między innymi:</p>
      <ul>
        <li>bieżącej obsługi prawnej przedsiębiorstw</li>
        <li>przygotowywania i negocjowania umów handlowych</li>
        <li>sporów korporacyjnych, w tym pomiędzy wspólnikami lub akcjonariuszami</li>
        <li>zakładania i rejestracji spółek oraz zmian w ich strukturze (przekształceń, połączeń, podziałów)</li>
        <li>dochodzenia i windykacji należności w obrocie gospodarczym (B2B)</li>
        <li>sporów z kontrahentami dotyczących niewykonania lub nienależytego wykonania umów handlowych</li>
        <li>postępowań rejestrowych przed Krajowym Rejestrem Sądowym</li>
        <li>czynów nieuczciwej konkurencji</li>
        <li>reprezentacji przed sądami gospodarczymi oraz w postępowaniach mediacyjnych i arbitrażowych</li>
      </ul>
    `,
  },
  {
    title: 'Prawo pracy',
    Icon: WorkIcon,
    description: `
      <p>Prawo pracy to obszar, w którym doradzamy zarówno pracownikom, jak i pracodawcom, reprezentując klientów zarówno w postępowaniach przed sądem pracy, jak i na etapie negocjacji oraz mediacji. Prowadzimy sprawy dotyczące między innymi:</p>
      <ul>
        <li>nawiązania i rozwiązania stosunku pracy, w tym zwolnień dyscyplinarnych oraz zwolnień grupowych</li>
        <li>odwołań od wypowiedzenia lub rozwiązania umowy o pracę</li>
        <li>mobbingu i dyskryminacji w miejscu pracy</li>
        <li>dochodzenia zaległego wynagrodzenia oraz innych świadczeń pracowniczych</li>
        <li>wypadków przy pracy oraz chorób zawodowych</li>
        <li>sporządzania i opiniowania umów o pracę</li>
        <li>kontraktów menedżerskich</li>
        <li>umów o zakazie konkurencji</li>
        <li>czasu pracy oraz rozliczania nadgodzin</li>
        <li>sporów zbiorowych oraz współpracy ze związkami zawodowymi</li>
      </ul>
    `,
  },
  {
    title: 'Upadłość konsumencka',
    Icon: AccountBalanceWalletIcon,
    description: `
      <p>Upadłość konsumencka to rozwiązanie dla osób fizycznych nieprowadzących działalności gospodarczej, które znalazły się w trudnej sytuacji finansowej. Naszym celem jest pomoc w skutecznym wyjściu z zadłużenia i odzyskaniu stabilności finansowej. Prowadzimy sprawy dotyczące między innymi:</p>
      <ul>
        <li>przygotowania i złożenia wniosku o ogłoszenie upadłości konsumenckiej</li>
        <li>reprezentacji klienta w toku całego postępowania upadłościowego</li>
        <li>ustalania planu spłaty wierzycieli</li>
        <li>umorzenia zobowiązań bez ustalania planu spłaty</li>
        <li>negocjacji z wierzycielami przed złożeniem wniosku o upadłość</li>
        <li>wniosków o zmianę warunków ustalonego planu spłaty</li>
        <li>uchylenia postanowienia o ustaleniu planu spłaty wierzycieli</li>
      </ul>
    `,
  },
];

export default function Specializations() {
  const [selected, setSelected] = useState<Specialization | null>(null);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em' }}>
            SPECJALIZACJE
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Obszary praktyki kancelarii
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 720, mx: 'auto' }}>
            Kliknij wybrany obszar, aby poznać zakres pomocy prawnej. Każda sprawa jest analizowana indywidualnie i z pełnym zaangażowaniem.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {specializations.map(({ title, Icon }, index) => (
            <Grid key={title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                component="button"
                type="button"
                onClick={() => setSelected(specializations[index])}
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: 210,
                  textAlign: 'left',
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: { xs: 3, md: 4 },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    boxShadow: '0 8px 30px rgba(197,165,114,0.18)',
                    transform: 'translateY(-4px)',
                  },
                  '&:focus-visible': {
                    outline: '3px solid',
                    outlineColor: 'secondary.light',
                    outlineOffset: 2,
                  },
                }}
              >
                <Icon sx={{ fontSize: 52, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                  {title}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', mt: 1 }}>
                  Kliknij, aby dowiedzieć się więcej
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        fullWidth
        maxWidth="sm"
        aria-labelledby="specialization-dialog-title"
      >
        {selected && (
          <>
            <DialogTitle
              id="specialization-dialog-title"
              sx={{
                bgcolor: 'primary.main',
                color: 'secondary.main',
                pr: 7,
                position: 'relative',
              }}
            >
              <selected.Icon sx={{ verticalAlign: 'middle', mr: 1.5, fontSize: 32 }} />
              {selected.title}
              <IconButton
                aria-label="Zamknij opis specjalizacji"
                onClick={() => setSelected(null)}
                sx={{ position: 'absolute', right: 12, top: 12, color: 'secondary.main' }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: { xs: 3, md: 4 , pt: 20 } }}>
              <Box
                sx={{ color: 'text.secondary', lineHeight: 1.8, ...richTextStyles }}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selected.description) }}
              />
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}