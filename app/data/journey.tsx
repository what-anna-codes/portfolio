export const journey_pl = {
  title: "droga",
  moments: [
    {
      id: "event_0001",
      position: 3,
      date: "czerwiec 2026",
      title: "Portfolio, które opowiada historię",
      lead: "Czy portfolio powinno przede wszystkim pokazywać projekty, czy człowieka, który je stworzył? Ten projekt zaczął się od prostego pytania o układ strony, a skończył refleksją nad tym, jak sam interfejs potrafi opowiadać historię.",
      description: `
        <p>Skończyłam swoje portfolio. I największym wyzwaniem
         wcale nie było dopracowanie implementacji, ale  odpowiedź na jedno
         pytanie: <strong>co ma być głównym elementem tej strony?</strong></p>
        <p>Najczęściej wybór pada na galerię projektów. Niby rozsądnie.
        Tyle że ja nie jestem po prostu zbiorem moich projektów.</p>
        <p><strong>Spojrzałam na to z perspektywy odbiorcy.</strong>
        Jeśli ktoś odwiedza moje portfolio, to prawdopodobnie chce poznać mnie —
        bo jeśli zdecyduje się na kontakt, będzie rozmawiać ze mną,
        a nie z listą moich realizacji.</p>
        <p>Dlatego zamiast galerii wybrałam <strong>timeline,
        który sprawia, że każdy projekt zaczyna wyglądać jak kolejny etap rozwoju</strong>,
        a całe portfolio zyskuje bardziej osobisty charakter.</p>
        <p>Problem rozwiązany, więc po co o tym pisać?
        Bo to ciekawy przykład, jak <strong>odbiór strony budujemy poprzez UI</strong>.
        Zamiast opowiadać o sobie w rozbudowanej sekcji „O mnie”,
        można zrobić to poprzez samą strukturę interfejsu.
        Dla mnie, osoby od frontendu, tóra nieuchronnie styka się również z zagadnieniami UI/UX,
        było to fajne przypomnienie, że projektowanie interfejsów to także projektowanie narracji.
        </p>`,
      picture: "portfolio.png",
      projectId: "project-008",
    },
    {
      id: "event_0007",
      position: 3,
      date: "czerwiec 2026",
      title: "SET - idea sprzed lat, deployment sprzed tygodnia",
      lead: "Najtrudniejszą częścią tego projektu nie było programowanie, lecz... zakończenie pracy. Historia o tym, dlaczego umiejętność odpuszczania kolejnych funkcjonalności bywa równie cenna jak ich tworzenie.",
      description: `
        <p>Przeglądarkową wersję gry SET zaczęłam tworzyć jeszcze przed pierwszą pracą w branży. Po latach wróciłam do projektu, przepisałam znaczną część kodu i przygotowałam grę do publikacji.</p>
        <p>Największym problemem nie był kod, lecz stale rosnący zakres: dodatkowe zasady, animacje, tutorial. W pracy komercyjnej nauczyłam się kontrolować scope, ale w projekcie prywatnym znacznie trudniej było postawić końcową kropkę.</p>
        <p>Pomógł backlog. Pomysły na dalszy rozwój nie zniknęły, ale przestały blokować publikację. Projekt przypomniał mi, że świadome odłożenie funkcjonalności na później również jest decyzją projektową.</p>`,
      picture: "set.png",
      projectId: "project-001",
    },
    {
      id: "event_00010",
      position: 1,
      date: "marzec 2026",
      title: "może programowanie z AI nie jest takie złe?",
      lead: "Czy AI rzeczywiście pomaga programować lepiej, czy tylko szybciej? Kilka miesięcy pracy wystarczyło, by całkowicie zmienić moje podejście do wykorzystania modeli językowych w codziennej pracy developera.",
      description: `
        <p>Długo podchodziłam ostrożnie do kodowania z pomocą AI. Zależało mi na rozwijaniu własnych umiejętności i unikaniu zależności od narzędzia, którego dostępność może się zmienić.</p>
        <p>Nowa praca wymagała jednak szybkiego wejścia w ASP.NET Core. Zaczęłam korzystać z edytora zintegrowanego z modelami AI i szybko zauważyłam, że ich największą wartością nie jest samo generowanie kodu, lecz wyjaśnianie nowych zagadnień w kontekście konkretnego projektu.</p>
        <p>Wypracowałam własny model pracy: automatyzuję zadania, które dobrze rozumiem, a przy nowych technologiach wykorzystuję AI jako narzędzie wspierające naukę i analizę.</p>`,
      picture: "responder.png",
      projectId: "project-002",
    },
    {
      id: "event_0009",
      position: 1,
      date: "luty 2026",
      title: "wiele problemów, jedna odpowiedź: dashboardy PowerBI",
      lead: "Pierwszy projekt z Power BI okazał się początkiem znacznie większej przygody niż tylko tworzenie dashboardów. To historia o wejściu w świat analizy danych, pracy z klientami i cyfrowej transformacji przedsiębiorstw.",
      description: `
          <p>Pierwsze wdrożenie PowerBI otworzyło mi drzwi do świata
          analizy danych. <strong>Otrzymałam propozycję pracy w startupie Budowa 2.0,
          zajmującym się cyfryzacją przedsiębiorstw budowlanych</strong>.
          Firma identyfikowała wspólnie z klientem obszary wymagające automatyzacji,
          a następnie dostarczała dedykowane do tego celu narzędzia cyfrowe (agentów AI, aplikacje, dashboardy).</p>
          <p><strong>Moja rola, choć w założeniu głównie techniczna,
          obejmowała również aktywny udział w fazie koncepcyjnej poszczególnych projektów,
          koordynację spotkań z klientami, oraz wsparcie w organizacji przepływów pracy
          w bardzo młodej firmie</strong>. Miałam okazję zobaczyć "od środka" proces modernizacji
          dużych i średniej wielkości przedsiębiorstw, uczestniczyć w negocjacjach,
          a także intensywnie rozwinąć swoje umiejętności w zakresie analizy danych.</p>
          <p>Stopniowo jednak coraz bardziej pochłaniały mnie zadania programistyczne - i czułam,
          że mimo atrakcyjności nowych wyzwań, chciałabym wrócić do kodowania na pełen etat.</p>
      `,
      picture: "inspection_reports.png",
      projectId: "project-007",
    },
    {
      id: "event_0002",
      position: 2,
      date: "listopad 2025",
      title: "krok w świat wizualizacji danych",
      lead: "Jak połączyć kilka niespójnych raportów, nie zmuszając nikogo do zmiany sposobu pracy? Ten projekt pokazuje, że dobre rozwiązanie techniczne często polega na ułatwianiu życia użytkownikom, a nie narzucaniu im nowych procesów.",
      description: `
        <p>Otrzymałam pięć rocznych raportów w Excelu, różniących się strukturą i zawierających własne zestawy błędów. Celem było ich ujednolicenie i przygotowanie wspólnego podsumowania bez zmiany sposobu pracy zespołu.</p>
        <p>Dane uporządkowałam w Power Query, a wyniki zwizualizowałam w Power BI. Pracownicy mogli nadal korzystać ze swoich raportów, natomiast lider otrzymał spójny i czytelny widok danych.</p>
        <p>Ten projekt skłonił mnie do dalszego poznawania Power BI i możliwości łączenia transformacji danych z interaktywną prezentacją wyników.</p>`,
      projectId: "project-005",
    },
    {
      id: "event_0003",
      position: 3,
      date: "2025",
      title: "trudne słowo: odpowiedzialność",
      lead: "Pierwszy projekt realizowany od początku do końca zmienia perspektywę. Nagle liczy się nie tylko kod, ale również decyzje projektowe, komunikacja z użytkownikami i odpowiedzialność za cały produkt.",
      description: `
        <p>Firmowy blog był pierwszym projektem powierzonym mi w całości. Wcześniej rozwijałam pojedyncze moduły istniejących systemów.</p>
        <p>Tym razem uczestniczyłam w całym procesie: od ustalenia wymagań z zespołem contentowym i zaprojektowania struktury danych, przez implementację interfejsu, po wdrożenie CMS i szkolenie użytkowników.</p>
        <p>Pozwoliło mi to spojrzeć na aplikację jako całość i lepiej zrozumieć odpowiedzialność za produkt wykraczającą poza samą implementację.</p>`,
      picture: "blog.png",
      projectId: "project-003",
    },
    {
      id: "event_0004",
      position: 3,
      title: "oficjalnie przestałam być juniorką",
      date: "styczeń 2025",
      lead: "Co naprawdę odróżnia mid developera od juniora? Nie liczba lat doświadczenia, lecz sposób myślenia o kodzie, zmianach i problemach, które dopiero mogą się pojawić.",
      description: `
        <p>Awans na stanowisko mid developera skłonił mnie do zastanowienia się, co faktycznie odróżnia ten poziom od juniora. Samodzielność była ważna od początku; znacznie trudniejsze okazało się przewidywanie kosztu zmian, ryzyk i przyszłych potrzeb biznesowych.</p>
        <p>Praca nad długoterminowymi projektami pokazała mi, że nie da się przewidzieć wszystkiego. Dlatego coraz większą wagę zaczęłam przywiązywać do utrzymywalności, kompozycji i modułowości.</p>
        <p>Zamiast projektować kod pod jedną przewidywaną przyszłość, staram się tworzyć rozwiązania, które można sprawnie rozwijać i modyfikować.</p>`,
    },
    {
      id: "event_0005",
      position: 3,
      title: "pierwszy duży release! *confetti*",
      date: "2024",
      lead: "Dopiero po wdrożeniu zrozumiałam skalę projektu — w dwa miesiące odwiedziło go ponad pół miliona użytkowników. To doświadczenie na długo zmieniło sposób, w jaki oceniam wartość technicznych decyzji.",
      description: `
        <p>Uruchomiliśmy nową platformę sprzedażową, a pierwsze transakcje przebiegły bez problemów. Dopiero później zobaczyłam skalę projektu: w ciągu dwóch miesięcy stronę odwiedziło ponad pół miliona użytkowników.</p>
        <p>Ta liczba zmieniła moje podejście do decyzji technicznych. Eleganckie rozwiązanie nie zawsze jest rozwiązaniem wartościowym. Coraz częściej oceniam pomysły przez pryzmat ich realnego wpływu na użytkownika i produkt, a nie wyłącznie atrakcyjności technicznej.</p>`,
      projectId: "project-004",
      picture: "user_panel.png",
    },
    {
      id: "event_0006",
      position: 3,
      date: "lipiec 2023",
      lead: "Na początku wydawało mi się, że frontend to przede wszystkim estetyka i precyzyjne odwzorowanie projektu. Szybko przekonałam się, że prawdziwym wyzwaniem jest przewidywanie tego, jak użytkownik spróbuje interfejs... zepsuć.",
      title: "dołączyłam do zespołu RC",
      description: `
        <p>Do projektu dołączyłam jako stażystka, zaczynając od zadań związanych głównie z precyzyjnym stylowaniem interfejsu. Szybko przekonałam się jednak, że poprawny wygląd to tylko część dobrze zaprojektowanego UI.</p>
        <p>Podczas cotygodniowych prezentacji mój lead regularnie testował nietypowe scenariusze i znajdował przypadki, w których interfejs przestawał działać zgodnie z założeniami.</p>
        <p>Z czasem sama zaczęłam analizować własne rozwiązania z perspektywy użytkownika próbującego je „zepsuć”. Dzięki temu większą uwagę zaczęłam poświęcać obsłudze błędów, stanom brzegowym i odporności interfejsu.</p>`,
      picture: "rc.png",
    },
  ],
};

export const journey_en = {
  title: "journey",
  moments: [
    {
      id: "event_0008",
      position: 3,
      date: "June 2026",
      title: "Portfolio: Storytelling Through UI",
      lead: "Should a portfolio showcase projects—or the person behind them? What started as a simple UI decision became an exploration of how interface design itself can tell a story.",
      description: `
        <p>I finally finished my portfolio. And surprisingly, the biggest challenge
        wasn't polishing the implementation—it was answering one simple question:
        <strong>what should be the main focus of this website?</strong></p>

        <p>Most people would probably choose a project gallery. It seems like the obvious choice.
        But I'm not just a collection of projects.</p>

        <p><strong>I looked at it from the visitor's perspective.</strong>
        If someone visits my portfolio, they're probably trying to get to know me—
        because if they decide to reach out, they'll be talking to me,
        not to a list of my work.</p>

        <p>That's why, instead of a gallery, I chose a <strong>timeline
        that presents each project as another step in my journey</strong>,
        giving the entire portfolio a more personal feel.</p>

        <p>Problem solved. So why do I keep rambling? Because it struck me as an unusually strong example of <strong>shaping user's perception of our website through pure UI</strong>.
        Rather than dwell upon my story in a lengthy "About" section, I could show it through the interface itself.
        It's a simple revelation, but to a frontend dev (who still needs to know her way around the basic UI problems), it was a great reminder that a good interface is, first and foremost, a good narrative.</p>`,
      picture: "portfolio.png",
      projectId: "project-008",
    },
    {
      id: "event_0007",
      position: 3,
      date: "June 2026",
      title: "SET: Revisited",
      lead: "The hardest part of this project wasn't writing the code—it was knowing when to stop. A story about why postponing features can be just as important as building them.",
      description: `
        <p>I started building a browser version of the SET card game before landing my first software development job. Years later, I returned to the project, rewrote a significant part of the code, and prepared the game for release.</p>
        <p>The main challenge was not the code itself, but the constantly expanding scope: extra rules, animations, and a tutorial. Commercial work had taught me to control scope, yet drawing a line under a personal project proved much harder.</p>
        <p>Eventually, what saved me was backlog. Ideas for further development remained, but they no longer blocked the release. The project reminded me that consciously postponing a feature is also a valid product decision.</p>`,
      picture: "set.png",
      projectId: "project-001",
    },
    {
      id: "event_00010",
      position: 1,
      date: "March 2026",
      title: "AI-Powered Email Responder",
      lead: "Does AI actually make us better developers, or just faster ones? A few months of working with AI completely changed the way I think about using language models in software development.",
      description: `
        <p>For a long time, I was wary of AI-assisted coding. I wanted to keep developing my own skills and avoid becoming dependent on a tool whose availability could change.</p>
        <p>A new role, however, required me to quickly start working with ASP.NET Core. I began using an AI-integrated code editor and soon found that its greatest value was not code generation itself, but explaining unfamiliar concepts in the context of a real project.</p>
        <p>I developed my own workflow: I automate tasks I already understand well and use AI as a learning and analysis tool when working with new technologies.</p>
        `,
      picture: "responder.png",
      projectId: "project-002",
    },
    {
      id: "event_0009",
      position: 1,
      date: "February 2026",
      title: "Deep Dive into Data",
      lead: "My first Power BI project turned out to be the beginning of something much bigger than building dashboards. It's the story of discovering data analytics, working closely with clients, and helping companies navigate digital transformation.",
      description: `
        <p>As it turned out, my first Power BI implementation opened the door to the world of data analytics. <strong>I was offered a position at Budowa 2.0,
        a startup focused on the digital transformation of construction companies</strong>.
        Working closely with clients, the company identified processes that could benefit from automation and delivered tailored digital solutions,
        including AI agents, custom applications, and dashboards.
        <p>Although employed in a technical capacity,
        <strong>I actively participated in the whole life cycle of our projects (including the concept phase & planning), coordinated client meetings, and helped establish functional workflows in a very young and fast-growing company</strong>.
        It was a unique opportunity to gain first-hand insight into the modernization of medium-sized and large enterprises, participate in business negotiations,
        and significantl deepen my expertise in data analytics.</p>
        <p>Over the time, however, I found myself increasingly drawn to software development tasks.
        While I enjoyed the new challenges, I realized that what I truly wanted was to return to programming as my full-time focus.</p>`,
      picture: "inspection_reports.png",
      projectId: "project-007",
    },
    {
      id: "event_0002",
      position: 2,
      date: "November 2025",
      title: "Discovering PowerBI",
      lead: "How do you unify years of inconsistent reports without forcing anyone to change the way they work? This project shows that the best technical solutions often improve existing workflows instead of replacing them.",
      description: `
        <p>I received five annual Excel reports, each with a different structure and its own set of data issues. The goal was to standardize them and create a shared summary without disrupting the team's existing workflow.</p>
        <p>I transformed the data in Power Query and visualized the results in Power BI. Team members could continue using their existing reports, while the team lead gained a consistent and readable view of the data.</p>
        <p>The project encouraged me to explore Power BI further and learn more about combining data transformation with interactive reporting.</p>`,
      projectId: "project-005",
    },

    {
      id: "event_0004",
      position: 3,
      date: "January 2025",
      title: "Not A Junior Anymore",
      lead: "What really separates a mid-level developer from a junior? As I discovered, it's less about experience and more about learning to anticipate change before it happens.",
      description: `
        <p>Promotion to a mid-level developer role made me consider what truly distinguishes this level from a junior position. Independence had mattered from the beginning; estimating the cost of changes, identifying risks, and anticipating future business needs proved much more difficult.</p>
        <p>Working on long-term projects showed me that not everything can be predicted. As a result, I began focusing more on maintainability, composition, and modularity.</p>
        <p>Instead of designing code for one expected future, I aim to build solutions that can be extended and changed efficiently.
        `,
    },
    {
      id: "event_0003",
      position: 3,
      date: "2023",
      title: "Smaller Project, Bigger Role",
      // lead: "Building my first project end to end changed the way I looked at software development. Suddenly, success wasn't just about writing code—it was about making decisions, collaborating with people, and taking responsibility for the entire product.",
      // A side project of the company - a food & dining blog - became a chance to take up a new role. As the project's point person from the side of IT, I worked closely with the content team, while also handling the front-end & the CMS (admin panel). Here started my curiosity for big picture behind every app - meetings to hold, decisions to make, and responsibility for the final product.
      lead: `
      A side project of the company - a food & dining blog - became a chance to take up a new role as the project's point person from the side of IT. Here started my curiosity for the big picture behind every app - meetings to hold, decisions to make, and responsibility for the final product.`,
      picture: "blog.png",
      projectId: "project-003",
    },
    {
      id: "event_0005",
      position: 3,
      date: "2024",
      title: "First Major Launch",
      lead: "Only after launch did I realize the scale of the project—over half a million users visited the platform within two months. That experience fundamentally changed how I evaluate technical decisions.",
      description: `
        <p>We launched a new sales platform, and the first transactions were completed without issues. Only later did I understand the scale of the project: more than half a million users visited the website within two months.</p>
        <p>That number changed the way I evaluate technical decisions. An elegant solution is not always a valuable one. I increasingly assess ideas by their real impact on users and the product rather than by technical appeal alone.</p>
        `,
      projectId: "project-004",
      picture: "user_panel.png",
    },
    {
      id: "event_0006",
      position: 3,
      date: "July 2023",
      title: "The First Job",
      lead: "At first, I thought frontend development was mostly about making interfaces look right. It didn't take long to realize that the real challenge is designing for everything users might do to break them.",
      description: `
        <p>I joined the project as an intern, initially working mainly on precise interface styling. I quickly learned that visual accuracy is only one part of a well-designed UI.</p>
        <p>During weekly presentations, my lead regularly tested unusual scenarios and found cases where the interface no longer behaved as expected.</p>
        <p>Over time, I began reviewing my own work from the perspective of a user trying to “break” it. This made me pay much more attention to error handling, edge cases, and interface resilience.</p>
        `,
      picture: "rc.png",
    },
  ],
};
