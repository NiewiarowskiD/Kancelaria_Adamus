import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '../seo/Seo';
import { breadcrumbLd } from '../seo/jsonld';
import { PAGE_META, PATHS } from '../seo/routes';
import { sanitizeHtml } from '../lib/sanitize';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import BusinessIcon from '@mui/icons-material/Business';
import GavelIcon from '@mui/icons-material/Gavel';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import BalanceIcon from '@mui/icons-material/Balance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import type { SvgIconComponent } from '@mui/icons-material';
import { richTextStyles } from '../styles/richTextStyles';
import { Card, CardContent, Stack } from '@mui/material';

interface SubSpecialization {
  title: string;
  description: string;
}

interface Specialization {
  title: string;
  Icon: SvgIconComponent;
  description?: string;
  subItems?: SubSpecialization[];
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
        <li>naruszenia dóbr osobistych (w tym SLAPP)</li>
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
        <li>odwołanie darowizny</li>
      </ul>
    `,
    subItems: [
      {
        title: 'Sprawy, które znamy najlepiej',
        description: `
        <ul>
            <li><strong>Umowy i ich niewykonanie lub nienależyte wykonanie</strong></li>
            <p>Prowadzimy sprawy dotyczące opóźnień, odmowy wykonania i wadliwego wykonania umów, w tym dochodzenia zapłaty, odsetek, kar umownych oraz odstąpienia od umowy (art. 471 i art. 491 k.c.). Pomagamy również w sporządzaniu i weryfikacji umów oraz bronimy przed nieuzasadnionymi roszczeniami, w tym przez żądanie miarkowania rażąco wygórowanej kary umownej (art. 484 § 2 k.c.). Znamy różnicę między sześcioletnim terminem przedawnienia a trzyletnim, obowiązującym w sprawach związanych z prowadzeniem działalności gospodarczej (art. 118 k.c.), i pilnujemy jej w każdej sprawie.</p>
            <li><strong>Odszkodowania i zadośćuczynienie (odpowiedzialność kontraktowa i deliktowa)</strong></li>
            <p>Reprezentujemy poszkodowanych oraz osoby, którym zarzuca się wyrządzenie szkody, zarówno gdy źródłem odpowiedzialności jest niewykonanie umowy (art. 471 k.c.), jak i czyn niedozwolony (art. 415 k.c.) lub odpowiedzialność na zasadzie ryzyka (np. art. 435 i 436 k.c.). Dochodzimy naprawienia straty rzeczywistej i utraconych korzyści (art. 361 § 2 k.c.) oraz zadośćuczynienia za krzywdę, w tym za uszkodzenie ciała lub rozstrój zdrowia (art. 445 k.c.) i śmierć osoby najbliższej (art. 446 § 4 k.c.). Pilnujemy terminów przedawnienia, które w przypadku czynów niedozwolonych wynoszą co do zasady trzy lata od dowiedzenia się o szkodzie i osobie zobowiązanej do jej naprawienia (art. 442¹ k.c.).</p>
            <li><strong>Rękojmia i gwarancja przy wadach rzeczy sprzedanej</strong></li>
            <p>Prowadzimy sprawy konsumentów i przedsiębiorców, którzy kupili rzecz wadliwą lub niezgodną z umową. Ustalamy, czy przysługują uprawnienia z rękojmi sprzedawcy (art. 556 i n. k.c., a w sprzedaży konsumenckiej także ustawa o prawach konsumenta) oraz z gwarancji udzielonej przez producenta lub sprzedawcę (art. 577 i n. k.c.), i pomagamy wybrać właściwe żądanie: naprawę, wymianę, obniżenie ceny lub odstąpienie od umowy. Sporządzamy reklamacje i wezwania, a gdy nie przynoszą skutku, dochodzimy roszczeń przed sądem.</p>
            <li><strong>Odwołanie darowizny</strong></li>
            <p>Reprezentujemy darczyńców, którzy chcą odwołać darowiznę z powodu rażącej niewdzięczności obdarowanego (art. 898 k.c.), a także obdarowanych broniących się przed takimi roszczeniami. Znamy niuanse dotyczące tego, co stanowi niewdzięczność o wymaganym stopniu, czyli zawinione, szczególnie naganne zachowanie wobec darczyńcy lub jego bliskich, takie jak agresja, znieważanie, porzucenie czy pozbawienie pomocy, oraz wpływ przebaczenia na utratę uprawnienia (art. 899 § 1 k.c.) i rocznego terminu na złożenie oświadczenia o odwołaniu, liczonego od dowiedzenia się o niewdzięczności (art. 899 § 3 k.c.). Pomagamy również w sprawach o zwrot darowizny jako bezpodstawnego wzbogacenia (art. 900 k.c.), w tym darowizn nieruchomości, z uwzględnieniem zabezpieczenia roszczenia w księdze wieczystej, w sprawach dotyczących darowizny z poleceniem (art. 896 i 901 k.c.) oraz obowiązku obdarowanego wobec darczyńcy, który popadł w niedostatek (art. 897 k.c.).</p>
            <li><strong>Naruszenie dóbr osobistych</strong></li>
            <p>Reprezentujemy osoby, których dobra osobiste, takie jak cześć, dobre imię, wizerunek, nazwisko czy prywatność, zostały naruszone (art. 23 i 24 k.c.), w tym w internecie i mediach społecznościowych, a także osoby, którym zarzucono takie naruszenie. Dochodzimy zaniechania dalszych działań, usunięcia skutków naruszenia (np. przez przeprosiny lub sprostowanie), zadośćuczynienia (art. 448 k.c.) albo zapłaty odpowiedniej sumy na wskazany cel społeczny. W razie potrzeby oceniamy również możliwość równoległej odpowiedzialności karnej, np. za zniesławienie (art. 212 k.k.). Zajmujemy się także pozwami typu SLAPP (Strategic Lawsuit Against Public Participation), czyli powództwami wnoszonymi głównie po to, by zastraszyć, zniechęcić do wypowiedzi lub wyczerpać finansowo dziennikarzy, aktywistów, organizacje społeczne i inne osoby uczestniczące w debacie publicznej, często pod pozorem ochrony dóbr osobistych. Reprezentujemy pozwanych w takich sprawach, wykazując nadużycie prawa procesowego i oczywistą bezzasadność roszczenia, oraz korzystamy z instrumentów ochronnych przewidzianych w ustawie o szczególnych środkach ochrony w postępowaniu cywilnym osób uczestniczących w debacie publicznej (tzw. ustawie anty-SLAPP). Pomagamy również osobom, które rzeczywiście doznały naruszenia dóbr osobistych, ocenić, czy ich roszczenie nie zostanie uznane za SLAPP, i dobrać je tak, aby było skuteczne i bezpieczne.</p>
            <li><strong>Sprawy mieszkaniowe i dotyczące nieruchomości</strong></li>
            <p>Prowadzimy sprawy o eksmisję i opróżnienie lokalu, w tym związane z prawem do lokalu socjalnego, o zniesienie współwłasności (art. 210 i n. k.c.) w drodze umowy lub postępowania sądowego, o stwierdzenie zasiedzenia nieruchomości (art. 172 k.c.: co do zasady 20 lat posiadania w dobrej wierze albo 30 lat w złej wierze) oraz o ustanowienie lub wygaśnięcie służebności, w tym drogi koniecznej (art. 145 k.c.), służebności przesyłu (art. 305¹ k.c.) i służebności mieszkania (art. 300 k.c.). Zwracamy szczególną uwagę na dowody oraz stan księgi wieczystej, od których często zależy wynik sprawy.</p>
            <li><strong>Spory z zakresu prawa budowlanego między inwestorem a wykonawcą</strong></li>
            <p>Reprezentujemy zarówno inwestorów, jak i wykonawców w sporach wynikających z umów o roboty budowlane (art. 647 i n. k.c.), w szczególności dotyczących wad wykonawczych, opóźnień w realizacji inwestycji, rozliczenia wynagrodzenia, w tym ryczałtowego (art. 632 k.c.), oraz kar umownych. Oceniamy zasadność odstąpienia od umowy, roszczenia z rękojmi i gwarancji jakości, zwrot kaucji gwarancyjnej (art. 649¹ k.c.) oraz odpowiedzialność inwestora za zapłatę wynagrodzenia podwykonawcom (art. 647¹ k.c.). Gdy potrzebna jest wiedza techniczna, w razie potrzeby angażujemy do współpracy rzeczoznawców.</p>
            <li><strong>Najem i dzierżawa</strong></li>
            <p> Reprezentujemy wynajmujących i najemców oraz wydzierżawiających i dzierżawców w sprawach dotyczących zaległości czynszowych, wypowiedzenia umowy najmu, zwrotu lokalu, rozliczenia kaucji i nakładów oraz szkód w rzeczy najmowanej. Doradzamy przy sporządzaniu umów (w tym najmu okazjonalnego) oraz przy wypowiadaniu ich z zachowaniem wymogów Kodeksu cywilnego (art. 659 i n., art. 693 i n. k.c.) i ustawy o ochronie praw lokatorów. Zwracamy uwagę, że roszczenia wynajmującego o naprawienie szkody oraz roszczenia najemcy o zwrot nakładów przedawniają się z upływem roku od dnia zwrotu rzeczy (art. 677 k.c.).</p>
            <li><strong>Wady oświadczenia woli</strong></li>
            <p>Pomagamy osobom, które zawarły umowę pod wpływem błędu (art. 84 k.c.), podstępu (art. 86 k.c.) lub groźby (art. 87 k.c.), a także w sprawach dotyczących pozorności umowy (art. 83 k.c.) oraz oświadczeń złożonych w stanie wyłączającym świadome lub swobodne podjęcie decyzji (art. 82 k.c.). Oceniamy, czy wada rzeczywiście wystąpiła, i składamy oświadczenie o uchyleniu się od skutków prawnych umowy, pamiętając o terminie zawitym roku od wykrycia błędu lub ustania obawy (art. 88 k.c.), którego upływ może przesądzić o wyniku sprawy.</p>
            <li><strong>Odszkodowania komunikacyjne</strong></li>
            <p>Prowadzimy sprawy poszkodowanych w wypadkach i kolizjach drogowych, dochodząc roszczeń bezpośrednio od ubezpieczyciela OC sprawcy (art. 822 k.c. oraz ustawa o ubezpieczeniach obowiązkowych, Ubezpieczeniowym Funduszu Gwarancyjnym i Polskim Biurze Ubezpieczycieli Komunikacyjnych), a gdy sprawca nie był ubezpieczony lub uciekł z miejsca zdarzenia, od Ubezpieczeniowego Funduszu Gwarancyjnego. Dochodzimy odszkodowania za szkodę w pojeździe, kosztów najmu pojazdu zastępczego, kosztów leczenia i rehabilitacji, renty oraz zadośćuczynienia, w tym dla rodzin ofiar wypadków śmiertelnych. Weryfikujemy decyzje ubezpieczycieli, w tym zaniżone kosztorysy i odmowy wypłaty, a w razie potrzeby kierujemy sprawę do sądu.</p>
            <li><strong>Błędy medyczne</strong></li>
            <p>Reprezentujemy pacjentów i ich rodziny w sprawach o odszkodowanie i zadośćuczynienie za szkody powstałe w związku z leczeniem, w tym błędy diagnostyczne, terapeutyczne i organizacyjne, zakażenia szpitalne oraz naruszenie prawa pacjenta do informacji i świadomej zgody. Pomagamy uzyskać dokumentację medyczną, ocenić szansę roszczenia na podstawie opinii biegłych oraz wybrać drogę dochodzenia roszczeń: postępowanie przed wojewódzką komisją do spraw orzekania o zdarzeniach medycznych albo proces cywilny przeciwko placówce lub jej ubezpieczycielowi. W tych sprawach obowiązują krótkie terminy, dlatego warto zgłosić się jak najszybciej.</p>
            <li><strong>Postępowanie egzekucyjne i zabezpieczające</strong></li>
            <p>Reprezentujemy wierzycieli i dłużników w postępowaniu egzekucyjnym prowadzonym przez komornika sądowego: od uzyskania klauzuli wykonalności i wyboru skutecznych sposobów egzekucji (z wynagrodzenia, rachunków bankowych, ruchomości, nieruchomości), po skargi na czynności komornika (art. 767 k.p.c.), powództwa przeciwegzekucyjne (art. 840 k.p.c.) i ochronę dłużnika przed zajęciem składników majątku wyłączonych spod egzekucji. Wnosimy także o udzielenie zabezpieczenia roszczenia przed wszczęciem albo w toku sprawy (art. 730 i n. k.p.c.), aby zapobiec zbyciu lub ukryciu majątku przez dłużnika.</p>
          </ul>
        `,
      },
    ]
  },
  {
    title: 'Prawo karne',
    Icon: BalanceIcon,
    subItems: [
      {
        title: 'Obrona w sprawach karnych',
        description: `
          <p>Zapewniamy obronę na każdym etapie postępowania — od pierwszego przesłuchania i ewentualnego tymczasowego aresztowania, przez postępowanie przygotowawcze, aż po rozprawę główną i środki odwoławcze. Bronimy klientów oskarżonych między innymi o:</p>
          <ul>
            <li>przestępstwa narkotykowe</li>
            <li>niealimentację</li>
            <li>bójkę i pobicie</li>
            <li>oszustwo (w tym oszustwa internetowe i metodą na policjanta/na wnuczka)</li>
            <li>kradzież</li>
            <li>zgwałcenie</li>
            <li>przestępstwa na tle seksualnym wobec małoletnich</li>
            <li>prowadzenie pojazdu pod wpływem alkoholu lub środków odurzających oraz spowodowanie wypadku pod wpływem takich środków</li>
            <li>inne przestępstwa drogowe</li>
            <li>przestępstwa gospodarcze</li>
            <li>przestępstwa przeciwko życiu i zdrowiu (w tym zabójstwo, nieumyślne spowodowanie śmierci)</li>
            <li>rozbój</li>
          </ul>
        `,
      },
      {
        title: 'Reprezentacja pokrzywdzonych',
        description: `
          <p>Stajemy również po stronie osób pokrzywdzonych, pomagając im aktywnie uczestniczyć w postępowaniu — w tym w charakterze oskarżyciela posiłkowego — oraz dochodzić należnego zadośćuczynienia i odszkodowania. Reprezentujemy pokrzywdzonych w szczególności w sprawach dotyczących:</p>
          <ul>
            <li>stalkingu (uporczywego nękania)</li>
            <li>znęcania się nad osobą najbliższą lub osobą pozostającą w stosunku zależności</li>
            <li>zgwałcenia</li>
            <li>przestępstw na tle seksualnym wobec małoletnich</li>
            <li>niealimentacji</li>
            <li>bójki i pobicie</li>
            <li>wypadków drogowych spowodowanych przez sprawcę będącego pod wpływem alkoholu lub środków odurzających</li>
            <li>przestępstw gospodarczych na szkodę przedsiębiorcy lub spółki</li>
            <li>przestępstwa przeciwko życiu i zdrowiu (w tym zabójstwo, nieumyślne spowodowanie śmierci)</li>
          </ul>
        `,
      },
      {
        title: 'Sprawy, które znamy najlepiej',
        description: `
          <ul>
            <li><strong>Przestępstwa przeciwko życiu i zdrowiu (w tym zabójstwo, nieumyślne spowodowanie śmierci).</strong> Prowadzimy sprawy dotyczące zabójstwa (art. 148 k.k.), w tym jego typów uprzywilejowanych, nieumyślnego spowodowania śmierci (art. 155 k.k.), ciężkiego i średniego uszczerbku na zdrowiu (art. 156 i 157 k.k.), narażenia na niebezpieczeństwo utraty życia lub zdrowia (art. 160 k.k.) oraz wypadków, w których śmierć lub uszczerbek następują w następstwie zaniedbań lub nieostrożności. Znamy niuanse kwalifikacji prawnej tych czynów, w tym granicę między zabójstwem popełnionym z zamiarem ewentualnym a nieumyślnym spowodowaniem śmierci, a także znaczenie obrony koniecznej i jej przekroczenia (art. 25 k.k.), co ma kluczowe znaczenie dla wymiaru odpowiedzialności. Bronimy podejrzanych i oskarżonych od pierwszych czynności w postępowaniu, w tym przy zatrzymaniu, przesłuchaniu i wniosku o tymczasowe aresztowanie, a także reprezentujemy pokrzywdzonych oraz rodziny ofiar (art. 52 k.p.k.), dochodząc dla nich zadośćuczynienia i odszkodowania.</li>
            <li><strong>Rozbój.</strong> Reprezentujemy osoby podejrzane i oskarżone o rozbój (art. 280 k.k.), w tym w odmianie kwalifikowanej, polegającej na posłużeniu się bronią lub innym niebezpiecznym narzędziem, a także o kradzież rozbójniczą (art. 281 k.k.) i wymuszenie rozbójnicze (art. 282 k.k.). Znamy różnicę między rozbojem a kradzieżą, pobiciem lub zwykłym wymuszeniem, ponieważ od tego, czy użyto przemocy lub groźby jej natychmiastowego użycia i w jakim celu, zależy kwalifikacja czynu i zagrożenie karą. Pomagamy również pokrzywdzonym, dochodząc naprawienia szkody i zadośćuczynienia za doznaną krzywdę oraz wspierając ich w roli oskarżyciela posiłkowego.</li>
            <li><strong>Oszustwo (w tym oszustwa internetowe oraz metoda na policjanta i na wnuczka).</strong> Prowadzimy sprawy dotyczące oszustwa (art. 286 k.k.), oszustwa komputerowego (art. 287 k.k.) i oszustw popełnianych w Internecie, m.in. na portalach ogłoszeniowych, w sklepach internetowych, przy fałszywych inwestycjach i płatnościach online, a także oszustw metodą „na policjanta”, „na wnuczka” czy „na pracownika banku”, często wiążących się z podszywaniem się pod funkcjonariusza publicznego (art. 227 k.k.). Znamy niuanse kwalifikacji prawnej, w tym granicę między oszustwem a zwykłym niewykonaniem umowy, która zależy od tego, czy sprawca miał zamiar wyrządzenia szkody już w chwili jej zawierania, oraz odpowiedzialność osób udostępniających rachunki bankowe (tzw. „słupów”), którym można przypisać współudział lub pranie pieniędzy (art. 299 k.k.). Bronimy podejrzanych i oskarżonych, a pokrzywdzonym pomagamy sporządzić zawiadomienie o przestępstwie, zabezpieczyć dowody i środki na rachunkach oraz dochodzić naprawienia szkody (art. 46 k.k.).</li>
            <li><strong>Przestępstwa narkotykowe.</strong> Prowadzimy sprawy dotyczące posiadania (art. 62 ustawy o przeciwdziałaniu narkomanii), udzielania, wytwarzania i obrotu środkami odurzającymi lub substancjami psychotropowymi (m.in. art. 55, 56 i 58 tej ustawy). Znamy niuanse kwalifikacji prawnej tych czynów, w tym różnicę między „wypadkiem mniejszej wagi” a przestępstwem podstawowym oraz między posiadaniem w znacznej a nieznacznej ilości, co ma kluczowe znaczenie dla wymiaru odpowiedzialności. Wskazujemy też na możliwość umorzenia postępowania w sprawach o posiadanie nieznacznej ilości na własny użytek (art. 62a tej ustawy) oraz na rozwiązania związane z leczeniem i rehabilitacją.</li>
            <li><strong>Bójka i pobicie.</strong> Reprezentujemy zarówno osoby oskarżone o udział w bójce lub pobiciu (art. 158 k.k.), jak i osoby pokrzywdzone takim zdarzeniem, dochodząc dla nich odszkodowania i zadośćuczynienia za doznaną krzywdę. Znamy niuanse kwalifikacji prawnej, w tym różnicę między bójką, pobiciem, naruszeniem nietykalności cielesnej (art. 217 k.k.) i spowodowaniem uszczerbku na zdrowiu (art. 157 k.k.) oraz znaczenie obrony koniecznej (art. 25 k.k.), od których zależy, czy sprawa toczy się z oskarżenia publicznego czy prywatnego, i jaka grozi kara.</li>
            <li><strong>Kradzież.</strong> Prowadzimy sprawy dotyczące kradzieży (art. 278 k.k.), kradzieży z włamaniem (art. 279 k.k.) oraz paserstwa (art. 291 k.k.), zarówno po stronie podejrzanych i oskarżonych, jak i pokrzywdzonych. Znamy niuanse kwalifikacji prawnej, w tym granicę między przestępstwem a wykroczeniem (art. 119 k.w.), która zależy od wartości skradzionego mienia, oraz wypadek mniejszej wagi (art. 278 § 3 k.k.) i ścigania na wniosek przy kradzieży na szkodę osoby najbliższej (art. 278 § 4 k.k.). Pomagamy też w wyborze rozwiązań korzystnych dla klienta, takich jak dobrowolne poddanie się karze, warunkowe umorzenie postępowania (art. 66 k.k.) czy naprawienie szkody.</li>
            <li><strong>Przestępstwa na tle seksualnym.</strong> Reprezentujemy osoby podejrzane i oskarżone o przestępstwa przeciwko wolności seksualnej i obyczajności (rozdział XXV k.k., w tym art. 197 k.k.), a także osoby pokrzywdzone takimi czynami. Znamy niuanse kwalifikacji prawnej i dowodowe, zwłaszcza w sprawach opartych głównie na zeznaniach pokrzywdzonego i opiniach biegłych, oraz rozwiązania chroniące pokrzywdzonych, takie jak przesłuchanie w warunkach oszczędzających (art. 185c k.p.k.) i wyłączenie jawności rozprawy. Sprawy prowadzimy dyskretnie i z najwyższą dbałością o godność obu stron.</li>
            <li><strong>Prowadzenie pojazdu pod wpływem i wypadki drogowe.</strong> Prowadzimy sprawy dotyczące prowadzenia pojazdu w stanie nietrzeźwości lub pod wpływem środka odurzającego (art. 178a k.k.), spowodowania wypadku drogowego (art. 177 k.k.), ucieczki z miejsca zdarzenia (art. 178 k.k.) oraz spraw o zakaz prowadzenia pojazdów i przepadek pojazdu. Znamy niuanse kwalifikacji prawnej, w tym granicę między wykroczeniem a przestępstwem zależną od stężenia alkoholu (art. 87 k.w. i art. 178a k.k.), a także wpływ nieumyślności i przyczynienia się pokrzywdzonego na wymiar odpowiedzialności. Reprezentujemy również poszkodowanych w wypadkach, pomagając w połączeniu postępowania karnego z dochodzeniem odszkodowań od sprawcy i ubezpieczyciela.</li>
            <li><strong>Przemoc domowa: znęcanie i stalking.</strong> Reprezentujemy osoby oskarżone o znęcanie się nad osobą najbliższą (art. 207 k.k.) lub uporczywe nękanie (art. 190a k.k.), jak również osoby dotknięte przemocą i stalkingiem. Pokrzywdzonym pomagamy uzyskać skuteczną ochronę, w tym nakaz opuszczenia wspólnie zajmowanego mieszkania i zakaz zbliżania się do pokrzywdzonego (art. 275a k.p.k.), a także zadbać o zabezpieczenie dowodów i udział w procesie w roli oskarżyciela posiłkowego. Oskarżonych wspieramy w ocenie, czy zarzucane zachowania wypełniają znamiona przestępstwa, w szczególności czy miały charakter uporczywy i czy naruszyły w istotny sposób prywatność lub poczucie bezpieczeństwa.</li>
            <li><strong>Niealimentacja.</strong> Prowadzimy sprawy dotyczące uporczywego uchylania się od obowiązku alimentacyjnego (art. 209 k.k.), zarówno po stronie osób podejrzanych i oskarżonych, jak i uprawnionych do alimentacji. Znamy niuanse kwalifikacji prawnej, w tym znaczenie uporczywości, wysokości zaległości (co najmniej równowartość trzech świadczeń okresowych) oraz rzeczywistych możliwości zarobkowych zobowiązanego. Pomagamy również w sprawach pokrewnych, takich jak egzekucja alimentów, wystąpienie o świadczenia z funduszu alimentów i ustalenie lub zmiana wysokości alimentów w postępowaniu cywilnym.</li>
            <li><strong>Przestępstwa gospodarcze.</strong> Prowadzimy sprawy dotyczące przestępstw gospodarczych i skarbowych, w tym niegospodarności (art. 296 k.k.), wyłudzenia kredytu lub dotacji (art. 297 k.k.), utrudniania zaspokojenia wierzycieli (art. 300 k.k.), prania pieniędzy (art. 299 k.k.), niezgłoszenia wniosku o upadłość spółki (art. 586 k.s.h.) oraz przestępstw i wykroczeń skarbowych. Reprezentujemy członków zarządów, przedsiębiorców i pokrzywdzone spółki, a także doradzamy w zakresie odpowiedzialności podmiotów zbiorowych i zapobiegania naruszeniom w firmie (compliance). Znamy niuanse oceny, kiedy ryzyko gospodarcze przeradza się w odpowiedzialność karną, co ma kluczowe znaczenie dla osób zarządzających majątkiem.</li>
          </ul>
        `,
      },
    ],
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
    subItems: [
      {
        title: 'Sprawy, które znamy najlepiej',
        description: `
          <ul>
            <li><strong>Rozwód i separacja.</strong> Prowadzimy sprawy o rozwód (art. 56 k.r.o.) i separację (art. 61¹ k.r.o.), zarówno na zgodny wniosek małżonków, jak i w sprawach spornych. Znamy niuanse dotyczące orzekania o winie lub jej zaniechania (art. 57 k.r.o.), od których zależy m.in. zakres obowiązku alimentacyjnego wobec byłego małżonka (art. 60 k.r.o.), oraz rozstrzygnięcia o władzy rodzicielskiej, kontaktach z dziećmi, alimentach na dzieci i korzystaniu ze wspólnego mieszkania. Doradzamy także w kwestiach związanych z mediacją i ugodowym zakończeniem sprawy, które często pozwala ograniczyć koszty i konflikt, zwłaszcza gdy w rodzinie są małoletnie dzieci.</li>
            <li><strong>Podział majątku wspólnego małżonków oraz rozliczenie nakładów z majątku osobistego na majątek wspólny (i odwrotnie).</strong> Prowadzimy sprawy o ustalenie składu majątku wspólnego i jego podział, w tym nieruchomości, przedsiębiorstw, samochodów, oszczędności i zobowiązań kredytowych. Znamy niuanse dotyczące ustalenia nierównych udziałów w majątku wspólnym z ważnych powodów (art. 43 § 2 k.r.o.), ustalenia daty ustania wspólności majątkowej oraz rozliczeń nakładów i wydatków pomiędzy majątkiem wspólnym a majątkami osobistymi małżonków (art. 45 k.r.o.), co często decyduje o końcowym wyniku sprawy. Reprezentujemy klientów zarówno w postępowaniu sądowym, jak i przy umownym podziale majątku.</li>
            <li><strong>Alimenty.</strong> Prowadzimy sprawy o alimenty na rzecz dzieci (art. 133 i n. k.r.o.) oraz małżonka, zarówno w trakcie małżeństwa (art. 27 k.r.o.), jak i po rozwodzie (art. 60 k.r.o.), a także o ich podwyższenie lub obniżenie w razie zmiany stosunków (art. 138 k.r.o.). Znamy niuanse oceny usprawiedliwionych potrzeb uprawnionego oraz możliwości zarobkowych i majątkowych zobowiązanego (art. 135 k.r.o.), w tym w sytuacji, gdy dochody są zaniżane lub trudne do ustalenia. W razie potrzeby wnosimy o zabezpieczenie alimentacyjne na czas trwania postępowania.</li>
            <li><strong>Ustalenie kontaktów z dzieckiem.</strong> Reprezentujemy rodziców, a także dziadków i rodzeństwo w sprawach o ustalenie lub zmianę sposobu utrzymywania kontaktów z dzieckiem (art. 113 i n. k.r.o.), w tym kontaktów w okresach świąt i wakacji. Znamy niuanse związane z zasadą dobra dziecka, która jest najważniejszym kryterium rozstrzygania, oraz z możliwością ograniczenia lub zawieszenia kontaktów, jeśli zagrażają one dziecku. Pomagamy również w egzekwowaniu ustalonych kontaktów, gdy drugi rodzic ich nie respektuje (art. 598¹⁵ i n. k.p.c.).</li>
            <li><strong>Ustalenie i zaprzeczenie ojcostwa.</strong> Prowadzimy sprawy o ustalenie ojcostwa, w tym po uznaniu dziecka (art. 72 i 73 k.r.o.), oraz o zaprzeczenie ojcostwa (art. 62 i n. k.r.o.), zarówno po stronie mężczyzn, jak i matek oraz pełnoletnich dzieci. Znamy niuanse dotyczące zakresu domniemania pochodzenia dziecka z małżeństwa, krótkich terminów do wniesienia pozwu oraz roli badań DNA jako dowodu w sprawie, od których zależy skuteczność powództwa. Dbamy o to, aby sprawa została przeprowadzona dyskretnie i z poszanowaniem dobra dziecka.</li>
            <li><strong>Ubezwłasnowolnienie oraz opieka nad osobą ubezwłasnowolnioną.</strong> Reprezentujemy wnioskodawców i uczestników postępowania o ubezwłasnowolnienie całkowite (art. 13 k.c.) lub częściowe (art. 16 k.c.), a także o jego uchylenie lub zmianę. Znamy niuanse dotyczące wymagań dowodowych, w tym opinii biegłych lekarzy i psychologa, oraz tego, że ubezwłasnowolnienie jest środkiem ostatecznym, stosowanym dopiero wtedy, gdy inne formy wsparcia nie wystarczają. Pomagamy również w sprawach o ustanowienie opiekuna (art. 145 i n. k.r.o.) lub kuratora (art. 178 § 2 i art. 183 k.r.o.), w rozliczaniu sprawowanej opieki oraz w uzyskiwaniu zgody sądu na czynności przekraczające zakres zwykłego zarządu majątkiem.</li>
            <li><strong>Wygaśnięcie obowiązku alimentacyjnego.</strong> Prowadzimy sprawy o uchylenie obowiązku alimentacyjnego, w szczególności gdy dziecko osiągnęło samodzielność finansową lub zaniechało nauki, gdy zmieniła się sytuacja życiowa stron (art. 138 k.r.o.) albo gdy obowiązek wobec byłego małżonka wygasa z mocy prawa, np. po zawarciu przez niego nowego małżeństwa lub po upływie pięciu lat od rozwodu w razie braku wyłącznej winy (art. 60 § 3 k.r.o.). Znamy niuanse dotyczące tego, że pełnoletność dziecka sama w sobie nie kończy obowiązku alimentacyjnego, oraz tego, że do czasu prawomocnego orzeczenia należy płacić zasądzone alimenty, aby nie narazić się na egzekucję lub odpowiedzialność karną.</li>
          </ul>
        `
      }
    ]
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
    subItems: [
      {
        title: 'Sprawy, które znamy najlepiej',
        description: `
          <ul>
            <li><strong>Stwierdzenie nabycia spadku.</strong> Prowadzimy sprawy o stwierdzenie nabycia spadku (art. 1025 k.c. oraz art. 669 i n. k.p.c.), zarówno na podstawie ustawy (art. 931 i n. k.c.), jak i testamentu (art. 941 i n. k.c.). Znamy niuanse dotyczące ustalenia kręgu spadkobierców i ich udziałów, sporów o ważność testamentu oraz wyboru między postępowaniem przed sądem a aktem poświadczenia dziedziczenia u notariusza, co ma znaczenie dla kosztów i czasu trwania sprawy. Pomagamy również w złożeniu oświadczenia o przyjęciu lub odrzuceniu spadku w terminie sześciu miesięcy (art. 1015 k.c.), od którego zależy odpowiedzialność za długi.</li>
            <li><strong>Dział spadku.</strong> Prowadzimy sprawy o dział spadku (art. 1035 i n. k.c. oraz art. 680 i n. k.p.c.) w drodze umowy między spadkobiercami lub postępowania sądowego, w tym z przyznaniem składników majątku jednemu ze spadkobierców i spłatą pozostałych. Znamy niuanse dotyczące ustalenia składu i wartości spadku, zaliczania na schedy darowizn otrzymanych od spadkodawcy (art. 1039 k.c.), rozliczeń nakładów i pożytków oraz długów spadkowych. Pomagamy również w połączeniu działu spadku ze zniesieniem współwłasności nieruchomości, gdy jest to korzystne dla uczestników.</li>
            <li><strong>Zachowek (w tym jego zapłata oraz obniżenie).</strong> Reprezentujemy osoby uprawnione do zachowku (art. 991 k.c.), czyli zstępnych, małżonka i rodziców, które zostały pominięte w testamencie lub otrzymały zbyt mało, a także spadkobierców i obdarowanych, od których dochodzi się zapłaty zachowku. Znamy niuanse dotyczące ustalenia jego wysokości, w tym zasad doliczania darowizn do spłaty (art. 994 k.c.), odpowiedzialności obdarowanego za uzupełnienie zachowku (art. 1000 k.c.) oraz wyjątkowej możliwości obniżenia należnej sumy w oparciu o zasady współżycia społecznego (art. 5 k.c.), m.in. gdy uprawniony rażąco naruszał więzi rodzinne. Pilnujemy również trzyletniego terminu przedawnienia roszczenia o zapłatę zachowku (art. 1007 k.c.).</li>
            <li><strong>Ważność testamentu (w tym jego unieważnienie).</strong> Prowadzimy sprawy o ustalenie ważności lub nieważności testamentu, zarówno notarialnego, jak i własnoręcznego (art. 949 k.c.), alograficznego czy ustnego (art. 951 i 952 k.c.). Znamy niuanse dotyczące wad formy, stanu wyłączającego świadome lub swobodne powzięcie decyzji oraz błędu lub groźby (art. 945 k.c.), które mogą prowadzić do unieważnienia testamentu, przy czym uchylenie się od skutków takiego oświadczenia jest możliwe tylko w terminie roku od dowiedzenia się o przyczynie, a nie później niż w 10 lat od otwarcia spadku (art. 946 k.c.). W sprawach testamentowych dużą rolę odgrywają dowody z opinii biegłych, zwłaszcza grafologa i lekarza.</li>
            <li><strong>Wydziedziczenie.</strong> Reprezentujemy zarówno osoby wydziedziczone, jak i spadkobierców powołujących się na wydziedziczenie, a także doradzamy spadkodawcom przy sporządzaniu testamentu. Znamy niuanse dotyczące przesłanek z art. 1008 k.c. (uporczywe postępowanie wbrew woli spadkodawcy i sprzeczne z zasadami współżycia społecznego, umyślne przestępstwo przeciwko spadkodawcy lub uporczywe niedopełnianie obowiązków rodzinnych), konieczności wskazania w testamencie przyczyny wydziedziczenia oraz znaczenia przebaczenia spadkodawcy (art. 1010 k.c.), od których zależy skuteczność wydziedziczenia. Wyjaśniamy też skutki wydziedziczenia dla zachowku i dla zstępnych wydziedziczonego (art. 1009 k.c.).</li>
            <li><strong>Uznanie spadkobiercy za niegodnego dziedziczenia.</strong> Prowadzimy sprawy o uznanie spadkobiercy za niegodnego (art. 928 k.c.), w szczególności gdy dopuścił się ciężkiego przestępstwa przeciwko spadkodawcy, podstępnie lub przemocą nakłonił go do sporządzenia lub odwołania testamentu albo uporczywie działał wbrew jego woli. Znamy niuanse dotyczące tego, że takie roszczenie można zgłosić tylko w terminie roku od dowiedzenia się o przyczynie niegodności, a nie później niż w trzy lata od otwarcia spadku (art. 928 § 2 k.c.), oraz że uznanie za niegodnego traktuje się tak, jakby spadkobierca nie dożył otwarcia spadku. Reprezentujemy również osoby, przeciwko którym takie roszczenie wniesiono.</li>
            <li><strong>Odpowiedzialność za długi spadkowe.</strong> Doradzamy spadkobiercom, czy przyjąć spadek, czy go odrzucić (art. 1012 i n. k.c.), i bronimy ich przed roszczeniami wierzycieli spadkodawcy. Znamy niuanse dotyczące tego, że brak oświadczenia w terminie oznacza przyjęcie spadku z dobrodziejstwem inwentarza (art. 1015 § 2 k.c.), przy którym spadkobierca odpowiada za długi tylko do wartości stanu czynnego spadku (art. 1031 § 2 k.c.), a przy przyjęciu wprost odpowiada całym majątkiem (art. 1030 k.c.). Pomagamy w sporządzaniu inwentarza, w sporach z wierzycielami oraz w sprawach o stwierdzenie, czy spadek nie jest nadmiernie zadłużony.</li>
          </ul>
        `
      }
    ]
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
    subItems: [
      {
        title: 'Sprawy, które znamy najlepiej',
        description: `
          <ul>
            <li><strong>Bieżąca obsługa prawna przedsiębiorstw.</strong> Zapewniamy stałą lub doraźną obsługę prawną przedsiębiorców prowadzących jednoosobową działalność gospodarczą oraz spółek, w tym udzielanie porad i opinii prawnych, opiniowanie dokumentów, przygotowywanie pism i uchwał organów spółek (Kodeks spółek handlowych), obsługę zmian w KRS i CEIDG oraz wsparcie w codziennych decyzjach biznesowych. Znamy niuanse działalności małych i średnich firm, w tym potrzebę szybkiej reakcji i przewidywalnych kosztów, dlatego współpracę można oprzeć na stałym miesięcznym wynagrodzeniu (abonamencie) albo rozliczać poszczególne sprawy osobno. Przy sprawach wymagających wiedzy specjalistycznej, takich jak prawo pracy, podatki czy ochrona danych osobowych, współpracujemy z zaufanymi specjalistami.</li>
            <li><strong>Przygotowywanie i negocjowanie umów handlowych.</strong> Sporządzamy, opiniujemy i negocjujemy umowy handlowe, takie jak umowy sprzedaży, dostawy, o świadczenie usług, współpracy, agencyjne, dystrybucyjne i franczyzowe, a także ogólne warunki współpracy i regulaminy. Znamy niuanse związane z zasadą swobody umów (art. 353¹ k.c.), która daje dużą elastyczność, ale wymaga precyzyjnego określenia zakresu odpowiedzialności, kar umownych (art. 483 k.c.), terminów płatności, zabezpieczeń (poręczenie, gwarancja, weksel) i klauzul rozstrzygania sporów. Dobrze napisana umowa najczęściej pozwala uniknąć sporu, a gdy do niego dojdzie, znacznie ułatwia obronę interesów klienta.</li>
            <li><strong>Dochodzenie i windykacja należności w obrocie gospodarczym (B2B).</strong> Prowadzimy kompleksowe działania windykacyjne wobec kontrahentów, od wezwania do zapłaty i negocjacji ugody, przez dochodzenie roszczeń w postępowaniu upominawczym, nakazowym (art. 485 i n. k.p.c.) lub zwykłym, po egzekucję komorniczą i zgłoszenie wierzytelności w postępowaniu upadłościowym dłużnika. Znamy niuanse wynikające z ustawy o przeciwdziałaniu nadmiernym opóźnieniom w transakcjach handlowych, która przyznaje wierzycielowi odsetki za opóźnienie w transakcjach handlowych oraz rekompensatę za koszty odzyskiwania należności (równowartość 40, 70 lub 100 euro, zależnie od kwoty), a także możliwość wpisu dłużnika do rejestru dłużników. Wspieramy również przedsiębiorców, którym zarzuca się zaległość, w negocjowaniu rozłożenia płatności na raty i obronie przed nieuzasadnionymi żądaniami.</li>
            <li><strong>Spory z kontrahentami dotyczące niewykonania lub nienależytego wykonania umów handlowych.</strong> Prowadzimy sprawy dotyczące spóźnionych lub niekompletnych dostaw, wadliwych towarów i usług, odstąpienia od umowy (art. 491 k.c.), naliczania i miarkowania kar umownych (art. 483 i 484 k.c.) oraz odszkodowań za niewykonanie zobowiązania (art. 471 k.c.), w tym utraconych korzyści. Znamy niuanse oceny staranności wymaganej od profesjonalisty (art. 355 § 2 k.c.), obowiązków kupującego związanych z badaniem towaru i zawiadomieniem o wadach w obrocie między przedsiębiorcami (art. 563 k.c.) oraz możliwości zmiany lub rozwiązania umowy w razie nadzwyczajnej zmiany stosunków (art. 357¹ k.c.). Przy umowach z kontrahentami zagranicznymi oceniamy również prawo właściwe i właściwość sądu.</li>
            <li><strong>Reprezentacja przed sądami gospodarczymi oraz w postępowaniach mediacyjnych i arbitrażowych.</strong> Reprezentujemy przedsiębiorców w sprawach gospodarczych przed sądami rejonowymi i okręgowymi, w postępowaniu odrębnym w sprawach gospodarczych (art. 458¹ i n. k.p.c.), a także w mediacji (art. 183¹ i n. k.p.c.) oraz w postępowaniu przed sądem polubownym (art. 1154 i n. k.p.c.), jeśli strony zawarły zapis na sąd polubowny. Znamy niuanse specyfiki postępowania w sprawach gospodarczych, w tym rygory dowodowe i szczegółowe wymogi pism procesowych, dlatego już na etapie planowania sporu dbamy o zebranie dokumentów i dowodów. Wskazujemy też, kiedy szybsza i tańsza ugoda przed mediatorem lub arbitrem lepiej służy interesom firmy niż długi proces.</li>
          </ul>
        `
      }
    ]
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
    subItems: [
      {
        title: 'Sprawy, które znamy najlepiej',
        description: `
          <ul>
            <li><strong>Nawiązanie i rozwiązanie stosunku pracy (w tym zwolnienia dyscyplinarne i grupowe).</strong> Prowadzimy sprawy dotyczące zawierania, zmiany i kończenia umów o pracę, zarówno po stronie pracowników, jak i pracodawców. Znamy niuanse dotyczące wypowiedzenia umowy i obowiązku wskazania przyczyny (art. 30 k.p.), rozwiązania umowy bez wypowiedzenia z winy pracownika za ciężkie naruszenie obowiązków w terminie jednego miesiąca od uzyskania wiadomości o przyczynie (art. 52 k.p.), ochrony szczególnej niektórych pracowników, np. w okresie przedemerytalnym (art. 39 k.p.) oraz odróżnienia stosunku pracy od umów cywilnoprawnych (art. 22 k.p.). W zwolnieniach grupowych pomagamy pracodawcom przeprowadzić procedurę zgodnie z ustawą o szczególnych zasadach rozwiązywania z pracownikami stosunków pracy z przyczyn niedotyczących pracowników, a pracownikom — sprawdzić, czy zwolnienie było zgodne z prawem.</li>
            <li><strong>Odwołania od wypowiedzenia lub rozwiązania umowy o pracę.</strong> Reprezentujemy pracowników w sprawach o uznanie wypowiedzenia za bezskuteczne, o przywrócenie do pracy lub odszkodowanie (art. 45 i 56 k.p.), a pracodawców w obronie przed takimi roszczeniami. Znamy niuanse dotyczące bardzo krótkich terminów na wniesienie odwołania do sądu pracy (siedem dni od doręczenia wypowiedzenia i czternaście dni od doręczenia oświadczenia o rozwiązaniu umowy bez wypowiedzenia, art. 264 k.p.), możliwości ich przywrócenia (art. 265 k.p.) oraz oceny zasadności i konkretności przyczyny wskazanej przez pracodawcę, od których zależy wynik sprawy. Pomagamy również w negocjowaniu ugody i rozwiązania umowy na korzystnych warunkach, co często pozwala uniknąć długiego procesu.</li>
            <li><strong>Mobbing i dyskryminacja w miejscu pracy.</strong> Prowadzimy sprawy dotyczące mobbingu (art. 94³ k.p.) oraz nierównego traktowania i dyskryminacji ze względu na płeć, wiek, niepełnosprawność, przekonania, stan cywilny, rodzicielstwo czy inne kryteria, a także molestowania (art. 11³ i art. 18³a i n. k.p.). Znamy niuanse dowodowe tych spraw, w tym pojęcie uporczywości i długotrwałości (dlatego nie każdy konflikt w pracy jest mobbingiem), rolę dokumentacji, korespondencji i zeznań świadków oraz roszczenia przysługujące pokrzywdzonym: zadośćuczynienie, odszkodowanie za rozstrój zdrowia lub odszkodowanie w razie rozwiązania umowy z powodu mobbingu. Wspieramy również pracodawców we wdrażaniu procedur antymobbingowych i antydyskryminacyjnych oraz w obronie przed nieuzasadnionymi zarzutami.</li>
            <li><strong>Dochodzenie zaległego wynagrodzenia oraz innych świadczeń pracowniczych.</strong> Prowadzimy sprawy o zapłatę zaległego wynagrodzenia (art. 80 k.p.), wynagrodzenia za nadgodziny wraz z dodatkami (art. 151¹ k.p.), ekwiwalentu za niewykorzystany urlop (art. 171 k.p.), odpraw, premii i nagród oraz odsetek za opóźnienie. Znamy niuanse dotyczące trzyletniego terminu przedawnienia roszczeń pracowniczych (art. 291 k.p.), dowodzenia pracy w godzinach nadliczbowych oraz sytuacji, gdy pracodawca jest niewypłacalny i możliwe jest uzyskanie świadczeń z Funduszu Gwarantowanych Świadczeń Pracowniczych. W razie uporczywego naruszania praw pracownika oceniamy również możliwość odpowiedzialności karnej pracodawcy (art. 218 k.k.).</li>
            <li><strong>Wypadki przy pracy oraz choroby zawodowe.</strong> Reprezentujemy pracowników oraz ich rodziny w sprawach o świadczenia z ubezpieczenia wypadkowego, w tym jednorazowe odszkodowanie za uszczerbek na zdrowiu, zasiłek chorobowy, świadczenie rehabilitacyjne oraz renty (ustawa o ubezpieczeniu społecznym z tytułu wypadków przy pracy i chorób zawodowych), oraz w odwołaniach od decyzji ZUS do sądu ubezpieczeń społecznych w terminie miesiąca od doręczenia decyzji. Znamy niuanse związane z protokołem powypadkowym, kwalifikacją zdarzenia jako wypadku przy pracy oraz stwierdzeniem choroby zawodowej przez organy sanitarne. Pomagamy też dochodzić od pracodawcy zadośćuczynienia i odszkodowania uzupełniającego, jeśli wypadek wynikał z niedopełnienia obowiązków w zakresie bezpieczeństwa i higieny pracy.</li>
          </ul>
        `
      }
    ]
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
    subItems: [
      {
        title: 'Sprawy, które znamy najlepiej',
        description: `
          <p><strong>Upadłość konsumencka.</strong> Prowadzimy sprawy o ogłoszenie upadłości osób fizycznych nieprowadzących działalności gospodarczej, w tym także byłych przedsiębiorców, którzy zakończyli działalność (art. 491¹ i n. ustawy Prawo upadłościowe), od oceny sytuacji finansowej i przygotowania wniosku, przez reprezentację przed sądem i syndykiem, po uzyskanie oddłużenia. Znamy niuanse dotyczące oceny, czy dłużnik jest niewypłacalny, czy niewypłacalność nie wynika z umyślnego lub rażąco niedbałego działania, oraz skutków czynności dokonanych przed ogłoszeniem upadłości, takich jak darowizny czy sprzedaż majątku, które mogą być uznane za bezskuteczne wobec masy upadłości (art. 127 i n. Prawa upadłościowego). Pomagamy sporządzić wykaz majątku i listę wierzycieli, złożyć wniosek na urzędowym formularzu, współpracować z syndykiem w likwidacji majątku oraz przygotować plan spłaty wierzycieli, po wykonaniu którego pozostałe zobowiązania mogą zostać umorzone. Wskazujemy też, które długi nie podlegają umorzeniu (m.in. alimenty, renty odszkodowawcze i niektóre odszkodowania za czyny umyślne), oraz rozwiązania dotyczące zamieszkiwanego lokalu i minimalnego utrzymania dłużnika. W razie potrzeby doradzamy, czy lepszym wyjściem nie będzie ugoda z wierzycielami lub inny sposób restrukturyzacji zadłużenia.</p>
        `
      }
    ]
  },
];

export default function Specializations() {
  const { hash, key } = useLocation();
  const [expanded, setExpanded] = useState<number | false>(false);
  const [expandedSub, setExpandedSub] = useState<number | false>(false);

  // Wybór specjalizacji z menu (#spec-N) rozwija odpowiedni kafelek i przewija do niego
  useEffect(() => {
    if (!hash.startsWith('#spec-')) return;
    const index = parseInt(hash.replace('#spec-', ''), 10);
    if (isNaN(index) || index >= specializations.length) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setExpanded(index);
    setExpandedSub(false);
    const timer = setTimeout(() => {
      const element = document.getElementById(`spec-${index}`);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [hash, key]);

  const handleChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
    setExpandedSub(false); 
  };

  const handleSubChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedSub(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
      <Seo {...PAGE_META['/specjalizacje']} path={PATHS.specializations} jsonLd={breadcrumbLd([{ name: 'Strona główna', path: '/' }, { name: 'Specjalizacje', path: PATHS.specializations }])} />
      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em' }}>
            SPECJALIZACJE
          </Typography>
          <Typography variant="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            Obszary praktyki kancelarii
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 720, mx: 'auto' }}>
            Wybierz obszar, aby poznać zakres pomocy prawnej. Każda sprawa jest analizowana indywidualnie i z pełnym zaangażowaniem.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {specializations.map(({ title, Icon, description, subItems }, index) => {
            const isExpanded = expanded === index;

            return (
              <Accordion
                key={title}
                expanded={isExpanded}
                id={`spec-${index}`} 
                onChange={handleChange(index)}
                disableGutters
                elevation={0}
                sx={{
                  border: '1px solid',
                  borderColor: isExpanded ? 'secondary.main' : 'divider',
                  borderRadius: '8px !important',
                  bgcolor: 'background.paper',
                  transition: 'all 0.3s ease',
                  '&:before': {
                    display: 'none',
                  },
                  '&:hover': {
                    borderColor: 'secondary.main',
                    boxShadow: '0 4px 20px rgba(197,165,114,0.08)',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    isExpanded ? (
                      <RemoveIcon sx={{ color: 'secondary.main' }} />
                    ) : (
                      <AddIcon sx={{ color: 'secondary.main' }} />
                    )
                  }
                  sx={{
                    p: { xs: 2, md: 3 },
                    '& .MuiAccordionSummary-content': {
                      alignItems: 'center',
                      m: 0,
                    },
                  }}
                >
                  <Icon sx={{ fontSize: 32, color: 'secondary.main', mr: 2 }} />
                  <Typography variant="h5" component="h2" sx={{ m: 0 }}>
                    {title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: { xs: 2, md: 4 }, pt: 0 }}>
                  
                  {description && (
                    <Box
                      sx={{ color: 'text.secondary', lineHeight: 1.8, textAlign: 'justify', ...richTextStyles }}
                      dangerouslySetInnerHTML={{ __html: sanitizeHtml(description) }}
                    />
                  )}

                  {subItems && (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 1 }}>
                      {subItems.map((sub, subIdx) => {
                        const isSubExpanded = expandedSub === subIdx;
                        return (
                          <Accordion
                            key={sub.title}
                            expanded={isSubExpanded}
                            onChange={handleSubChange(subIdx)}
                            disableGutters
                            elevation={0}
                            sx={{
                              border: '1px solid',
                              borderColor: 'divider',
                              borderRadius: '6px !important',
                              bgcolor: 'transparent',
                              '&:before': { display: 'none' },
                            }}
                          >
                            <AccordionSummary
                              expandIcon={
                                isSubExpanded ? (
                                  <RemoveIcon fontSize="small" sx={{ color: 'secondary.main' }} />
                                ) : (
                                  <AddIcon fontSize="small" sx={{ color: 'secondary.main' }} />
                                )
                              }
                              sx={{ minHeight: 48, '& .MuiAccordionSummary-content': { my: 1 } }}
                            >
                              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                                {sub.title}
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ pt: 0, pb: 2, px: 2 }}>
                              <Box
                                sx={{ color: 'text.secondary', lineHeight: 1.7, textAlign: 'justify', ...richTextStyles }}
                                dangerouslySetInnerHTML={{ __html: sanitizeHtml(sub.description) }}
                              />
                            </AccordionDetails>
                          </Accordion>
                        );
                      })}
                    </Box>
                  )}

                </AccordionDetails>
              </Accordion>
            );

          })}
          <Box sx={{ mt: { xs: 6, md: 10 }, textAlign: 'center' }}>
          <Card sx={{ bgcolor: 'primary.main', color: 'common.white', py: { xs: 5, md: 7 }, px: { xs: 3, md: 5 } }}>
            <CardContent>
              <Typography variant="h3" component="h2" sx={{ color: 'secondary.main', mb: 2 }}>
                Skontaktuj się z nami
              </Typography>
              <Typography align='justify'variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4 }}>
                Niezależnie od tego, z jaką sprawą Państwo się do nas zwracają — nawet jeśli nie jest ona wprost wymieniona powyżej — zapraszamy do kontaktu. Zakres naszej praktyki stale się rozwija, a jeśli dana sprawa wykracza poza naszą bieżącą specjalizację, wskażemy właściwy kierunek działania lub zaufanego specjalistę. Pierwsza rozmowa pomoże ustalić, jak możemy pomóc i jakie kroki będą najbardziej skuteczne w Państwa sytuacji.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Typography
                  variant="h6"
                  component="a"
                  href="tel:+48505810279"
                  sx={{ color: 'secondary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  📞 +48 505 810 279
                </Typography>
                <Typography
                  variant="h6"
                  component="a"
                  href="mailto:kancelaria@radcaprawnylegnica.com.pl"
                  sx={{ color: 'secondary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  ✉️ kancelaria@radcaprawnylegnica.com.pl
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Box>
        </Box>
      </Box>
    </Box>
  );
}