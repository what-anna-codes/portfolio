import { IProject } from "./projects-en";

export const projects_pl: IProject[] = [

  {
    id: "project-001",
    name: "SET",
    description: "Przeglądarkowa wersja gry karcianej SET.",
    sections: [{
      title: "zakres", content: `
    <ul>
      <li>wykorzystanie elementów SVG do wiernego odwzorowania kształtów symboli z oryginalnej gry</li>
      <li>opracowanie algorytmów generowania talii i weryfikacji ruchów, zgodnych z matematycznymi zasadami gry</li>
      <li>uproszczenie warstwy stylów poprzez zastąpienie SCSS standardowym CSS</li>
      <li>dodanie licznika czasu i zapisu wyników z wykorzystaniem headless CMS Hygraph</li>
    </ul>
`}],
    stack: [
      "Typescript",
      "React.js",
      "Apollo Client",
      "Hygraph",
      "motion.js"
    ],
    image: "set.png",
    type: "play",
    code: "https://github.com/what-anna-codes/set-online",
    demo: "https://what-anna-codes.github.io/set-online/"
  },
  {
    id: "project-002",
    name: "autoresponder",
    sections: [
      {
        title: "główny cel",
        content: "Opracowanie modułu do zautomatyzowanej i ustandaryzowanej obsługi korespondencji elektronicznej.",
      }, {
        title: "kontekst biznesowy",
        content: `Duża liczba rutynowo obsługiwanych wiadomości generowała dwa główne problemy:
    <ul>
      <li><strong>czasochłonność</strong> - odpowiadanie na wiadomości wymagało znacznych nakładów czasu;</li>
      <li><strong>niespójność komunikacji</strong> - sposób odpowiedzi zależał od indywidualnych decyzji pracowników.</li>
    </ul>`},
      {
        title: "solutions",
        content: `
    <ul>
      <li><strong>zaprojektowanie nowej podstrony</strong> zgodnej z UI projektu i podzielonej na trzy panele: informacyjny, operacyjny oraz procesowy</li>
      <li><strong>uporządkowanie procesu obsługi</strong> na podstawie istniejącego grafu procedury; wyodrębnienie dwóch ścieżek i podział ich na konkretne etapy realizacji</li>
      <li><strong>udostępnienie procedury użytkownikowi</strong> w formie interaktywnego menu etapów, prezentującego kolejne zadania i prowadzącego do właściwych narzędzi</li>
      <li><strong>opracowanie paneli operacyjnych dla poszczególnych etapów</strong>, zawierających opis zadania, niezbędne narzędzia oraz wyniki ukończonych działań</li>
      <li><strong>wdrożenie rozwiązań AI</strong> do wyboru scenariusza odpowiedzi i tworzenia szkicu wiadomości; przygotowanie edytora promptów z możliwością edycji, zapisu zmian lokalnie lub globalnie oraz wyboru modelu</li>
      <li><strong>wprowadzenie trybu automatycznego</strong>, realizującego kolejne kroki procedury bez ręcznej obsługi</li>
    </ul>`,
      }],
    stack: [
      "(ASP.NET Core) Blazor",
      "MongoDB"
    ],
    image: "responder.png",
    type: "work"
  },
  {
    id: "project-005",
    name: "wizualizacja stanu prac",
    description: "Podsumowanie rocznych wyników zespołu na podstawie raportów oraz przygotowanie interaktywnej wizualizacji danych.",
    sections: [{
      title: "problems",
      content: `
    <ul>
      <li><strong>brak znormalizowanej struktury</strong> - pracownicy korzystali z różnych szablonów raportów</li>
      <li><strong>błędy i braki w źródłach</strong> wpływające na wyniki zestawienia</li>
      <li>konieczność wykonywania licznych ręcznych korekt podczas przygotowywania zestawienia w Excelu</li>
    </ul>`},
    {
      title: "solutions",
      content: `
    <ul>
      <li><strong>zastąpienie Excela dedykowaną wizualizacją</strong>, lepiej dopasowaną do celu i charakteru zestawienia</li>
      <li><strong>normalizacja raportów w Power Query</strong> poprzez indywidualne sekwencje transformacji; ujednolicenie nazewnictwa, korekta literówek i uzupełnienie brakujących dat przy zachowaniu przejrzystości wprowadzonych zmian</li>
      <li><strong>stworzenie interaktywnej wizualizacji w Power BI</strong>, automatycznie aktualizowanej na podstawie danych z SharePoint i przygotowanej do ponownego wykorzystania w kolejnych okresach raportowych</li>
    </ul>`}],
    stack: [
      "Power Query",
      "PowerBI"
    ],
    image: "",
    type: "work"
  },
  {
    id: "project-003",
    name: "blog firmowy",
    description: "Wdrożenie firmowego bloga jako części oficjalnej strony internetowej we współpracy z zespołami backendowym i contentowym.",
    sections: [{
      title: 'zakres', content: `<ul>
      <li><strong>konfiguracja CMS Strapi</strong> na podstawie wymagań zespołu marketingowego; zdefiniowanie modeli treści, pól oraz zasad wyboru artykułów do sekcji „Polecane”</li>
      <li><strong>integracja Strapi z edytorem rich text</strong> oraz określenie dostępnych opcji formatowania, tak aby połączyć elastyczność pracy zespołu ze spójnością wizualną serwisu</li>
      <li><strong>wdrożenie bloga na podstawie projektu graficznego</strong>, obejmującego stronę główną z wyróżnionymi artykułami i historią publikacji z infinite scroll oraz stronę pojedynczego artykułu</li>
      <li><strong>przeprowadzenie szkoleń z obsługi CMS</strong> dla zespołu</li>
      <li><strong>aktualizacja dokumentacji komponentów</strong> w Storybooku</li>
    </ul>`}],
    stack: [
      "Strapi",
      "ckeditor",
      "Typescript",
      "Next.js",
      "Apollo Client",
      "styled-components",
      "Storybook"
    ],
    image: "blog.png",
    type: "work"
  },
  {
    id: "project-004",
    name: "Panel użytkownika",
    description: "Wdrożenie modułu panelu użytkownika nowej strony internetowej we współpracy z zespołem backendowym. Zakres obejmował historię zamówień, dane konta, metody płatności oraz sekcję zgód marketingowych.",
    sections: [{
      title: "zakres implementacji", content: `<ul>
      <li><strong>wdrożenie responsywnych podstron w Next.js</strong>, w tym komponentu karty płatniczej odwzorowanego pixel perfect oraz historii zamówień z infinite scroll</li>
      <li><strong>opracowanie formularzy w Formiku</strong> z maskami pól, walidacją Yup, integracją z API i obsługą stanów interfejsu</li>
      <li><strong>integracja z systemem obsługi kart płatniczych</strong>, obejmująca przekierowania między aplikacją a systemem płatniczym oraz dynamiczną aktualizację danych z wykorzystaniem pollingu</li>
      <li><strong>dokumentacja komponentów</strong> w Storybooku</li>
    </ul>`}],
    image: "user_panel.png",
    stack: [
      "Typescript",
      "Next.js",
      "Apollo Client",
      "formik",
      "yup",
      "styled-components",
      "Storybook"
    ],
    type: "work"
  },
  {
    id: "project-007",
    name: "protokoły odbiorowe",
    description: `Projekt obejmował stworzenie kompleksowego systemu automatyzującego procedurę
     odbioru lokali na potrzeby jednego z wiodących przedsiębiorstw budowlanych w Polsce.
     Dzięki nowemu rozwiązaniu inspektorzy otwierają aplikację, korzystając z przygotowanych kodów QR,
      rejestrują wyniki inspekcji na miejscu, a następnie w kilka sekund generują estetyczne protokoły odbiorowe
      dostosowane do wymagań biznesowych inwestora.`,
    sections: [
      {
        title: "zakres",
        content: `
    <ul>
      <li>wygenerowanie kodów QR ułatwiających inspektorom nawigację po aplikacji</li>
      <li>integracja danych ze stworzonej uprzednio aplikacji dla inspektorów oraz wewnętrznej aplikacji firmy w jednym raporcie PowerBI</li>
      <li>opracowanie wzorca protokołu odbiorowego, który posłużył do wygenerowania dokumentacji odbiorów kilkuset nowopowstałych lokali</li>
     </ul>`}],
    stack: [
      "PowerBI",
      "Power Query",
      "Python"
    ],
    image: "inspection_reports.png",
    type: "work",
  },
  {
    id: "project-008",
    name: "portfolio",
    description: "Cała strona tylko o mnie...?",
    sections: [{
      title: 'tytul', content: `
    <ul>
      <li>wykorzystanie elementów SVG do wiernego odwzorowania kształtów symboli z oryginalnej gry</li>
      <li>opracowanie algorytmów generowania talii i weryfikacji ruchów, zgodnych z matematycznymi zasadami gry</li>
      <li>uproszczenie warstwy stylów poprzez zastąpienie SCSS standardowym CSS</li>
      <li>dodanie licznika czasu i zapisu wyników z wykorzystaniem headless CMS Hygraph</li>
    </ul>`}],
    stack: [
      "Typescript",
      "React.js",
      "CSS3",
      "motion.js"
    ],
    image: "portfolio.png",
    type: "play",
    code: "https://github.com/what-anna-codes/portfolio",
    demo: "https://what-anna-codes.github.io/portfolio/"
  },
]