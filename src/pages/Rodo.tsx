import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Seo from '../seo/Seo';
import { PAGE_META } from '../seo/routes';

export default function Rodo() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
      <Seo {...PAGE_META['/polityka-prywatnosci']} path="/polityka-prywatnosci" />
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography 
          variant="overline" 
          component="h1"
          sx={{ color: 'secondary.main', letterSpacing: '0.2em', display: 'block', mb: 2 }}
        >
         Regulamin i prywatność
        </Typography>

        <Card sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', p: { xs: 3, md: 5 } }}>
          <CardContent sx={{ '& .MuiTypography-root': { mb: 2 } }}>
            
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}>
              § 1. Postanowienia ogólne
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Właścicielem serwisu internetowego oraz Administratorem Danych Osobowych jest <strong>Kancelaria Radcy Prawnego Katarzyna Adamus-Mielniczuk</strong>, z siedzibą w: [Adres], NIP: [Numer NIP], e-mail: <a href="mailto:kancelaria@radcaprawnylegnica.com.pl">kancelaria@radcaprawnylegnica.com.pl</a>, tel.: <a href="tel:+48505810279">+48 505 810 279</a>.
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Niniejszy dokument określa zasady korzystania z bezpłatnej usługi świadczonej drogą elektroniczną (formularza kontaktowego) oraz zasady przetwarzania danych osobowych zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).
            </Typography>

            <Divider sx={{ my: 4 }} />


            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}>
              § 2. Świadczenie usług drogą elektroniczną
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Usługa świadczona drogą elektroniczną polega wyłącznie na udostępnieniu bezpłatnego formularza kontaktowego umożliwiającego skierowanie zapytania dotyczącego pomocy prawnej bezpośrednio do Kancelarii.
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Wysłanie zapytania przez formularz nie oznacza automatycznego zawarcia umowy o świadczenie pomocy prawnej ani nawiązania stosunku klient–pełnomocnik. Zawarcie takiej umowy wymaga odrębnych ustaleń stron.
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              <strong>Wymagania techniczne:</strong> urządzenie z dostępem do sieci Internet oraz standardowa przeglądarka internetowa z obsługą JavaScript.
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Użytkownik zobowiązany jest do niedostarczania treści o charakterze bezprawnym, w szczególności naruszających dobra osobiste osób trzecich lub powszechnie obowiązujące przepisy prawa.
            </Typography>
            <Typography variant="body1" align="justify" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Reklamacje dotyczące technicznego działania formularza można zgłaszać na adres e-mail Administratora. Zgłoszenia są rozpatrywane w terminie do 14 dni.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}>
              § 3. Ochrona danych osobowych (RODO)
            </Typography>
            
            <Box component="ul" sx={{ color: 'text.secondary', pl: 3, mb: 2, lineHeight: 1.8, '& li': { mb: 2, textAlign: 'justify' } }}>
              <li>
                <strong>Brak zapisu w bazie serwisu:</strong> Dane osobowe podane w formularzu (imię, nazwisko, numer telefonu, treść wiadomości) nie są utrwalane w bazie danych serwisu internetowego. Skrypt formularza generuje wiadomość e-mail przesyłaną bezpośrednio na zabezpieczoną skrzynkę pocztową Administratora.
              </li>
              <li>
                <strong>Cel i podstawa przetwarzania:</strong>
                <Box component="ul" sx={{ mt: 1, pl: 2, '& li': { mb: 0.5 } }}>
                  <li>Podjęcie działań na żądanie osoby, której dane dotyczą, przed zawarciem ewentualnej umowy o pomoc prawną (art. 6 ust. 1 lit. b RODO).</li>
                  <li>Prawnie uzasadniony interes Administratora polegający na bieżącej komunikacji i udzieleniu odpowiedzi na zadane pytanie (art. 6 ust. 1 lit. f RODO).</li>
                </Box>
              </li>
              <li>
                <strong>Poufność i tajemnica zawodowa:</strong> Wszelkie informacje przekazane w formularzu kontaktowym podlegają ochronie wynikającej z przepisów o tajemnicy zawodowej radcy prawnego.
              </li>
              <li>
                <strong>Odbiorcy danych:</strong> Dane mogą być powierzane wyłącznie podmiotom świadczącym usługi techniczne niezbędne do funkcjonowania poczty elektronicznej (operator poczty e-mail / hostingu).
              </li>
              <li>
                <strong>Okres przechowywania:</strong> Dane przetwarzane są przez czas niezbędny do obsługi zapytania i prowadzenia korespondencji. W przypadku braku nawiązania współpracy korespondencja jest usuwana, chyba że jej archiwizacja wynika z obowiązku obrony przed ewentualnymi roszczeniami.
              </li>
              <li>
                <strong>Prawa użytkownika:</strong> Każdej osobie przysługuje prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu oraz wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO). Podanie danych jest dobrowolne, ale niezbędne do nawiązania kontaktu.
              </li>
            </Box>

          </CardContent>
        </Card>
      </Box>

    </Box>
  );
}