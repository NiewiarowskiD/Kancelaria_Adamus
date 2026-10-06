import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { LegalList, LegalP, LegalPage, LegalSection } from '../components/Legal';
import { PATHS } from '../seo/routes';
import { EMAIL, PHONE_HREF } from '../seo/site';

const companyData: [string, string][] = [
  ['Nazwa', 'Kancelaria Radcy Prawnego Katarzyna Adamus-Mielniczuk'],
  ['NIP', '6443407442'],
  ['REGON', '545672602'],
  ['Bank', 'PKO Bank Polski'],
  ['Numer rachunku', '75 1020 3017 0000 2402 0727 6068'],
];

export default function Kontakt() {
  return (
    <LegalPage path="/kontakt" title="Kontakt">
      <LegalP>
        Zapraszamy do kontaktu telefonicznego lub mailowego - na wiadomości odpowiadamy możliwie
        najszybciej.
      </LegalP>

      <LegalSection first heading="Dane kontaktowe">
        <LegalP>
          <strong>Kancelaria Radcy Prawnego Katarzyna Adamus-Mielniczuk</strong>
        </LegalP>
        <LegalList>
          <li>
            Telefon: <a href={PHONE_HREF}>505 810 279</a>
          </li>
          <li>
            E-mail: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
          <li>Adres do korespondencji: Szczedrzykowice 32/6, 59-230 Prochowice</li>
        </LegalList>
        <LegalP>
          Podany adres służy wyłącznie do korespondencji. Klientów nie przyjmujemy pod tym adresem.
        </LegalP>
      </LegalSection>

      <LegalSection heading="Godziny pracy Kancelarii">
        <LegalP>Kancelaria pozostaje do Państwa dyspozycji w następujących godzinach:</LegalP>
        <LegalList>
          <li>od poniedziałku do piątku – w godzinach od 8.00 do 20.00,</li>
          <li>w soboty – w godzinach od 10.00 do 16.00.</li>
        </LegalList>
        <LegalP>
          W przypadku braku możliwości odebrania połączenia telefonicznego uprzejmie informujemy, że
          wynika to z udziału w czynnościach zawodowych. Niezwłocznie po ich zakończeniu oddzwonimy
          do Państwa.
        </LegalP>
        <LegalP>
          Poza wskazanymi godzinami, kontakt z Kancelarią jest możliwy wyłącznie w szczególnie
          uzasadnionych przypadkach, w szczególności w razie nagłego zatrzymania osoby przez organy
          prowadzące czynności w postępowaniu karnym. W takiej sytuacji prosimy o przesłanie
          krótkiej wiadomości SMS zawierającej prośbę o pilny kontakt oraz zwięzły opis sprawy,
          oddzwonimy tak szybko, jak będzie to możliwe.
        </LegalP>
      </LegalSection>

      <LegalSection heading="Jak umówić poradę prawną">
        <LegalP>
          Konsultacje prawne prowadzone są w biurze w Legnicy, wyłącznie po uprzednim uzgodnieniu
          terminu spotkania w drodze kontaktu telefonicznego. Informacja o dokładnej lokalizacji
          biura przekazywana jest Klientowi w momencie ustalania terminu.
        </LegalP>
        <LegalP>
          Kancelaria świadczy ponadto pomoc prawną w formie konsultacji zdalnych (e-porada) z
          wykorzystaniem środków komunikacji elektronicznej. Wynagrodzenie za jednorazową poradę
          prawną wynosi 300 zł i pozostaje takie samo niezależnie od formy jej udzielenia. Zasady
          rozliczeń za prowadzenie spraw określa zakładka <Link to={PATHS.price}>Cennik</Link>.
        </LegalP>
        <LegalP>W celu umówienia konsultacji prosimy o:</LegalP>
        <LegalList ordered>
          <li>
            kontakt telefoniczny pod numerem <a href={PHONE_HREF}>505 810 279</a> lub korespondencję
            e-mail na adres: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
          <li>
            ustalenie wspólnie z Kancelarią terminu oraz formy konsultacji (spotkanie w biurze w
            Legnicy albo porada online),
          </li>
          <li>
            przygotowanie dokumentów dotyczących sprawy (w przypadku porady online dokumenty można
            przesłać do Kancelarii drogą elektroniczną przed wyznaczonym terminem na adres e-mail:{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>).
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection heading="Dane Kancelarii i rachunek bankowy">
        <Table
          size="small"
          sx={{ mb: 2, '& td, & th': { fontSize: '1rem', borderColor: 'divider' } }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700, width: { xs: '40%', sm: '30%' } }}>Dane</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Wartość</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companyData.map(([label, value]) => (
              <TableRow key={label}>
                <TableCell component="th" scope="row" sx={{ color: 'text.primary' }}>
                  {label}
                </TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <LegalP>
          Przy płatności prosimy o wpisanie w tytule przelewu imienia i nazwiska oraz informacji,
          której usługi dotyczy wpłata (np. porada prawna, prowadzenie sprawy).
        </LegalP>
      </LegalSection>
    </LegalPage>
  );
}
