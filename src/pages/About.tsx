import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { Divider } from '@mui/material';

export default function About() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>

        <Grid container spacing={6} sx={{ mb: 6, mt: 1 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Card sx={{ height: '100%', bgcolor: 'none', color: 'none', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
  component="img"
  image="/photo.png"
  alt="Radca Prawny Katarzyna Adamus-Mielniczuk"
  sx={{ 
    objectFit: 'cover', 
    objectPosition: 'top', 
    borderRadius: 1, 
    height: '100%', 
    flexGrow: 1 
  }}
/>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Radca Prawny Katarzyna Adamus-Mielniczuk
            </Typography>
            <Typography align='justify' variant="body1" sx={{ color: 'text.secondary', marginBottom:3 }}>
              Katarzyna Adamus-Mielniczuk jest radcą prawnym i prowadzi Kancelarię Radcy Prawnego, która świadczy pomoc prawną na terenie całego województwa dolnośląskiego. Status zawodowy i numer wpisu na listę radców prawnych WŁ-1118 można zweryfikować w oficjalnym Krajowym Rejestrze Radców Prawnych.
            </Typography>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <SchoolIcon sx={{ color: 'secondary.main', fontSize: 32, mt: 0.5 }} />
                <Box>
                  <Typography align='justify' variant="h6">Wykształcenie</Typography>
                  <Typography align='justify' variant="body1" sx={{ color: 'text.secondary' }}>
                    Ukończyła studia magisterskie (kierunek prawo) na Wydziale Prawa i Administracji Uniwersytetu Śląskiego. Pracę magisterską przygotowała i obroniła w Katedrze Postępowania Karnego pod kierunkiem prof. Jarosława Zagrodnika, uznanego specjalisty oraz autora wielu publikacji naukowych i komentarzy w dziedzinie prawa karnego procesowego. Aplikację radcowską odbyła w Okręgowej Izbie Radców Prawnych w Wałbrzychu, a po jej ukończeniu I zdanym egzaminie zawodowym nabyła uprawnienia do wykonywania zawodu radcy prawnego.
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <WorkIcon sx={{ color: 'secondary.main', fontSize: 32, mt: 0.5 }} />
                <Box>
                  <Typography align='justify' variant="h6">Praktyka zawodowa</Typography>
                  <Typography align='justify' variant="body1" sx={{ color: 'text.secondary' }}>
                    Doświadczenie zawodowe zdobywała przez kilka lat, pracując jako aplikant radcowski w kancelariach prawnych, gdzie zajmowałam się obsługą prawną klientów indywidualnych oraz biznesowych w szerokim spektrum spraw - od prawa cywilnego, przez prawo karne, administracyjne i gospodarcze, po prawo rodzinne, spadkowe, prawo pracy, prawo budowlane oraz sprawy dotyczące nieruchomości i upadłości konsumenckiej.                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

       <Card sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', p: { xs: 3, md: 5 } }}>
          <CardContent sx={{ '& .MuiTypography-root': { mb: 2 } }}>
            
            {/* Zakres świadczonej pomocy prawnej */}
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: 'text.primary', mb: 3 }}>
              Zakres świadczonej pomocy prawnej
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Kancelaria świadczy pomoc prawną w szczególności w następujących dziedzinach:
            </Typography>
            <Box component="ul" sx={{ color: 'text.secondary', pl: 3, mb: 3, lineHeight: 1.8, '& li': { mb: 1, textAlign: 'justify' } }}>
              <li><strong>prawo cywilne</strong> – sporządzanie i opiniowanie umów, dochodzenie roszczeń pieniężnych i odszkodowawczych, odpowiedzialność kontraktowa i deliktowa, ochrona dóbr osobistych, zastępstwo procesowe w postępowaniu rozpoznawczym i egzekucyjnym;</li>
              <li><strong>prawo karne</strong> – obrona podejrzanego i oskarżonego na każdym etapie postępowania karnego, reprezentacja pokrzywdzonego, w tym w charakterze pełnomocnika oskarżyciela posiłkowego, a także sprawy o wykroczenia i dotyczące osób nieletnich;</li>
              <li><strong>prawo rodzinne i opiekuńcze</strong> – sprawy o rozwód i separację, alimenty, władzę rodzicielską i kontakty z dzieckiem, podział majątku wspólnego;</li>
              <li><strong>prawo spadkowe</strong> – stwierdzenie nabycia spadku, testamenty, zachowek, przyjęcie i odrzucenie spadku, dział spadku;</li>
              <li><strong>prawo gospodarcze</strong> – bieżąca obsługa prawna przedsiębiorców, umowy w obrocie profesjonalnym, spory gospodarcze;</li>
              <li><strong>prawo administracyjne</strong> – reprezentacja w postępowaniu administracyjnym oraz sądowoadministracyjnym;</li>
              <li><strong>prawo pracy</strong> – reprezentacja pracowników i pracodawców, w tym w sprawach o przywrócenie do pracy, odszkodowanie i wynagrodzenie;</li>
              <li><strong>prawo budowlane i nieruchomości</strong> – obsługa prawna procesu inwestycyjno-budowlanego, obrót nieruchomościami, ochrona własności i posiadania;</li>
              <li><strong>upadłość konsumencka</strong> – przygotowanie wniosku o ogłoszenie upadłości osoby fizycznej nieprowadzącej działalności gospodarczej oraz reprezentacja w toku postępowania.</li>
            </Box>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Powyższe zestawienie ma charakter przykładowy. Ostateczna kwalifikacja prawna sprawy wymaga analizy stanu faktycznego i dokumentacji, a jedno zagadnienie może pozostawać w zakresie kilku gałęzi prawa i wymagać zastosowania odmiennych środków ochrony prawnej.
            </Typography>

            <Divider sx={{ my: 4 }} />

            {/* Metodyka prowadzenia spraw */}
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: 'text.primary', mb: 3 }}>
              Metodyka prowadzenia spraw
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Pierwszym etapem jest ustalenie stanu faktycznego, pozycji procesowej Klienta, stadium postępowania oraz biegnących terminów. Następnie dokonywana jest analiza dokumentacji i materiału dowodowego, identyfikacja możliwych kierunków działania oraz ocena ryzyk procesowych. Na tej podstawie określany jest zakres zlecenia, od jednorazowej porady lub opinii prawnej, przez sporządzenie pisma i prowadzenie negocjacji, po zastępstwo procesowe w postępowaniu sądowym lub administracyjnym.
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Kancelaria działa w oparciu o zasady rzetelności, poufności i lojalności wobec Klienta. Wszelkie informacje uzyskane w związku ze świadczeniem pomocy prawnej objęte są tajemnicą zawodową radcy prawnego (art. 3 ust. 3 ustawy o radcach prawnych). Klient na bieżąco otrzymuje informacje o przebiegu sprawy, podejmowanych czynnościach oraz decyzjach wymagających jego akceptacji. Strategia procesowa podlega weryfikacji w miarę pojawiania się nowych dowodów, stanowiska strony przeciwnej lub rozstrzygnięć sądu bądź organu. Kancelaria nie gwarantuje określonego rozstrzygnięcia, zobowiązuje się natomiast do starannego przygotowania sprawy, terminowego podejmowania czynności i rzetelnego przedstawiania dostępnych rozwiązań.
            </Typography>

            <Divider sx={{ my: 4 }} />

            {/* Zastępstwo procesowe i sporządzanie pism */}
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: 'text.primary', mb: 3 }}>
              Zastępstwo procesowe i sporządzanie pism
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              W zależności od charakteru sprawy pomoc prawna obejmuje analizę przedprocesową, sporządzenie przedsądowego wezwania do zapłaty, pozwu, odpowiedzi na pozew, wniosku, apelacji, zażalenia, skargi, odwołania lub innego pisma przewidzianego przepisami właściwej procedury. Radca prawny występuje jako pełnomocnik lub obrońca przed sądami powszechnymi i administracyjnymi, prokuraturą, Policją oraz organami administracji publicznej, a także reprezentuje Klientów w negocjacjach i postępowaniach polubownych, w tym mediacyjnych.
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Sporządzenie pisma poprzedza każdorazowo ustalenie podstawy prawnej, terminu do jego wniesienia, organu właściwego, wymogów formalnych i fiskalnych oraz zamierzonego skutku procesowego. W sprawach pilnych istotne znaczenie ma sposób i data doręczenia orzeczenia lub pisma, od której biegnie termin do dokonania czynności.
            </Typography>

            <Divider sx={{ my: 4 }} />

            {/* Współpraca z innymi profesjonalistami */}
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: 'text.primary', mb: 3 }}>
              Współpraca z innymi profesjonalistami
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Kancelaria prowadzona jest pod osobistym kierownictwem radcy prawnego Katarzyny Adamus-Mielniczuk. W sprawach o znacznym stopniu złożoności lub wymagających wiedzy specjalistycznej Kancelaria współpracuje ze stałym gronem radców prawnych i adwokatów, a także specjalistów z innych dziedzin. Rozwiązanie to zapewnia Klientom dostęp do szerokiego zaplecza merytorycznego przy zachowaniu bezpośredniego kontaktu z osobą odpowiedzialną za prowadzenie sprawy.
            </Typography>

            <Divider sx={{ my: 4 }} />

            {/* Przygotowanie do pierwszej konsultacji */}
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: 'text.primary', mb: 3 }}>
              Przygotowanie do pierwszej konsultacji
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              W celu sprawnego przeprowadzenia konsultacji zaleca się przygotowanie:
            </Typography>
            <Box component="ol" sx={{ color: 'text.secondary', pl: 3, mb: 3, lineHeight: 1.8, '& li': { mb: 1, textAlign: 'justify' } }}>
              <li>zwięzłego, chronologicznego opisu istotnych zdarzeń;</li>
              <li>pism i orzeczeń doręczonych przez sąd, organ administracji, prokuraturę lub stronę przeciwną;</li>
              <li>umów, korespondencji i innych dokumentów związanych ze sprawą;</li>
              <li>informacji o biegnących terminach oraz wyznaczonych posiedzeniach lub rozprawach;</li>
              <li>listy pytań oraz określenia oczekiwanego celu konsultacji.</li>
            </Box>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Na etapie wstępnym nie jest wymagane sporządzanie rozbudowanych opracowań. Istotne jest natomiast przedłożenie kompletnej dokumentacji, bez pomijania fragmentów pozornie nieistotnych. Przed przekazaniem danych poufnych należy uzgodnić bezpieczny kanał komunikacji.
            </Typography>

            <Divider sx={{ my: 4 }} />

            {/* Konsultacje w Legnicy i porady prawne online */}
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: 'text.primary', mb: 3 }}>
              Konsultacje w Legnicy i porady prawne online
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Konsultacje stacjonarne odbywają się w Legnicy, wyłącznie po uprzednim telefonicznym uzgodnieniu terminu. Dokładne miejsce spotkania przekazywane jest Klientowi przy umawianiu konsultacji. Takie rozwiązanie pozwala zarezerwować czas spotkania wyłącznie dla danego Klienta i zapewnić pełną dyskrecję rozmowy. Kancelaria nie przyjmuje Klientów pod adresem siedziby. Jeżeli charakter sprawy na to pozwala, Kancelaria udziela również porad prawnych w formie zdalnej (e-porada). Forma konsultacji nie zwalnia z obowiązku weryfikacji tożsamości Klienta, badania konfliktu interesów oraz ustalenia zakresu zlecenia.
            </Typography>

            <Divider sx={{ my: 4 }} />

            {/* Obszar działania - województwo dolnośląskie */}
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: 'text.primary', mb: 3 }}>
              Obszar działania - województwo dolnośląskie
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Kancelaria świadczy pomoc prawną na rzecz Klientów z terenu całego województwa dolnośląskiego, w tym m.in. z Legnicy, Wrocławia, Wałbrzycha, Jeleniej Góry, Lubina, Głogowa, Świdnicy, Bolesławca, Złotoryi, Jawora, Chojnowa i Polkowic oraz okolicznych miejscowości.
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Radca prawny Katarzyna Adamus-Mielniczuk podejmuje się zastępstwa procesowego i obrony przed sądami rejonowymi i okręgowymi z obszaru apelacji wrocławskiej, w szczególności w okręgach Sądu Okręgowego w Legnicy, Sądu Okręgowego we Wrocławiu, Sądu Okręgowego w Świdnicy i Sądu Okręgowego w Jeleniej Górze, a także przed Sądem Apelacyjnym we Wrocławiu, Wojewódzkim Sądem Administracyjnym we Wrocławiu, jednostkami prokuratury i Policji oraz organami administracji publicznej działającymi na terenie województwa.
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Znaczną część czynności, m.in. analizę dokumentów, sporządzanie pism i opinii prawnych, bieżący kontakt z Klientem oraz porady prawne w formie zdalnej (e-porada), można przeprowadzić bez konieczności osobistego stawiennictwa, co pozwala sprawnie prowadzić sprawy Klientów zamieszkałych lub mających siedzibę poza Legnicą. Pisma do sądów i organów wnoszone są z wykorzystaniem dostępnych kanałów elektronicznych, w tym Portalu Informacyjnego Sądów Powszechnych oraz e-Doręczeń.
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Uprawnienia radcy prawnego do występowania przed sądami i organami nie są ograniczone terytorialnie, dlatego w uzasadnionych przypadkach Kancelaria podejmuje się prowadzenia spraw również przed sądami i organami poza województwem dolnośląskim. Decyzja o przyjęciu zlecenia oraz zasady reprezentacji, w tym sposób rozliczania ewentualnych kosztów dojazdu, ustalane są indywidualnie.
            </Typography>

            <Divider sx={{ my: 4 }} />

            {/* Kontakt z Kancelarią */}
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: 'text.primary', mb: 3 }}>
              Kontakt z Kancelarią
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 0 }}>
              Dane kontaktowe znajdują się w zakładce Kontakt. W pierwszej wiadomości lub rozmowie wystarczy wskazać rodzaj sprawy, stadium postępowania, najbliższy termin oraz posiadane dokumenty. Decyzja o przyjęciu zlecenia oraz zakres i warunki pomocy prawnej ustalane są indywidualnie.
            </Typography>

          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}